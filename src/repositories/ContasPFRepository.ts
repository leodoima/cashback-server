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
    contaPF: ContaPF,
    valor_cashback: number,
  ): Promise<ContaPF | null> {
    if (!contaPF) {
      return null;
    }

    const saldo = Number.parseFloat(
      (contaPF.saldo + valor_cashback).toFixed(2),
    );
    contaPF.saldo = saldo;

    await this.save(contaPF);

    return contaPF;
  }
}

export default ContaPFRepository;
