import { gestaoDeTarefa } from "../models/gestaoTarefa";

let tarefas: gestaoDeTarefa[] = []; // Array para armazenar tarefas em memória (substitua por um banco de dados)

const GestaoTarefaService = {
    saveTarefa: async (tarefa: gestaoDeTarefa) => {
        tarefa.id = Date.now().toString(); // Gera um ID único
        tarefas.push(tarefa);
        return tarefa;
    },
    getAllTarefas: async () => {
        return tarefas;
    },
    updateTarefa: async (id: string, updatedTarefa: gestaoDeTarefa) => {
        const index = tarefas.findIndex(t => t.id === id);
        if (index === -1) return null; // Tarefa não encontrada
        tarefas[index] = updatedTarefa;
        return updatedTarefa;
    },
    patchTarefa: async (id: string, dadosParciais: Partial<gestaoDeTarefa>) => {
        const index = tarefas.findIndex(t => t.id === id);
        if (index === -1) return null; // Tarefa não encontrada
        tarefas[index] = { ...tarefas[index], ...dadosParciais }; // Atualiza os dados
        return tarefas[index];
    },
    deleteTarefa: async (id: string) => {
        const index = tarefas.findIndex(t => t.id === id);
        if (index === -1) return false; // Tarefa não encontrada
        tarefas.splice(index, 1); // Remove a tarefa
        return true;
    },
};

export default GestaoTarefaService;
