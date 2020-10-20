import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CriarChaveEmpresasContas1603156338688
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'contas_pj',
      new TableForeignKey({
        name: 'ContaEmpresa',
        columnNames: ['empresa_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'empresas',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('contas_pj', 'ContaEmpresa');
  }
}
