import * as portfoliosRepository from "../repositories/portfoliosRepository";
import { PortfolioData } from "../types/portfolioType";

export async function insert(
  portfolio: Omit<PortfolioData, "userId">,
  userId: number
) {
  const findUserData = await portfoliosRepository.findByUserId(userId);
  if (findUserData)
    throw { type: "conflict", message: "this user already owns a portfolio" };
  const result = await portfoliosRepository.insert({ ...portfolio, userId });
  return result;
}
export async function findAll() {
  const result = await portfoliosRepository.findAll();
  return result;
}
export async function findByUserId(userId: number) {
  const result = await portfoliosRepository.findByUserId(userId);
  return result;
}
export async function findByPortfolioId(id: number) {
  const result = await portfoliosRepository.findByPortfolioId(id);
  return result;
}
export async function deleteById(id: number) {
  const result = await portfoliosRepository.deleteById(id);
  return result;
}
