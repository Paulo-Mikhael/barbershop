import { Hono } from "hono";
import { Variables } from "./Variables";
import { Bindings } from "./Bindings";
import { BlankSchema } from "hono/types";

export type App = Hono<
	{
		Bindings: Bindings;
		Variables: Variables;
	},
	BlankSchema,
	"/"
>;
