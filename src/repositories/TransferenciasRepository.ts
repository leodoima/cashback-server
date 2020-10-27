import { EntityRepository, Repository } from 'typeorm';
import Transferencia from '../models/Transferencias';

@EntityRepository(Transferencia)
class TransferenciasRepository extends Repository<Transferencia> {
  public async findBySource(source: string): Promise<Transferencia | null> {
    const findSource = await this.findOne({
      where: { source },
    });
    return findSource || null;
  }
}

export default TransferenciasRepository;
