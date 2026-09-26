import { z } from "@hono/zod-openapi";
import { ClientSchema } from "../schemas/client";

const a = Temporal.Instant.from("");

export type ClientSchemaType = Omit<
  z.infer<typeof ClientSchema>,
  "created_at"
> & {
  created_at: typeof a;
};
