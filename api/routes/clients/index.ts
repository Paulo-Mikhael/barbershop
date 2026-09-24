import { Hono } from "hono";
import { App } from "../../types/App";
import { HttpErrorResponse } from "../../errors/HttpErrorResponse";

const clients: App = new Hono();

clients.get("/", async (c) => {
	const db = c.get("db");
	const clients = await db.orm.public.Client.where({}).all();

	if (clients.length <= 0)
		throw new HttpErrorResponse("Nenhum cliente encontrado", 404);

	return c.json({
		clients,
	});
});

export default clients;
