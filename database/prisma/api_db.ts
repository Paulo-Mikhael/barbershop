import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "./contract";
import contractJson from "./contract.json" with { type: "json" };
import { Temporal } from "@js-temporal/polyfill";

(globalThis as any).Temporal = Temporal;

export const api_db = (connection_string: string) => {
  return postgres<Contract>({
    contractJson,
    url: connection_string,
  });
};
