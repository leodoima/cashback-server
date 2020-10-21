import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterarColunaCashbackTransferencias1603236177583
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'transferencias',
      'cashback',
      new TableColumn({
        name: 'cashback',
        type: 'integer',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'transferencias',
      'cashback',
      new TableColumn({
        name: 'cashback',
        type: 'float',
      }),
    );
  }
}
