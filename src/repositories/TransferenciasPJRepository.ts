import { EntityRepository, Repository } from 'typeorm';
// import Cliente from '../models/Clientes';
import TransferenciaPJ from '../models/TransferenciasPJ';

@EntityRepository(TransferenciaPJ)
class TransferenciasPJRepository extends Repository<TransferenciaPJ> {
  // public async findByClienteEmpresa(
  //   empresa_id: string,
  //   cliente_id: string,
  // ): Promise<Empresa> {
  //   const findSource = await this.findOne({
  //     where: { source },
  //   });
  //   return findSource || null;
  // }
}

export default TransferenciasPJRepository;
