import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategoryTable1598647041223 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'category',
            columns: [
                {
                    name: 'id',
                    type: 'INTEGER',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255'
                },
                {
                    name: 'type',
                    type: 'varchar',
                    length: '255'
                },
                {
                    name: 'created_at',
                    type: 'timestamptz',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamptz',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category');
    }

}
