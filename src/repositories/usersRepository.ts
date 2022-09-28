import { prisma } from '../database';
import { UserData } from '../types/userType';

export async function findByEmail(email: string) {
    const result = await prisma.users.findUnique({where:
    {email}})
    return result
}

export async function insert (userData: UserData) {
    const result = await prisma.users.create({data: userData})
    return result
}