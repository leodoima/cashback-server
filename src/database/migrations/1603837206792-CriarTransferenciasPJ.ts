import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarTransferenciasPJ1603837206792
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transferencias_pj',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'contapj_id',
            type: 'integer',
          },
          {
            name: 'contapf_id',
            type: 'integer',
          },
          {
            name: 'valor',
            type: 'float',
          },
          {
            name: 'cashback',
            type: 'integer',
          },
          {
            name: 'valor_cashback',
            type: 'float',
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
    await queryRunner.dropTable('transferencias_pj');
  }
}
