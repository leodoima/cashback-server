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
}

export default ContaPJRepository;
