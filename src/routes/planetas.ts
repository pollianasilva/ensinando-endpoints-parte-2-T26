import { Router } from "express";
import { PlanetasController } from "../controllers/planetasController";

export const planetasRouter = Router();

planetasRouter.get("/planetas", PlanetasController.getAllPlanetas);
