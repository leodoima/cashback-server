import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppEror';
import Transfer from '../models/Transfer';
import TransfersRepository from '../repositories/TransfersRepository';

interface Request {
  source_id: string;
  destiny: string;
  price: number;
}

class CreateTransferService {
  public async execute({
    source_id,
    destiny,
    price,
  }: Request): Promise<Transfer> {
    const transfersRepository = getCustomRepository(TransfersRepository);

    if (!price || !source_id || !destiny) {
      throw new AppError('Dados inválidos, favor repetir a operação');
    }

    const transfer = transfersRepository.create({
      source_id,
      destiny,
      price,
    });

    await transfersRepository.save(transfer);

    return transfer;
  }
}

export default CreateTransferService;
