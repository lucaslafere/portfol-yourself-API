import cors from 'cors';
import express, { json } from 'express';
import dotenv from 'dotenv';
import "express-async-errors";
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

dotenv.config();
const app = express();
app.use(cors());
app.use(json());


if(process.env.NODE_ENV === 'test'){

}
app.use(errorHandlerMiddleware);
export default app;