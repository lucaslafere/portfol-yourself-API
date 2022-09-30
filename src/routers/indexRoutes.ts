import { Router } from "express";
import usersRouter from './usersRoutes';
import portfoliosRouter from './portfoliosRouter';
import layoutsRouter from './layoutsRouter';

const router = Router();
router.use(usersRouter);
router.use(portfoliosRouter);
router.use(layoutsRouter);


export default router;