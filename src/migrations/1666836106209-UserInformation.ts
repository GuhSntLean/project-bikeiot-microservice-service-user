import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserInformation1666836106209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "user_information",
              columns: [],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_information");
    }

}
