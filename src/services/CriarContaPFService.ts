import { getCustomRepository } from 'typeorm';

import ContasPFRepository from '../repositories/ContasPFRepository';
import generateAuto from '../config/generateAuto';
import AppError from '../errors/AppEror';
import Clientes from '../models/Clientes';
import ContasPF from '../models/ContasPF';

class CreateContaPFService {
  public async execute(cliente: Clientes): Promise<ContasPF | null> {
    const contasPFRepository = getCustomRepository(ContasPFRepository);
    const findClienteInUse = await contasPFRepository.findByIdConta(cliente);

    if (findClienteInUse) {
      throw new AppError('Dados do cliente em uso');
    }

    const conta_card = generateAuto.generateCodeCards();

    const contaPF = contasPFRepository.create({
      id: conta_card,
      cliente,
      saldo: 0,
    });
    await contasPFRepository.save(contaPF);

    return contaPF || null;
  }
}

export default CreateContaPFService;
