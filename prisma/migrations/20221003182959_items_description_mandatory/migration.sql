/*
  Warnings:

  - Made the column `description` on table `items` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "items" ALTER COLUMN "description" SET NOT NULL;
