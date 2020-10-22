import { EntityRepository, Repository } from 'typeorm';
import Empresa from '../models/Empresas';

@EntityRepository(Empresa)
class EmpresasRepository extends Repository<Empresa> {
  public async findByEmailOrCNPJ(
    responsavel_email: string,
    cnpj: string,
  ): Promise<Empresa | null> {
    const findEmpresa = await this.findOne({
      where: [{ responsavel_email }, { cnpj }],
    });

    return findEmpresa || null;
  }
}

export default EmpresasRepository;
