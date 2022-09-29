/*
  Warnings:

  - The `style` column on the `layouts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `logo` to the `portfolios` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "styleTypes" AS ENUM ('classic', 'modern');

-- AlterTable
ALTER TABLE "layouts" ALTER COLUMN "boxSize" SET DEFAULT 'medium',
DROP COLUMN "style",
ADD COLUMN     "style" "styleTypes" NOT NULL DEFAULT 'classic';

-- AlterTable
ALTER TABLE "portfolios" ADD COLUMN     "logo" TEXT NOT NULL;
