import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateChests1627424810148 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "chests",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "wallet",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "sword_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "armor_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "create_at",
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
                    },
                    {
                        name: "FKSword",
                        referencedTableName: "swords",
                        referencedColumnNames: ["id"],
                        columnNames: ["sword_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKArmor",
                        referencedTableName: "armor",
                        referencedColumnNames: ["id"],
                        columnNames: ["armor_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("chests")
    }

}
