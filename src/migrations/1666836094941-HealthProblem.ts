import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class HealthProblem1666836094941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "health_problem",
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                },
                {
                  name: 'medicine_allergy',
                  type: 'varchar',
                },
                {
                  name: 'health problems',
                  type: 'varchar',
                },
                {
                  name:'food_allergy',
                  type: 'varchar',
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
        await queryRunner.dropTable("health_problem");
    }

}
