import { EntityRepository, Repository } from 'typeorm';

import ContaPJ from '../models/ContasPJ';
import Empresas from '../models/Empresas';

@EntityRepository(ContaPJ)
class ContaPJRepository extends Repository<ContaPJ> {
  public async findByIdConta(empresa: Empresas): Promise<ContaPJ | null> {
    const findContaPJ = await this.findOne({
      where: { empresa_id: empresa.id },
    });

    return findContaPJ || null;
  }

  public async alterarSaldo(
    empresa: Empresas,
    valor_cashback: number,
  ): Promise<ContaPJ | null> {
    const conta = await this.findOne({
      where: { empresa },
    });

    if (!conta) {
      return null;
    }

    const saldo = conta?.saldo - valor_cashback;
    conta.saldo = saldo;

    await this.save(conta);

    return conta;
  }
}

export default ContaPJRepository;
