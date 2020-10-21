import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('empresas')
class Empresa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cnpj: number;

  @Column()
  nome_fantasia: string;

  @Column()
  razao_social: string;

  @Column()
  endereco: string;

  @Column()
  telefone: number;

  @Column()
  responsavel_nome: string;

  @Column()
  responsavel_cpf: number;

  @Column()
  responsavel_email: string;

  @Column()
  responsavel_telefone: number;

  @Column()
  cashback: number;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Empresa;
