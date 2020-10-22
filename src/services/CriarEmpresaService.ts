import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppEror';
import Empresa from '../models/Empresas';
import Cliente from '../models/Clientes';

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
    const empresasRepository = getRepository(Empresa);
    const clientesRepository = getRepository(Cliente);

    const checkEmpresaCNPJExists = await empresasRepository.find({
      where: [{ cnpj }, { responsavel_email }],
    });

    if (checkEmpresaCNPJExists.length > 0) {
      throw new AppError('CNPJ ou e-mail já cadastrados');
    }

    // Fazendo checagem também com a tabela de clientes
    const checkClienteEmailExists = await clientesRepository.findOne({
      where: { email: responsavel_email },
    });

    if (checkClienteEmailExists) {
      throw new AppError('E-mail cadastrado como cliente');
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
