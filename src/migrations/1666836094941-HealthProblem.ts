import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class HealthProblem1666836094941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "health_problem",
              columns: [],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("health_problem");
    }

}
