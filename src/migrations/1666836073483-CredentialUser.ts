import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CredentialUser1666836073483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "credential_user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_name",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("credential_user");
  }
}
