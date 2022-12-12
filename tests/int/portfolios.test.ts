import supertest from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/database";
import _portfolioFactory from '../factories/portfolioFactory'
import _userFactory from "../factories/userFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "portfolios" RESTART IDENTITY CASCADE`;
  });
  describe('Testa post /portfolios', () => {
    it('Deve retornar 201 ao criar um portfolio corretamente', async () => {
      const user = await _userFactory({persist: true})
      const login = await supertest(app).post('/sign-in').send(user)
      const token = login.body.token;
      const portfolio = await _portfolioFactory({});
      const result = await supertest(app).post('/portfolios').set({Authorization: `Bearer ${token}`}).send(portfolio)
      const createdPortfolio = await prisma.portfolios.findUnique({
        where: {title: portfolio.title}
      });
      expect(result.status).toBe(201);
      expect(createdPortfolio).not.toBeNull();
    })
 
  it('Deve retornar 422 ao criar com body errado', async () => {
    const user = await _userFactory({persist: true})
      const login = await supertest(app).post('/sign-in').send(user)
      const token = login.body.token;
      const portfolio = await _portfolioFactory({});
      delete portfolio.logo
      const result = await supertest(app).post('/portfolios').set({Authorization: `Bearer ${token}`}).send(portfolio)

      expect(result.status).toBe(422);
  })
  it('Deve retornar 401 ao criar um portfolio sem token', async () => {
    const user = await _userFactory({persist: true})
    const login = await supertest(app).post('/sign-in').send(user)
    const token = login.body.token;
    const portfolio = await _portfolioFactory({});
    const result = await supertest(app).post('/portfolios').send(portfolio)

    expect(result.status).toBe(401);
  })
  it('Deve retornar 409 ao criar um portfolio que ja existe', async () => {
    const user = await _userFactory({persist: true})
    const login = await supertest(app).post('/sign-in').send(user)
    const token = login.body.token;
    const portfolio = await _portfolioFactory({persist: true});
    const result = await supertest(app).post('/portfolios').set({Authorization: `Bearer ${token}`}).send(portfolio)
    expect(result.status).toBe(409);
  })
});
  afterAll(async () => {
    await prisma.$disconnect();
  });