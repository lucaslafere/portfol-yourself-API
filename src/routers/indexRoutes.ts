import { Router } from "express";
import usersRouter from './usersRoutes';

const router = Router();
router.use(usersRouter);


export default router;