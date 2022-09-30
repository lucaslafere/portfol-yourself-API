/*
  Warnings:

  - Made the column `boxSize` on table `layouts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `style` on table `layouts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isStore` on table `layouts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "layouts" ALTER COLUMN "boxSize" SET NOT NULL,
ALTER COLUMN "style" SET NOT NULL,
ALTER COLUMN "isStore" SET NOT NULL;
