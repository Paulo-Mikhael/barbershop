import type { Variables } from "./Variables";
import type { Bindings } from "./Bindings";
import type { BlankSchema } from "hono/types";
import type { OpenAPIHono } from "@hono/zod-openapi";
import type { Hono } from "hono";

export type OpenAPIApp = OpenAPIHono<
  {
    Bindings: Bindings;
    Variables: Variables;
  },
  BlankSchema,
  "/"
>;

export type App = Hono<
  {
    Bindings: Bindings;
    Variables: Variables;
  },
  BlankSchema,
  "/"
>;
