import { Request, Response } from "express";
import GestaoTarefaService from "../services/gestaoTarefasServices";
import { gestaoDeTarefa } from "../models/gestaoTarefa";

// Criar uma nova tarefa (POST)
export const createTarefa = async (req: Request, res: Response) => {
    try {
        const { titulo, descricao, concluida } = req.body;
        const novaTarefa: gestaoDeTarefa = { id: "", titulo, descricao, concluida };
        const tarefaCriada = await GestaoTarefaService.saveTarefa(novaTarefa);
        res.status(201).json(tarefaCriada);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar tarefa." });
    }
};

// Listar todas as tarefas (GET)
export const getAllTarefa = async (req: Request, res: Response) => {
    try {
        const tarefas = await GestaoTarefaService.getAllTarefas();
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar tarefas." });
    }
};

// Atualizar uma tarefa por ID (PUT)
export const updateTarefa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { titulo, descricao, concluida } = req.body;
        const tarefaAtualizada = await GestaoTarefaService.updateTarefa(id, { id, titulo, descricao, concluida });
        if (tarefaAtualizada) {
            res.status(200).json(tarefaAtualizada);
        } else {
            res.status(404).json({ message: "Tarefa não encontrada." });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar tarefa." });
    }
};

// Atualização parcial de uma tarefa por ID (PATCH)
export const patchTarefa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const dadosParciais = req.body;
        const tarefaAtualizada = await GestaoTarefaService.patchTarefa(id, dadosParciais);
        if (tarefaAtualizada) {
            res.status(200).json(tarefaAtualizada);
        } else {
            res.status(404).json({ message: "Tarefa não encontrada." });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar tarefa." });
    }
};

// Deletar uma tarefa por ID (DELETE)
export const deleteTarefa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const sucesso = await GestaoTarefaService.deleteTarefa(id);
        if (sucesso) {
            res.status(200).json({ message: "Tarefa deletada com sucesso." });
        } else {
            res.status(404).json({ message: "Tarefa não encontrada." });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar tarefa." });
    }
};
