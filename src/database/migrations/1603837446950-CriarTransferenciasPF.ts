import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarTransferenciasPF1603837446950
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transferencias_pf',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'cliente_id',
            type: 'uuid',
          },
          {
            name: 'empresa_id',
            type: 'uuid',
          },
          {
            name: 'valor',
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
    await queryRunner.dropTable('transferencias_pf');
  }
}
