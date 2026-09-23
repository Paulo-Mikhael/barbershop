export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== "GET") {
      return new Response("Method Not Allowed", {
        status: 405,
      });
    }

    return Response.json({
      message: "API funcionando!",
      environment: process.env.DATABASE_URL,
    });
  },
};
