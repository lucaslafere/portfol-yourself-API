import * as layoutsRepository from "../repositories/layoutsRepository";
import { LayoutsData } from "../types/layoutsType";
import * as portfoliosRepository from "../repositories/portfoliosRepository";

export async function edit(layout: LayoutsData, userId: number) {
  const findByPortfolioId = await portfoliosRepository.findByPortfolioId(
    layout.portfolioId
  );
  if (!findByPortfolioId)
    throw { type: "not-found", message: "this portfolio doesnt exist" };
  if (findByPortfolioId.userId !== userId)
    throw { type: "unauthorized", message: "you can't complete this request" };
  const result = await layoutsRepository.edit(
    layout.portfolioId,
    layout.boxSize,
    layout.style,
    layout.isStore
  );
  return result;
}
export async function insert(layout: LayoutsData, userId: number) {
  const result = await layoutsRepository.insert(
    layout.portfolioId,
    layout.boxSize,
    layout.style,
    layout.isStore
  );
  return result;
}
