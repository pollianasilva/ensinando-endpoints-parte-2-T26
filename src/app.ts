import express, { Request, Response, json } from "express";
import { router as index } from "./routes";

export const app = express();

app.use(json());
app.use("/", index);

app.get("/", async (req: Request, res: Response) => {});
