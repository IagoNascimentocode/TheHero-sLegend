import { MigrationInterface, QueryRunner, Table, Timestamp } from "typeorm";

export class CreateSwords1626903806669 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "swords",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "damage",
                        type: "numeric"
                    },
                    {
                        name: "weight",
                        type: "numeric"
                    },
                    {
                        name: "price",
                        type: "numeric"
                    },
                    {
                        name: "store_id",
                        type: "numeric",
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
                        name: "FKStore",
                        referencedTableName: "stores",
                        referencedColumnNames: ["id"],
                        columnNames: ["store_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("swords")
    }

}