import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterarColunaCashbackEmpresa1603235667829
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'empresas',
      'cashback',
      new TableColumn({
        name: 'cashback',
        type: 'integer',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'empresas',
      'cashback',
      new TableColumn({
        name: 'cashback',
        type: 'float',
      }),
    );
  }
}
