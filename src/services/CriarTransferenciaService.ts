import { getCustomRepository } from 'typeorm';

import generateAuto from '../config/generateAuto';
import AppError from '../errors/AppEror';
import Transferencia from '../models/Transferencias';
import TransferenciasRepository from '../repositories/TransferenciasRepository';

interface Request {
  conta_origem: string;
  conta_destino: string;
  valor: number;
  cashback: number;
}

class CreateTransferenciaService {
  public async execute({
    conta_origem,
    conta_destino,
    valor,
    cashback,
  }: Request): Promise<Transferencia> {
    const transferenciasRepository = getCustomRepository(
      TransferenciasRepository,
    );

    if (!conta_origem || !conta_destino || !valor || !cashback) {
      throw new AppError('Dados inválidos, favor repetir a operação');
    }

    const code_transferencia = generateAuto.generateCodeTransfers();

    const transferencia = transferenciasRepository.create({
      id: code_transferencia,
      conta_origem,
      conta_destino,
      valor,
      cashback,
    });

    await transferenciasRepository.save(transferencia);

    return transferencia;
  }
}

export default CreateTransferenciaService;
