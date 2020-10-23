import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppEror';
import ContasPFRepository from '../repositories/ContasPFRepository';
import CriarContasPFService from '../services/CriarContaPFService';
import ClientesRepository from '../repositories/ClientesRepository';
import Cliente from '../models/Clientes';

const contasPFRouter = Router();

contasPFRouter.get('/', async (request, response) => {
  const contasPFRepository = getCustomRepository(ContasPFRepository);
  const contas = await contasPFRepository.find();

  return response.json(contas);
});

contasPFRouter.post('/', async (request, response) => {
  // const { id } = request.body;
  // const contasPFRepository = getCustomRepository(ClientesRepository);
  // const cliente = contasPFRepository.findOne({ where: id });
  // if (!cliente) {
  //   throw new AppError('Cliente não encontrado');
  // }
  // const createContasPF = new CriarContasPFService();
  // const conta = await createContasPF.execute({
  //   cliente,
  // });
  // return response.json({ 'ok' });
});

export default contasPFRouter;
