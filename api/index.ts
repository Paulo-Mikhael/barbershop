import { Temporal } from "@js-temporal/polyfill";

(globalThis as any).Temporal = Temporal;

import { Hono } from "hono";

import middlewares from "./middlewares";
import errors from "./errors";

import clients from "./routes/clients";

import { App } from "./types/App";

// Type "App" has the Bidings and Variables
const app: App = new Hono();

// Errors handler
errors(app);

const middleware = middlewares();

// Default route
app.get("/", (c) => {
  return c.redirect("https://barbershop-xi-rust.vercel.app");
});

// clients routes and middlewares
middleware.db(app, "/api");
app.route("/api/clients", clients);

export default app;
