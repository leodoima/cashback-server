import { Router } from 'express';

import CriarEmpresaService from '../services/CriarEmpresaService';

const empresasRouter = Router();

empresasRouter.post('/', async (request, response) => {
  const {
    cnpj,
    nome_fantasia,
    razao_social,
    endereco,
    telefone,
    responsavel_nome,
    responsavel_cpf,
    responsavel_email,
    password,
    cashback,
  } = request.body;

  const createEmpresa = new CriarEmpresaService();

  const empresa = await createEmpresa.execute({
    cnpj,
    nome_fantasia,
    razao_social,
    endereco,
    telefone,
    responsavel_nome,
    responsavel_cpf,
    responsavel_email,
    password,
    cashback,
  });

  // delete cliente.password;

  return response.json(empresa);
});

export default empresasRouter;
