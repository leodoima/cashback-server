import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppEror';
import generateAuto from '../config/generateAuto';
import EmpresaRepository from '../repositories/EmpresasRepository';
import TransferenciaPJ from '../models/TransferenciasPJ';
import ContaPFRepository from '../repositories/ContasPFRepository';
import ContaPJRepository from '../repositories/ContasPJRepository';
import TransferenciaPJRepository from '../repositories/TransferenciasPJRepository';

interface Request {
  contapj_id: number;
  contapf_id: number;
  valor: number;
}

class CreateTransferenciaPJService {
  public async execute({
    contapj_id,
    contapf_id,
    valor,
  }: Request): Promise<TransferenciaPJ> {
    const contaPFRepository = getCustomRepository(ContaPFRepository);
    const contapf = await contaPFRepository.findOne({
      where: { id: contapf_id },
    });

    const contaPJRepository = getCustomRepository(ContaPJRepository);
    const contapj = await contaPJRepository.findOne({
      where: { id: contapj_id },
    });

    if (!contapj || !contapf) {
      throw new AppError('Dados inválidos, favor repetir a operação');
    }

    const empresaRepository = getCustomRepository(EmpresaRepository);
    const empresa = await empresaRepository.findOne({
      where: { id: contapj.empresa_id },
    });

    if (!empresa) {
      throw new AppError('Erro ao acesso dados da empresa');
    }

    const transferenciaPJRepository = getCustomRepository(
      TransferenciaPJRepository,
    );

    const code_transferencia = generateAuto.generateCodeTransfers();

    const valor_cashback = Number.parseFloat(
      ((valor * empresa.cashback) / 100).toFixed(2),
    );

    await contaPJRepository.alterarSaldo(contapj, valor_cashback);
    await contaPFRepository.alterarSaldo(contapf, valor_cashback);

    const transferencia = transferenciaPJRepository.create({
      id: code_transferencia,
      contapj,
      contapf,
      valor,
      cashback: empresa.cashback,
      valor_cashback,
    });

    await transferenciaPJRepository.save(transferencia);

    return transferencia;
  }
}

export default CreateTransferenciaPJService;
