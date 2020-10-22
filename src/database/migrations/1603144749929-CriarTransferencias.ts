import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CriarTransferencias1603144749929
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transferencias',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'conta_origem',
            type: 'uuid',
          },
          {
            name: 'conta_destino',
            type: 'uuid',
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
    await queryRunner.dropTable('transferencias');
  }
}
