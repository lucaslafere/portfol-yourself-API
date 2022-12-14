import { Router } from "express";
import * as layoutsController from '../controllers/layoutsController';
import { validateToken } from '../middlewares/validateTokenMiddleware';

const layoutsRouter = Router();

layoutsRouter.put('/portfolios/:portfolioId', validateToken, layoutsController.changeLayout);


export default layoutsRouter