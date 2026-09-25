import postgres from "@prisma/orm-postgres/runtime";
import { App } from "../types/App";
import { Contract } from "../../database/prisma/contract";
import contractJson from "../../database/prisma/contract.json" with { type: "json" };
import { MiddlewareReturn } from "../types/Middlewares";

export const db: MiddlewareReturn = (app: App, route: string) => {
  const a = app.use(`${route}/*`, async (c, next) => {
    try {
      const db = postgres<Contract>({
        contractJson,
        url: process.env.DATABASE_URL,
      });

      c.set("db", db);

      await next();
    } catch (error) {
      throw new Error("Erro no middleware db.ts: " + error);
    }
  });

  return a;
};
