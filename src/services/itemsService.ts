import * as itemsRepository from '../repositories/itemsRepository';
import * as portfoliosRepository from "../repositories/portfoliosRepository";


export async function insert (portfolioId: number, title: string, imageUrl: string, description: string, price?: number){
    const result = await itemsRepository.insert(portfolioId, title, imageUrl, description, price);
    return result;
}
export async function findAllItemsFromPortfolio (portfolioId:number){
    const result = await itemsRepository.findAll(portfolioId);
    return result
}

export async function deleteItem (portfolioId: number, userId: number, itemId: number){
    const findByPortfolioId = await portfoliosRepository.findByPortfolioId(
        portfolioId
      );
      if (!findByPortfolioId)
        throw {
          type: "not-found",
          message: "no portfolio found with this portfolioId",
        };
      if (findByPortfolioId.userId !== userId)
        throw { type: "unauthorized", message: "you can't complete this request" };
        const findItemById = await itemsRepository.findById(itemId);
        if (!findItemById)
        throw {
          type: "not-found",
          message: "no item found with this itemId",
        };
    const result = await itemsRepository.deleteItem(itemId);
    return result
}