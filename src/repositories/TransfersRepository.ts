import { EntityRepository, Repository } from 'typeorm';
import Transfer from '../models/Transfer';

@EntityRepository(Transfer)
class TransfersRepository extends Repository<Transfer> {
  public async findBySource(source: string): Promise<Transfer | null> {
    const findSource = await this.findOne({
      where: { source },
    });
    return findSource || null;
  }
}

export default TransfersRepository;
