import { Router } from "express";
import usersRouter from './usersRoutes';
import portfoliosRouter from './portfoliosRouter';

const router = Router();
router.use(usersRouter);
router.use(portfoliosRouter);


export default router;