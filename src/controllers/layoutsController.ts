import { Request, Response } from "express";
import * as layoutsService from "../services/layoutsService";

export async function changeLayout (req: Request, res: Response) {
    const { portfolioId } = req.params;
    const boxSize = req.body.boxSize;
    const style = req.body.style;
    const isStore = req.body.isStore;
    const {userId} = res.locals;
    await layoutsService.edit({portfolioId: +portfolioId, boxSize, style, isStore}, +userId)
    return res.status(200).send("edited");
}