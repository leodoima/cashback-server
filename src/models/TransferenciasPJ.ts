import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import ContasPJ from './ContasPJ';
import ContaPF from './ContasPF';

@Entity('transferencias_pj')
class TransferenciaPJ {
  @PrimaryColumn()
  id: string;

  @Column()
  contapj_id: number;

  @OneToOne(() => ContasPJ)
  @JoinColumn({ name: 'contapj_id' })
  contapj: ContasPJ;

  @Column()
  contapf_id: number;

  @OneToOne(() => ContaPF)
  @JoinColumn({ name: 'contapf_id' })
  contapf: ContaPF;

  @Column('float')
  valor: number;

  @Column()
  cashback: number;

  @Column('float')
  valor_cashback: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TransferenciaPJ;
