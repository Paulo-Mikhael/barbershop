import { OpenAPIApp } from "../../types/App";
import { HttpErrorResponse } from "../../errors/HttpErrorResponse";
import { OpenAPIHono } from "@hono/zod-openapi";
import { createRoute, z } from "@hono/zod-openapi";

const clientSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  cpf: z.string(),
  address: z.object({
    cep: z.string(),
    uf: z.string(),
    city: z.string(),
    neighbourhood: z.string(),
    house_number: z.string().nullable(),
  }),
  created_at: z.string(),
});

const getClients = createRoute({
  method: "get",
  path: "/",
  tags: ["Clients"],
  summary: "Lista os clientes",
  responses: {
    200: {
      description: "Lista de clientes",
      content: {
        "application/json": {
          schema: z.object({
            clients: z.array(clientSchema),
          }),
        },
      },
    },
  },
});

const clients: OpenAPIApp = new OpenAPIHono();

clients.openapi(getClients, async (c) => {
  const db = c.get("db");
  const clients = await db.orm.public.Client.where({}).all();

  if (clients.length <= 0)
    throw new HttpErrorResponse("Nenhum cliente encontrado", 404);

  return c.json({
    clients,
  });
});

export default clients;
