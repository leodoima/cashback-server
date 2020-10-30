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
    contaPJ: ContaPJ,
    valor_cashback: number,
  ): Promise<ContaPJ | null> {
    if (!contaPJ) {
      return null;
    }

    const saldo = Number.parseFloat(
      (contaPJ.saldo - valor_cashback).toFixed(2),
    );

    contaPJ.saldo = saldo;

    await this.save(contaPJ);

    return contaPJ;
  }
}

export default ContaPJRepository;
