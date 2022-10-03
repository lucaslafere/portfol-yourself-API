import { Router } from 'express';
import * as itemsController from '../controllers/itemsController';
import { validateToken } from '../middlewares/validateTokenMiddleware';

const itemsRouter = Router();

itemsRouter.post('/items', validateToken, itemsController.createItem)
itemsRouter.get('/items', validateToken, itemsController.getAllItemsFromPortfolio)
itemsRouter.delete('/items/:itemId', validateToken, itemsController.deleteItem)



export default itemsRouter;