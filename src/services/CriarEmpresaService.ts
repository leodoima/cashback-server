import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppEror';
import Empresa from '../models/Empresas';
import EmpresasRepository from '../repositories/EmpresasRepository';

interface Request {
  cnpj: string;
  nome_fantasia: string;
  razao_social: string;
  endereco: string;
  telefone: string;
  responsavel_nome: string;
  responsavel_cpf: string;
  responsavel_email: string;
  password: string;
  cashback: number;
}

class CreateEmpresaService {
  public async execute({
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
  }: Request): Promise<Empresa> {
    const empresasRepository = getCustomRepository(EmpresasRepository);
    const findEmpresaInUse = await empresasRepository.findByEmailOrCNPJ(
      responsavel_email,
      cnpj,
    );

    if (findEmpresaInUse) {
      throw new AppError('CNPJ ou e-mail já cadastrados');
    }

    const hashedPassword = await hash(password, 8);

    const empresa = empresasRepository.create({
      cnpj,
      nome_fantasia,
      razao_social,
      endereco,
      telefone,
      responsavel_email,
      responsavel_cpf,
      responsavel_nome,
      password: hashedPassword,
      cashback,
    });

    await empresasRepository.save(empresa);

    return empresa;
  }
}

export default CreateEmpresaService;
