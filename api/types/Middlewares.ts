import { App } from "./App";

export type MiddlewareReturn = (app: App, route: string) => App;

export type Middlewares = {
	db: MiddlewareReturn;
};
