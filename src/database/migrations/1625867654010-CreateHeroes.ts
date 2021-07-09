import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHeroes1625867654010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "heroes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "life",
                        type: "numeric"
                    },
                    {
                        name: "damage",
                        type: "numeric"
                    },
                    {
                        name: "armor",
                        type: "numeric"
                    },
                    {
                        name: "strength",
                        type: "numeric"
                    },
                    {
                        name: "agility",
                        type: "numeric"
                    },
                    {
                        name: "intelligence",
                        type: "numeric"
                    },
                    {
                        name: "movementSpeed",
                        type: "numeric"
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("heroes")
    }

}
