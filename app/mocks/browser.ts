import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { db } from "./db";

export const worker = setupWorker(...handlers, ...db.user.toHandlers("rest"));
