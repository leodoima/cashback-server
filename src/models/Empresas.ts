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
  cnpj: string;

  @Column()
  nome_fantasia: string;

  @Column()
  razao_social: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column()
  responsavel_nome: string;

  @Column()
  responsavel_cpf: string;

  @Column()
  responsavel_email: string;

  @Column()
  password: string;

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
