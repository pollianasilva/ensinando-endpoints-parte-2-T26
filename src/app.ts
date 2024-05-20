import express, { json } from "express";
import { router as index } from "./routes";
import { planetasRouter } from "./routes/planetas";

const app = express();

app.use(json());
app.use("/", index);
app.use(planetasRouter);

export default app;
