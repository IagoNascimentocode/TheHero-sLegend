import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStores1628734785419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "stores",
                columns: [
                    {
                        name: "id",
                        type: "numeric",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "shelf_from_armor",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "shelf_from_sword",
                        type: "uuid",
                        isNullable: true
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
                        name: "FKArmor",
                        referencedTableName: "armors",
                        referencedColumnNames: ["id"],
                        columnNames: ["shelf_from_armor"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKSword",
                        referencedTableName: "swords",
                        referencedColumnNames: ["id"],
                        columnNames: ["shelf_from_sword"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("stores")
    }

}
