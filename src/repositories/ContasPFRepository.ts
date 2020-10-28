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

  public async alterarSaldo(
    cliente: Clientes,
    valor_cashback: number,
  ): Promise<ContaPF | null> {
    const conta = await this.findOne({
      where: { cliente },
    });

    if (!conta) {
      return null;
    }

    const saldo = conta?.saldo + valor_cashback;
    conta.saldo = saldo;

    await this.save(conta);

    return conta;
  }
}

export default ContaPFRepository;
