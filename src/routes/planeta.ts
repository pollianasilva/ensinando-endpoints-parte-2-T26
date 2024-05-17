import express from "express";
import { PlanetasController } from "../controllers/planetasController";

const router = express.Router();

router.get("/planetas", PlanetasController.getAllPlanetas);
