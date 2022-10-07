import { prisma } from "../database";
import { PortfolioData } from "../types/portfolioType";

export async function findAll() {
  const result = await prisma.portfolios.findMany();
  return result;
}
export async function findByUserId(userId: number) {
  const result = await prisma.portfolios.findUnique({ where: { userId } });
  return result;
}
export async function findByPortfolioId(id: number) {
  const result = await prisma.portfolios.findUnique({ where: { id } });
  return result;
}
export async function insert(portfolio: PortfolioData) {
  const result = await prisma.portfolios.create({ data: portfolio });
  return result;
}
export async function deleteById(id: number) {
  const deleteChildLayout = await prisma.layouts.delete({where: {id}})
  const deleteChildItems = await prisma.items.deleteMany({where: {id}})
  const result = await prisma.portfolios.delete({ where: { id } });
  return result;
}
