import { App } from "../types/App";
import { HttpErrorResponse } from "./HttpErrorResponse";

export default function errors(app: App) {
  app.onError((error, c) => {
    if (error instanceof HttpErrorResponse) {
      return c.json({
        response: `${error.statusCode} ${error.message}`,
      });
    }

    console.error(error);

    return c.json(
      {
        error: "Erro interno do servidor",
      },
      500,
    );
  });
}
