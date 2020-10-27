import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ContasPJRepository from '../repositories/ContasPJRepository';
import CriarContasPJService from '../services/CriarContaPJService';

const contasPJRouter = Router();

contasPJRouter.get('/', async (request, response) => {
  const contasPJRepository = getCustomRepository(ContasPJRepository);
  const contas = await contasPJRepository.find();

  return response.json(contas);
});

contasPJRouter.post('/', async (request, response) => {
  const { id } = request.body;

  const createContasPJ = new CriarContasPJService();
  const conta = await createContasPJ.execute({
    id,
  });

  return response.json({ conta });
});

export default contasPJRouter;
