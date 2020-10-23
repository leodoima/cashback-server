import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ClientesRepository from '../repositories/ClientesRepository';
import CriarClienteService from '../services/CriarClienteService';
// import CriarContaPFService from '../services/CriarContaPFService';

const clientesRouter = Router();

clientesRouter.get('/', async (request, response) => {
  const clientesRepository = getCustomRepository(ClientesRepository);
  const clientes = await clientesRepository.find();

  return response.json(clientes);
});

clientesRouter.post('/', async (request, response) => {
  const { nome, cpf, email, telefone, endereco, password } = request.body;

  const createCliente = new CriarClienteService();
  const cliente = await createCliente.execute({
    nome,
    cpf,
    email,
    telefone,
    endereco,
    password,
  });

  delete cliente.password;

  return response.json({ cliente });
});

export default clientesRouter;
