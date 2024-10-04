import { Router } from "express";
import {
    createTarefa,
    getAllTarefa,
    updateTarefa,
    patchTarefa,
    deleteTarefa
} from "../controllers/gestaoTarefaController";

const router = Router();

// Rotas da API de Tarefas
router.post("/", createTarefa);
router.get("/", getAllTarefa);
router.put("/:id", updateTarefa);
router.patch("/:id", patchTarefa);
router.delete("/:id", deleteTarefa);

export default router; // Exporta o roteador






