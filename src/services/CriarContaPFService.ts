import { getCustomRepository } from 'typeorm';

import ContasPFRepository from '../repositories/ContasPFRepository';
import ClientesRepository from '../repositories/ClientesRepository';
import generateAuto from '../config/generateAuto';
import AppError from '../errors/AppEror';
import ContasPF from '../models/ContasPF';

interface Request {
  id: string;
}

class CreateContaPFService {
  public async execute(id: Request): Promise<ContasPF> {
    const clientesRepository = getCustomRepository(ClientesRepository);
    const cliente = await clientesRepository.findOne({ where: id });

    const contasPFRepository = getCustomRepository(ContasPFRepository);
    const findContaExists = await contasPFRepository.findOne({
      where: { cliente },
    });

    if (findContaExists) {
      throw new AppError('Usuário já possui conta');
    }

    const conta_card = generateAuto.generateCodeCards();

    const contaPF = contasPFRepository.create({
      id: conta_card,
      saldo: 0,
      cliente,
    });

    await contasPFRepository.save(contaPF);

    return contaPF;
  }
}

export default CreateContaPFService;
