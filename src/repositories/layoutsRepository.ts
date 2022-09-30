import { prisma } from "../database";

export async function edit(
    portfolioId: number,
  boxSize?,
  style?,
  isStore?: boolean
) {
  const result = await prisma.layouts.update({
    where: { portfolioId },
    data: { boxSize, style, isStore },
  });
  return result;
}
export async function insert(
  portfolioId: number,
  boxSize?,
  style?,
  isStore?: boolean
) {
  const result = await prisma.layouts.create({
    data: { portfolioId, boxSize, style, isStore },
  });
  return result;
}

export async function findByPortfolioId (portfolioId: number) {
  const result = await prisma.layouts.findUnique({where: {portfolioId}})
  return result;
}
