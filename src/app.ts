import cors from 'cors';
import express, { json } from 'express';
import dotenv from 'dotenv';
import "express-async-errors";
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import e2eRouter from './routers/e2eRouter'
import router from './routers/indexRoutes'

dotenv.config();
const app = express();
app.use(cors());
app.use(json());
app.use(router);

if(process.env.NODE_ENV === 'test'){
    app.use(e2eRouter)
}
app.use(errorHandlerMiddleware);
export default app;