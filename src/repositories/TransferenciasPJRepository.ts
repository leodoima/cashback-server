import { EntityRepository, Repository } from 'typeorm';
import TransferenciaPJ from '../models/TransferenciasPJ';

@EntityRepository(TransferenciaPJ)
class TransferenciasPJRepository extends Repository<TransferenciaPJ> {}

export default TransferenciasPJRepository;
