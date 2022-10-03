import { prisma } from "../database";

export async function insert (
    portfolioId: number,
    title: string,
    imageUrl: string,
    description?: string,
    price?: number
) {
    const result = await prisma.items.create({
        data: {portfolioId, title, imageUrl, description, price},
        
    });
    return result;
}
export async function findAll (portfolioId: number){
    const result = await prisma.items.findMany({
        where: {portfolioId}
    })
    return result;
}
export async function deleteItem (id: number){
    const result = await prisma.items.delete({where: {id}});
    return result
}