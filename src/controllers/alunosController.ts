// src/controllers/alunosController.ts
import { Request, Response } from "express";
import AlunoService from "../services/alunoServices";
import { Aluno } from "../models/alunos";

// Criar um novo aluno (POST)
export const createAluno = async (req: Request, res: Response) => {
  try {
    const { nome, idade } = req.body;
    const novoAluno: Aluno = { id: "", nome, idade };
    const alunoCriado = await AlunoService.saveAluno(novoAluno);
    res.status(201).json(alunoCriado);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar aluno." });
  }
};

// Listar todos os alunos (GET)
export const getAllAlunos = async (req: Request, res: Response) => {
  try {
    const alunos = await AlunoService.getAllAlunos();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar alunos." });
  }
};

// Atualizar um aluno por ID (PUT)
export const updateAluno = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, idade } = req.body;
    const alunoAtualizado = await AlunoService.updateAluno(id, { id, nome, idade });
    if (alunoAtualizado) {
      res.status(200).json(alunoAtualizado);
    } else {
      res.status(404).json({ message: "Aluno não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar aluno." });
  }
};

// Atualização parcial de um aluno por ID (PATCH)
export const patchAluno = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dadosParciais = req.body;
    const alunoAtualizado = await AlunoService.patchAluno(id, dadosParciais);
    if (alunoAtualizado) {
      res.status(200).json(alunoAtualizado);
    } else {
      res.status(404).json({ message: "Aluno não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar aluno." });
  }
};

// Deletar um aluno por ID (DELETE)
export const deleteAluno = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const sucesso = await AlunoService.deleteAluno(id);
    if (sucesso) {
      res.status(200).json({ message: "Aluno deletado com sucesso." });
    } else {
      res.status(404).json({ message: "Aluno não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar aluno." });
  }
};
