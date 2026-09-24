import { Middlewares } from "../types/Middlewares";
import { db } from "./db";

export default function middlewares(): Middlewares {
	return { db };
}
