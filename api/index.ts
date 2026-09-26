import middlewares from "./middlewares";
import errors from "./errors";
import { Temporal } from "@js-temporal/polyfill";

(globalThis as any).Temporal = Temporal;

import clients from "./routes/clients";

import { OpenAPIApp } from "./types/App";
import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";

// Type "OpenAPIApp" has the Bidings and Variables
const app: OpenAPIApp = new OpenAPIHono();

// Errors handler
errors(app);

const middleware = middlewares();

app.doc("api/openapi.json", {
  openapi: "3.0.0",
  info: {
    title: "Barbershop API",
    version: "1.0.0",
    description: "API do sistema Barbershop",
  },
});

app.get(
  "/api/docs",
  swaggerUI({
    url: "/api/openapi.json",
  }),
);

// clients routes and middlewares
middleware.db(app, "/api");
app.route("/api/clients", clients);

export default app;
