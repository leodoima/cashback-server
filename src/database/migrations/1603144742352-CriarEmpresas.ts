import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarEmpresas1603144742352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'empresas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'cnpj',
            type: 'number',
            isUnique: true,
          },
          {
            name: 'nome_fantasia',
            type: 'varchar',
          },
          {
            name: 'razao_social',
            type: 'varchar',
          },
          {
            name: 'responsavel',
            type: 'varchar',
          },
          {
            name: 'cpf_responsavel',
            type: 'number',
          },
          {
            name: 'telefone',
            type: 'number',
          },
          {
            name: 'endereco',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'cashback',
            type: 'float',
          },
          {
            name: 'status',
            type: 'boolean',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('empresas');
  }
}
