import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserInformation1666836106209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "user_information",
              columns: [
                {
                  name: 'id',
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: 'first_name',
                  type: 'string',
                },
                {
                  name: 'last_name',
                  type: 'string',
                },
                {
                  name: 'cell-phone',
                  type: 'string' ,
                },
                {
                  name: 'phone',
                  type: 'string',
                },
                {
                  name: 'credential_id',
                  type: 'uuid',
                }
              ],
              foreignKeys: [
                {
                  name: "TokenCredential",
                  referencedTableName: "credential_user",
                  referencedColumnNames: ["id"],
                  columnNames: ["credential_id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_information");
    }

}
