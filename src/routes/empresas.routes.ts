import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CriarEmpresaService from '../services/CriarEmpresaService';
import EmpresasRepository from '../repositories/EmpresasRepository';

const empresasRouter = Router();

empresasRouter.get('/', async (request, response) => {
  const empresasRepository = getCustomRepository(EmpresasRepository);
  const empresas = await empresasRepository.find();

  return response.json(empresas);
});

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
