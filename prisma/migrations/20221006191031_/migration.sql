/*
  Warnings:

  - The values [classic] on the enum `styleTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "styleTypes_new" AS ENUM ('cursive', 'modern');
ALTER TABLE "layouts" ALTER COLUMN "style" DROP DEFAULT;
ALTER TABLE "layouts" ALTER COLUMN "style" TYPE "styleTypes_new" USING ("style"::text::"styleTypes_new");
ALTER TYPE "styleTypes" RENAME TO "styleTypes_old";
ALTER TYPE "styleTypes_new" RENAME TO "styleTypes";
DROP TYPE "styleTypes_old";
ALTER TABLE "layouts" ALTER COLUMN "style" SET DEFAULT 'modern';
COMMIT;

-- AlterTable
ALTER TABLE "layouts" ALTER COLUMN "style" SET DEFAULT 'modern';
