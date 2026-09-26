import { Service } from "..";
import { ClientSchema } from "@/api/schemas/client";
import type { Contract } from "@/database/prisma/contract";
import type { PostgresClient } from "@prisma/orm-postgres/runtime";
import type { ClientSchemaType } from "@/api/types/ClientSchema";

export class ClientService extends Service {
  public schema = ClientSchema;

  public async get(db: PostgresClient<Contract>) {
    const clients = await db.orm.public.Client.where({}).all();

    return clients;
  }

  public async get_by_id(db: PostgresClient<Contract>, id: number) {
    const clients = await db.orm.public.Client.where({ id }).first();

    return clients;
  }

  public async post(
    db: PostgresClient<Contract>,
    schema: Omit<ClientSchemaType, "id">,
  ) {
    const client = await db.orm.public.Client.create(schema);

    return { id: client.id };
  }

  public async delete(db: PostgresClient<Contract>, id: number) {
    await db.orm.public.Client.where({ id }).delete();

    return;
  }

  public async put(db: PostgresClient<Contract>, schema: ClientSchemaType) {
    const client = await db.orm.public.Client.where({ id: schema.id }).update(
      schema,
    );

    return { id: client!.id };
  }

  // public async patch(
  //   db: PostgresClient<Contract>,
  //   schema: Partial<ClientSchemaType>,
  // ) {
  //   const client = await db.orm.public.Client.where({ id: schema.id }).update(
  //     schema,
  //   );

  //   return { id: client!.id };
  // }
}
