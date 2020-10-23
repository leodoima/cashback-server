import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarContasPJ1603144764928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contas_pj',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'empresa_id',
            type: 'uuid',
            isUnique: true,
          },
          {
            name: 'saldo',
            type: 'float',
            default: 0,
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
    await queryRunner.dropTable('contas_pj');
  }
}
