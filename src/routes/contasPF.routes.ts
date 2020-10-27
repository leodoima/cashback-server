import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ContasPFRepository from '../repositories/ContasPFRepository';
import CriarContasPFService from '../services/CriarContaPFService';

const contasPFRouter = Router();

contasPFRouter.get('/', async (request, response) => {
  const contasPFRepository = getCustomRepository(ContasPFRepository);
  const contas = await contasPFRepository.find();

  return response.json(contas);
});

contasPFRouter.post('/', async (request, response) => {
  const { id } = request.body;

  const createContasPF = new CriarContasPFService();
  const conta = await createContasPF.execute({
    id,
  });

  return response.json({ conta });
});

export default contasPFRouter;
