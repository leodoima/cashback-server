import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('transferencias')
class Transferencia {
  @PrimaryColumn()
  id: string;

  @Column()
  conta_origem: string;

  @Column()
  conta_destino: string;

  @Column('float')
  valor: number;

  @Column()
  cashback: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transferencia;
