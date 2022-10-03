import { Request, Response } from "express";
import * as layoutsService from "../services/layoutsService";
import { layoutSchema } from "../schemas/layoutsSchema";

export async function changeLayout(req: Request, res: Response) {
  const { portfolioId } = req.params;
  const { boxSize, style, isStore } = req.body;
  const { userId } = res.locals;
  const { error } = layoutSchema.validate(req.body);
  if (error) throw { type: "wrong-body-format", message: error.message };
  await layoutsService.edit(
    { portfolioId: +portfolioId, boxSize, style, isStore },
    +userId
  );
  return res.status(200).send("edited");
}
