import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDetailsColumn1713181933098 implements MigrationInterface {
  name = 'AddDetailsColumn1713181933098';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_video" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "url" varchar NOT NULL, "details" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_video"("id", "name", "url") SELECT "id", "name", "url" FROM "video"`,
    );
    await queryRunner.query(`DROP TABLE "video"`);
    await queryRunner.query(`ALTER TABLE "temporary_video" RENAME TO "video"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "video" RENAME TO "temporary_video"`);
    await queryRunner.query(
      `CREATE TABLE "video" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "url" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "video"("id", "name", "url") SELECT "id", "name", "url" FROM "temporary_video"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_video"`);
  }
}
