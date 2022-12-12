import { faker } from "@faker-js/faker";
import { PortfolioData } from "../../src/types/portfolioType";
import { prisma } from '../../src/database'
import _userFactory from './userFactory'

export default async function _portfolioFactory({
    persist = false,
}) {
    const portfolio = {
        title: faker.lorem.words(1),
        userId: 1,
        logo: faker.internet.url() + ".jpg"
    };
    if (persist) {
        await prisma.portfolios.create({
            data: portfolio
        })
        delete portfolio.userId
        return portfolio
    }
    delete portfolio.userId
    return portfolio
}