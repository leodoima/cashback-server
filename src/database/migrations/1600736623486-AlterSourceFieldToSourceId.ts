/* import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterSourceFieldToSourceId1600736623486
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('transfers', 'source');
    await queryRunner.addColumn(
      'transfers',
      new TableColumn({
        name: 'source_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'transfers',
      new TableForeignKey({
        name: 'TransferSource',
        columnNames: ['source_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tranfers', 'TransferSource');
    await queryRunner.dropColumn('transfers', 'source_id');
    await queryRunner.addColumn(
      'transfers',
      new TableColumn({
        name: 'source',
        type: 'varchar',
      }),
    );
  }
}
*/
