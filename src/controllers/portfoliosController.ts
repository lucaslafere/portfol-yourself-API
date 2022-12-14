import { Request, Response } from "express";
import * as portfoliosService from "../services/portfoliosService";
import { PortfolioData } from "../types/portfolioType";
import { portfolioSchema } from "../schemas/portfoliosSchema";
import * as layoutsService from '../services/layoutsService'
import * as itemsService from '../services/itemsService'


export async function createPortfolio(req: Request, res: Response) {
  const portfolio: Omit<PortfolioData, "userId"> = req.body;
  const { error } = portfolioSchema.validate(portfolio);
  if (error) throw { type: "wrong-body-format", message: error.message };
  const { userId } = res.locals;
  await portfoliosService.insert(portfolio, +userId);
  return res.status(201).send("Created");
}
export async function getAllPortfolios(req: Request, res: Response) {
  const result = await portfoliosService.findAll();
  return res.status(200).send(result);
}
export async function getPortfolioById(req: Request, res: Response) {
  const { portfolioId } = req.params;
  const portfolioDetails = await portfoliosService.findByPortfolioId(
    +portfolioId
  );
  const layoutDetails = await layoutsService.findByPortfolioId(+portfolioId)
  const itemDetails = await itemsService.findAllItemsFromPortfolio(+portfolioId)
  return res.status(200).json({portfolio: portfolioDetails, layout: layoutDetails, items: itemDetails});
}
export async function deleteById(req: Request, res: Response) {
  const { portfolioId } = req.params;
  const { userId } = res.locals;
  await portfoliosService.deleteById(+userId, +portfolioId);
  return res.status(200).send("deleted");
}
export async function getLoggedUserPortfolio(req: Request, res: Response) {
  const { userId } = res.locals;
  const portfolioDetails = await portfoliosService.findByUserId(+userId);
  const layoutDetails = await layoutsService.findByPortfolioId(+portfolioDetails.id)
  const itemDetails = await itemsService.findAllItemsFromPortfolio(+portfolioDetails.id)

  return res.status(200).json({portfolio: portfolioDetails, layout: layoutDetails, items: itemDetails});
}
