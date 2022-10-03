import { Router } from "express";
import usersRouter from './usersRoutes';
import portfoliosRouter from './portfoliosRouter';
import layoutsRouter from './layoutsRouter';
import itemsRouter from './itemsRouter'

const router = Router();
router.use(usersRouter);
router.use(portfoliosRouter);
router.use(layoutsRouter);
router.use(itemsRouter);

export default router;