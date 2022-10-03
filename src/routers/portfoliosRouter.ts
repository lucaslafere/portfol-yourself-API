import { Router } from "express";
import * as portfoliosController from "../controllers/portfoliosController";
import { validateToken } from "../middlewares/validateTokenMiddleware";

const portfoliosRouter = Router();

portfoliosRouter.post(
  "/portfolios",
  validateToken,
  portfoliosController.createPortfolio
);
portfoliosRouter.get("/portfolios", portfoliosController.getAllPortfolios);
portfoliosRouter.get(
  "/portfolios/:portfolioId",
  portfoliosController.getPortfolioById
);
portfoliosRouter.get(
  "/dashboard",
  validateToken,
  portfoliosController.getLoggedUserPortfolio
);
portfoliosRouter.delete(
  "/portfolios/:portfolioId",
  validateToken,
  portfoliosController.deleteById
);

export default portfoliosRouter;
