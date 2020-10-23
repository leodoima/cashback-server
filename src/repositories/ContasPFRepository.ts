import { EntityRepository, Repository } from 'typeorm';

import ContaPF from '../models/ContasPF';
import Clientes from '../models/Clientes';

@EntityRepository(ContaPF)
class ContaPFRepository extends Repository<ContaPF> {
  public async findByIdConta(cliente: Clientes): Promise<ContaPF | null> {
    const findContaPF = await this.findOne({
      where: { cliente_id: cliente.id },
    });

    return findContaPF || null;
  }
}

export default ContaPFRepository;
