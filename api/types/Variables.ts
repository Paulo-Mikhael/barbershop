import { PostgresClient } from "@prisma/orm-postgres/runtime";
import type { Contract } from "../../database/prisma/contract";

export type Variables = {
  db: PostgresClient<Contract>;
};
