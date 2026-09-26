import { Contract } from "@/database/prisma/contract";
import { PostgresClient } from "@prisma/orm-postgres/runtime";
import z, { ZodObject } from "zod";

export abstract class Service {
  abstract schema: ZodObject;

  abstract get(db: PostgresClient<Contract>): Promise<any[]>;
  abstract get_by_id(
    db: PostgresClient<Contract>,
    id: number,
  ): Promise<any | null>;
  abstract post(
    db: PostgresClient<Contract>,
    schema: object,
  ): Promise<{ id: number }>;
  abstract delete(db: PostgresClient<Contract>, id: number): Promise<void>;
  abstract put(
    db: PostgresClient<Contract>,
    schema: object,
  ): Promise<{ id: number }>;
  // abstract patch(
  //   db: PostgresClient<Contract>,
  //   schema: object,
  // ): Promise<{ id: number }>;

  public id_parameter = {
    schema: z.object({
      id: z.string(),
    }),
    parse: (id: string) => {
      return {
        id: z.number({ error: "Parâmetro 'id' inválido" }).parse(Number(id)),
      };
    },
  };
}
