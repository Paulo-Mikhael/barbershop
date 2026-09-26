import { OpenAPIApp } from "../../types/App";
import { HttpErrorResponse } from "../../errors/HttpErrorResponse";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import { ClientService } from "@/api/services/ClientService";
import { ClientDocs } from "@/api/services/ClientService/docs";

const clients: OpenAPIApp = new OpenAPIHono();
const service = new ClientService();
const docs = new ClientDocs();

clients.openapi(docs.get, async (c) => {
  const db = c.get("db");
  const clients = await service.get(db);

  if (clients.length <= 0)
    throw new HttpErrorResponse("Nenhum cliente encontrado", 404);

  return c.json({
    clients,
  });
});

clients.openapi(docs.get_by_id, async (c) => {
  const db = c.get("db");
  const param = c.req.param("id");

  if (!param)
    throw new HttpErrorResponse("Informe um id na url da requisição", 400);

  const { id } = service.id_parameter.parse(param);
  const client = await service.get_by_id(db, id);

  if (client == null)
    throw new HttpErrorResponse("Nenhum cliente encontrado", 404);

  return c.json({
    client,
  });
});

clients.openapi(docs.post, async (c) => {
  const db = c.get("db");
  const body = await c.req.json();

  const client = service.schema.omit({ id: true }).parse(body);

  const { id } = await service.post(db, {
    ...client,
    created_at: Temporal.Instant.from(client.created_at),
  });

  const url = new URL(c.req.url);

  return c.json({
    url: `${url.origin}/api/clients/${id}`,
  });
});

clients.openapi(docs.delete, async (c) => {
  const db = c.get("db");
  const param = c.req.param("id");

  if (!param)
    throw new HttpErrorResponse("Informe um id na url da requisição", 400);

  const { id } = service.id_parameter.parse(param);
  const client = await service.get_by_id(db, id);

  if (client == null)
    throw new HttpErrorResponse("Nenhum cliente encontrado", 404);

  await service.delete(db, client.id);

  return c.json({ message: "Success; no content" });
});

clients.openapi(docs.put, async (c) => {
  const db = c.get("db");
  const requestParam = c.req.param("id");

  if (!requestParam)
    throw new HttpErrorResponse("Informe um id na url da requisição", 400);

  const param = service.id_parameter.parse(requestParam);
  const requestedClient = await service.get_by_id(db, param.id);

  if (requestedClient == null)
    throw new HttpErrorResponse("Nenhum cliente encontrado", 404);

  const body = await c.req.json();

  const client = service.schema.omit({ id: true }).parse(body);

  const { id } = await service.put(db, {
    id: requestedClient.id,
    ...client,
    created_at: Temporal.Instant.from(client.created_at),
  });

  const url = new URL(c.req.url);

  return c.json({
    url: `${url.origin}/api/clients/${id}`,
  });
});

// clients.openapi(docs.patch, async (c) => {
//   const db = c.get("db");
//   const requestParam = c.req.param("id");

//   if (!requestParam)
//     throw new HttpErrorResponse("Informe um id na url da requisição", 400);

//   const param = service.id_parameter.parse(requestParam);
//   const requestedClient = await service.get_by_id(db, param.id);

//   if (requestedClient == null)
//     throw new HttpErrorResponse("Nenhum cliente encontrado", 404);

//   const body = await c.req.json();

//   const client = service.schema.omit({ id: true }).partial().parse(body);

//   const { id } = await service.patch(db, {
//     id: requestedClient.id,
//     ...client,
//     created_at: client.created_at
//       ? Temporal.Instant.from(client.created_at)
//       : undefined,
//   });

//   const url = new URL(c.req.url);

//   return c.json({
//     url: `${url.origin}/api/clients/${id}`,
//   });
// });

export default clients;
