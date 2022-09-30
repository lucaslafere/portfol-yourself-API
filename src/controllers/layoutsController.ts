import { Request, Response } from "express";
import * as layoutsService from "../services/layoutsService";

export async function changeLayout (req: Request, res: Response) {

    return res.sendStatus(200);
}