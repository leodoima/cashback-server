import { Router } from 'express';

import CriarClienteService from '../services/CriarClienteService';

const clientesRouter = Router();

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

  // delete cliente.password;

  return response.json(cliente);
});

export default clientesRouter;
