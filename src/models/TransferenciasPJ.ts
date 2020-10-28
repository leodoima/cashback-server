import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Empresa from './Empresas';
import Cliente from './Clientes';

@Entity('transferencias_pj')
class TransferenciaPJ {
  @PrimaryColumn()
  id: string;

  @Column()
  empresa_id: string;

  @OneToOne(() => Empresa)
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;

  @Column()
  cliente_id: string;

  @OneToOne(() => Cliente)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  @Column('float')
  valor: number;

  @Column()
  cashback: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TransferenciaPJ;
