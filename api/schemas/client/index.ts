import { z } from "@hono/zod-openapi";

export const ClientSchema = z.object({
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
