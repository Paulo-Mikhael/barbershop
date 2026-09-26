import z from "zod";
import { Tags } from "@/api/types/Tags";
import { DocsService } from "../docs";
import { createRoute, RouteConfig } from "@hono/zod-openapi";
import { ClientService } from ".";

export class ClientDocs extends DocsService {
  public tag: Tags = "Client";
  private service = new ClientService();

  public get: RouteConfig = createRoute({
    method: "get",
    path: "/",
    tags: [this.tag],
    summary: "Lista os clientes",
    responses: {
      200: {
        description: "Lista de clientes",
        content: {
          "application/json": {
            schema: z.object({
              clients: z.array(this.service.schema),
            }),
          },
        },
      },
    },
  });

  public get_by_id: RouteConfig = createRoute({
    method: "get",
    path: "/{id}",
    tags: [this.tag],
    request: {
      params: this.service.id_parameter.schema,
    },
    summary: "Retorna um cliente pelo id",
    responses: {
      200: {
        description: "Retorna o cliente de id especificado",
        content: {
          "application/json": {
            schema: z.object({
              client: this.service.schema,
            }),
          },
        },
      },
    },
  });

  public post: RouteConfig = createRoute({
    method: "post",
    path: "/",
    tags: [this.tag],
    summary: "Cadastra um novo cliente",
    request: {
      body: {
        content: {
          "application/json": {
            schema: this.service.schema.omit({ id: true }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Cliente cadastrado com sucesso",
        content: {
          "application/json": {
            schema: z.object({
              url: z.string(),
            }),
            example: {
              url: "https://api.example.com/api/client/1",
            },
          },
        },
      },
    },
  });

  public delete: RouteConfig = createRoute({
    method: "delete",
    path: "/{id}",
    tags: [this.tag],
    summary: "Deleta um cliente pelo id",
    request: {
      params: this.service.id_parameter.schema,
    },
    responses: {
      200: {
        description: "Cliente deletado com sucesso",
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
            example: {
              message: "Success; no content",
            },
          },
        },
      },
    },
  });

  public put: RouteConfig = createRoute({
    method: "put",
    path: "/{id}",
    tags: [this.tag],
    summary: "Atualiza todos os dados de um cliente pelo id",
    request: {
      params: this.service.id_parameter.schema,
      body: {
        content: {
          "application/json": {
            schema: this.service.schema.omit({ id: true }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Dados atualizados com sucesso",
        content: {
          "application/json": {
            schema: z.object({
              url: z.string(),
            }),
            example: {
              url: "https://api.example.com/api/client/1",
            },
          },
        },
      },
    },
  });

  // public patch: RouteConfig = createRoute({
  //   method: "patch",
  //   path: "/{id}",
  //   tags: [this.tag],
  //   summary: "Atualiza os dados de um cliente pelo id",
  //   request: {
  //     params: this.service.id_parameter.schema,
  //     body: {
  //       content: {
  //         "application/json": {
  //           schema: this.service.schema.omit({ id: true }).partial(),
  //         },
  //       },
  //     },
  //   },
  //   responses: {
  //     200: {
  //       description: "Dados atualizados com sucesso",
  //       content: {
  //         "application/json": {
  //           schema: z.object({
  //             url: z.string(),
  //           }),
  //           example: {
  //             url: "https://api.example.com/api/client/1",
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
}
