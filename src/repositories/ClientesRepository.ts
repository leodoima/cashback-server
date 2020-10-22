import { EntityRepository, Repository } from 'typeorm';
import Cliente from '../models/Clientes';

@EntityRepository(Cliente)
class ClientesRepository extends Repository<Cliente> {
  public async findByEmailOrCPF(
    email: string,
    cpf: string,
  ): Promise<Cliente | null> {
    const findCliente = await this.findOne({
      where: [{ email }, { cpf }],
    });

    return findCliente || null;
  }
}

export default ClientesRepository;
