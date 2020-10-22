import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppEror';
import Cliente from '../models/Clientes';
import ClientesRepository from '../repositories/ClientesRepository';

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
    const clientesRepository = getCustomRepository(ClientesRepository);
    const findClienteInUse = await clientesRepository.findByEmailOrCPF(
      email,
      cpf,
    );

    if (findClienteInUse) {
      throw new AppError('Dados do cliente em uso');
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
