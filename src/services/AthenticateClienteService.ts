import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Cliente from '../models/Clientes';
import authConfig from '../config/auth';
import AppError from '../errors/AppEror';

interface Request {
  email: string;
  password: string;
}

interface Response {
  cliente: Cliente;
  token: string;
}

class AuthenticateClienteService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(Cliente);

    const cliente = await usersRepository.findOne({
      where: { email, status: true },
    });

    if (!cliente) {
      throw new AppError('E-mail ou senha inválidos', 401);
    }

    const passwordMatched = await compare(password, cliente.password);

    if (!passwordMatched) {
      throw new AppError('E-mail ou senha inválidos', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: cliente.id,
      expiresIn,
    });

    return {
      cliente,
      token,
    };
  }
}

export default AuthenticateClienteService;
