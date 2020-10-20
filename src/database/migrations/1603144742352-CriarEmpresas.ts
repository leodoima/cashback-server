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
            type: 'integer',
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
            name: 'endereco',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'integer',
          },
          {
            name: 'responsavel_nome',
            type: 'varchar',
          },
          {
            name: 'responsavel_cpf',
            type: 'integer',
          },
          {
            name: 'responsavel_email',
            type: 'varchar',
          },
          {
            name: 'responsavel_telefone',
            type: 'integer',
          },
          {
            name: 'cashback',
            type: 'float',
          },
          {
            name: 'status',
            type: 'boolean',
            default: true,
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
