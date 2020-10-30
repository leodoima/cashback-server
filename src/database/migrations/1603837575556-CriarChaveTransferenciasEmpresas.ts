import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CriarChaveTransferenciasEmpresas1603837575556
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'transferencias_pj',
      new TableForeignKey({
        name: 'TransferenciaPJEmpresa',
        columnNames: ['contapj_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contas_pj',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'transferencias_pj',
      new TableForeignKey({
        name: 'TransferenciaPJCliente',
        columnNames: ['contapf_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contas_pf',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'transferencias_pj',
      'TransferenciaPJEmpresa',
    );
    await queryRunner.dropForeignKey(
      'transferencias_pj',
      'TransferenciaPJCliente',
    );
  }
}
