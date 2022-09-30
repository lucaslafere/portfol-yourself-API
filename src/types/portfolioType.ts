import { portfolios } from "@prisma/client";

export type PortfolioData = Omit<portfolios, 'id'>