import { Request, Response } from "express";
import * as itemsService from "../services/itemsService";
import { ItemsData } from "../types/itemsType";
import { itemSchema } from "../schemas/itemsSchema";
import * as portfoliosService from "../services/portfoliosService";
import * as layoutsService from "../services/layoutsService";

export async function createItem(req: Request, res: Response) {
  const item = req.body;
  const { userId } = res.locals;
  const { title, imageUrl, description, price } = req.body;
  const { error } = itemSchema.validate(item);
  if (error) throw { type: "wrong-body-format", message: error.message };
  const portfolioDetails = await portfoliosService.findByUserId(+userId);
  const layoutDetails = await layoutsService.findByPortfolioId(
    +portfolioDetails.id
  );
  if (layoutDetails.isStore === true) {
    if (!price)
      throw {
        type: "wrong-body-format",
        message: "your website is a store so you must provide a price",
      };
    const result = await itemsService.insert(
      +portfolioDetails.id,
      title,
      imageUrl,
      description,
      +price
    );
    return res.status(200).send("Created");
  }

  const result = await itemsService.insert(
    +portfolioDetails.id,
    title,
    imageUrl,
    description
  );

  return res.status(200).send("Created");
}
