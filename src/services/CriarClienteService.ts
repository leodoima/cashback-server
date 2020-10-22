import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppEror';
import Cliente from '../models/Clientes';

interface Request {
  nome: string;
  cpf: string;
  email: string;
  endereco: string;
  telefone: string;
  password: string;
}

class CreateClienteService {
  public async execute({
    nome,
    cpf,
    email,
    endereco,
    telefone,
    password,
  }: Request): Promise<Cliente> {
    const clientesRepository = getRepository(Cliente);

    const checkClienteEmailExists = await clientesRepository.findOne({
      where: { email },
    });

    if (checkClienteEmailExists) {
      throw new AppError('E-mail do cliente já cadastrado');
    }

    const checkClienteCPFExists = await clientesRepository.findOne({
      where: { cpf },
    });

    if (checkClienteCPFExists) {
      throw new AppError('CPF do cliente já cadastrado');
    }

    const hashedPassword = await hash(password, 8);

    const cliente = clientesRepository.create({
      nome,
      cpf,
      email,
      endereco,
      telefone,
      password: hashedPassword,
    });

    await clientesRepository.save(cliente);

    return cliente;
  }
}

export default CreateClienteService;
