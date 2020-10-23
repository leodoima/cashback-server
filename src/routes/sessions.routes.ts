import { Router } from 'express';

import AuthenticateClienteService from '../services/AthenticateClienteService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUserCliente = new AuthenticateClienteService();

  const { cliente, token } = await authenticateUserCliente.execute({
    email,
    password,
  });

  // Melhorar este tópico
  delete cliente.password;
  delete cliente.cpf;
  delete cliente.endereco;
  delete cliente.telefone;
  delete cliente.status;

  return response.json({ cliente, token });
});

export default sessionsRouter;
