// src/routes/alunos.ts
import { Router } from "express";
import * as alunosController from "../controllers/alunosController";

const alunosRouter = Router();

// Rota para listar todos os alunos (GET)
alunosRouter.get("/", alunosController.getAllAlunos);

// Rota para adicionar um novo aluno (POST)
alunosRouter.post("/", alunosController.createAluno);

// Rota para atualizar um aluno (PUT)
alunosRouter.put("/:id", alunosController.updateAluno);

// Rota para atualização parcial de um aluno (PATCH)
alunosRouter.patch("/:id", alunosController.patchAluno);

// Rota para deletar um aluno (DELETE)
alunosRouter.delete("/:id", alunosController.deleteAluno);

export default alunosRouter;
