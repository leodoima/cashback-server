import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CriarChaveClientesContas1603153495116
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'contas_pf',
      new TableForeignKey({
        name: 'ContaCliente',
        columnNames: ['cliente_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clientes',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('contas_pf', 'ContaCliente');
  }
}
