import * as itemsRepository from '../repositories/itemsRepository';

export async function insert (portfolioId: number, title: string, imageUrl: string, description?: string, price?: number){
    const result = await itemsRepository.insert(portfolioId, title, imageUrl, description, price);
    return result;
}