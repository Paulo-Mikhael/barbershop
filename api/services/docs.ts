import { ZodObject } from "zod";
import { Tags } from "../types/Tags";
import { RouteConfig } from "@hono/zod-openapi";

export abstract class DocsService {
  abstract tag: Tags;

  abstract get: RouteConfig;
  abstract get_by_id: RouteConfig;
  abstract post: RouteConfig;
  abstract delete: RouteConfig;
  abstract put: RouteConfig;
  // abstract patch: RouteConfig;
}
