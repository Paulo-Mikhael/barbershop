import { api_db } from "@/database/prisma/api_db";

interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "GET") {
      return new Response("Method Not Allowed", {
        status: 405,
      });
    }

    const db = await api_db(env.DATABASE_URL);
    db.connect();
    const users = await db.orm.public.Client.where({}).all();

    return Response.json({
      message: "API funcionando!",
      connection_string: env.DATABASE_URL,
      prisma_test: users,
    });
  },
};
