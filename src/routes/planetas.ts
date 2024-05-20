import express from "express";
import { PlanetasController } from "../controllers/planetasController";

const planetasRouter = express.Router();

planetasRouter.get("/planetas", PlanetasController.getAllPlanetas);

export { planetasRouter };
