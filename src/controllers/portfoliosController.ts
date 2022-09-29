import { Request, Response } from "express";

export async function createPortfolio(req: Request, res: Response) {
    return res.status(201).send("Created");
}
export async function getPortfolios(req: Request, res: Response) {
  return res.sendStatus(200);
}
export async function getPortfolioById(req: Request, res: Response) {
  if (res.locals.token) {
    const { userId } = res.locals;
    return res.status(200).send(`Você tem um token e um userId: ${userId}`);
  }
  return res.status(200).send("você não tem um token");
}
