import { Router } from 'express';
import * as portfoliosController from '../controllers/portfoliosController';
import * as validateTokenMiddleware from '../middlewares/validateTokenMiddleware'

const portfoliosRouter = Router();

portfoliosRouter.get('/portfolio/:portfolioId', validateTokenMiddleware.allowNoToken, portfoliosController.getPortfolioById);

export default portfoliosRouter;