import { Router } from 'express';
import * as usersController from '../controllers/usersController';

const usersRouter = Router();

usersRouter.post('/sign-up', usersController.createUser);
usersRouter.post('/sign-in', usersController.login);

export default usersRouter;
