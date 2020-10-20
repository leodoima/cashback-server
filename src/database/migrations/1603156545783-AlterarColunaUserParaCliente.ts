import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterarColunaUserParaCliente1603156545783
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('contas_pf', 'user_id');

    await queryRunner.addColumn(
      'contas_pf',
      new TableColumn({
        name: 'cliente_id',
        type: 'uuid',
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('contas_pf', 'cliente_id');

    await queryRunner.addColumn(
      'contas_pf',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isUnique: true,
      }),
    );
  }
}
