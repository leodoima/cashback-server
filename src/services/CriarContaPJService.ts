import { getCustomRepository } from 'typeorm';

import ContasPJRepository from '../repositories/ContasPJRepository';
import EmpresasRepository from '../repositories/EmpresasRepository';
import generateAuto from '../config/generateAuto';
import AppError from '../errors/AppEror';
import ContasPJ from '../models/ContasPJ';

interface Request {
  id: string;
}

class CreateContaPJService {
  public async execute(id: Request): Promise<ContasPJ> {
    const empresasRepository = getCustomRepository(EmpresasRepository);
    const empresa = await empresasRepository.findOne({ where: id });

    const contasPJRepository = getCustomRepository(ContasPJRepository);
    const findContaExists = await contasPJRepository.findOne({
      where: { empresa },
    });

    if (findContaExists) {
      throw new AppError('Empresa já possui conta');
    }

    const conta_card = generateAuto.generateCodeCards();

    const contaPJ = contasPJRepository.create({
      id: conta_card,
      saldo: 0,
      empresa,
      status: true,
    });

    await contasPJRepository.save(contaPJ);

    return contaPJ;
  }
}

export default CreateContaPJService;
