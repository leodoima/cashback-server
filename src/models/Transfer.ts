import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('transfers')
class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  source_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'source_id' })
  source: User;

  @Column()
  destiny: string;

  @Column('float')
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transfer;
