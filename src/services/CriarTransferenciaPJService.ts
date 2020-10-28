import { getCustomRepository } from 'typeorm';

import generateAuto from '../config/generateAuto';
import AppError from '../errors/AppEror';
import TransferenciaPJ from '../models/TransferenciasPJ';
import ClienteRepository from '../repositories/ClientesRepository';
import EmpresaRepository from '../repositories/EmpresasRepository';
import ContaPFRepository from '../repositories/ContasPFRepository';
import ContaPJRepository from '../repositories/ContasPJRepository';
import TransferenciaPJRepository from '../repositories/TransferenciasPJRepository';

interface Request {
  empresa_id: string;
  cliente_id: string;
  valor: number;
}

class CreateTransferenciaPJService {
  public async execute({
    empresa_id,
    cliente_id,
    valor,
  }: Request): Promise<TransferenciaPJ> {
    const clienteRepository = getCustomRepository(ClienteRepository);
    const cliente = await clienteRepository.findOne({
      where: { id: cliente_id },
    });

    const empresaRepository = getCustomRepository(EmpresaRepository);
    const empresa = await empresaRepository.findOne({
      where: { id: empresa_id },
    });

    if (!empresa || !cliente) {
      throw new AppError('Dados inválidos, favor repetir a operação');
    }

    const transferenciaPJRepository = getCustomRepository(
      TransferenciaPJRepository,
    );

    const code_transferencia = generateAuto.generateCodeTransfers();

    const transferencia = transferenciaPJRepository.create({
      id: code_transferencia,
      empresa,
      cliente,
      valor,
      cashback: empresa.cashback,
    });

    const valor_cashback = (valor * empresa.cashback) / 100;

    await transferenciaPJRepository.save(transferencia);

    const contaPJRepository = getCustomRepository(ContaPJRepository);
    await contaPJRepository.alterarSaldo(empresa, valor_cashback);

    const contaPFRepository = getCustomRepository(ContaPFRepository);
    await contaPFRepository.alterarSaldo(cliente, valor_cashback);

    return transferencia;
  }
}

export default CreateTransferenciaPJService;
