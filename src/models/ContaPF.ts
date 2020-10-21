import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Usuario from './Usuario';

@Entity('conta_pf')
class ContaPF {
  @PrimaryColumn()
  id: number;

  @Column()
  cliente_id: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Usuario;

  @Column('float')
  saldo: number;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ContaPF;
