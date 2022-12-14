import * as portfoliosRepository from "../repositories/portfoliosRepository";
import { PortfolioData } from "../types/portfolioType";
import * as layoutsService from "../services/layoutsService";

export async function insert(
  portfolio: Omit<PortfolioData, "userId">,
  userId: number
) {
  const findUserData = await portfoliosRepository.findByUserId(userId);
  if (findUserData)
    throw { type: "conflict", message: "this user already owns a portfolio" };
  const result = await portfoliosRepository.insert({ ...portfolio, userId });
  const findNewPortfolio = await findByUserId(userId);
  console.log(findNewPortfolio);
  const insertDefaultLayout = await layoutsService.insert(
    { portfolioId: findNewPortfolio.id, boxSize: "medium", style: 'modern', isStore: false },
    userId
  );
  return result;
}
export async function findAll() {
  const result = await portfoliosRepository.findAll();
  if (!result) throw {type: 'not-found', message: 'no portfolios created yet'}
  return result;
}
export async function findByUserId(userId: number) {
  const result = await portfoliosRepository.findByUserId(userId);
  if (!result) throw {type: 'not-found', message: 'No portfolio found with this userId'}
  return result;
}
export async function findByPortfolioId(id: number) {
  const portfolioDetails = await portfoliosRepository.findByPortfolioId(id);
  return portfolioDetails;
}
export async function deleteById(userId: number, portfolioId: number) {
  const findByPortfolioId = await portfoliosRepository.findByPortfolioId(
    portfolioId
  );
  if (!findByPortfolioId)
    throw {
      type: "not-found",
      message: "no portfolio found with this portfolioId",
    };
  if (findByPortfolioId.userId !== userId)
    throw { type: "unauthorized", message: "you can't complete this request" };
  const result = await portfoliosRepository.deleteById(portfolioId);
  return result;
}

