import { prisma } from "../database";

export async function edit (portfolioId: number) {

}
export async function insert (portfolioId: number, boxSize?, style?, isStore?: boolean){
    const result = await prisma.layouts.create({data: {portfolioId, boxSize, style, isStore}})
}