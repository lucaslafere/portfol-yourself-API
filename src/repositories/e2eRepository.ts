import { prisma } from "../database";
export async function truncate() {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
  await prisma.$executeRaw`TRUNCATE TABLE portfolios`;
  await prisma.$executeRaw`TRUNCATE TABLE items`;
  await prisma.$executeRaw`TRUNCATE TABLE layouts`;
}
