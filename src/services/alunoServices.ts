// src/services/alunoService.ts
import { Aluno } from "../models/alunos"; // Certifique-se de ter o modelo "Aluno" no caminho correto

class AlunoService {
    private static alunos: Aluno[] = []; // Simulação de um banco de dados para os alunos

    // Obtém todos os alunos
    static async getAllAlunos() {
        return this.alunos;
    }

    // Adiciona um novo aluno
    static async saveAluno(novoAluno: Aluno) {
        // Geração de ID simples, considere usar UUID ou outro método
        novoAluno.id = (this.alunos.length + 1).toString();
        this.alunos.push(novoAluno);
        return novoAluno;
    }

    // Atualiza um aluno existente
    static async updateAluno(id: string, dadosAtualizados: Aluno) {
        const index = this.alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            this.alunos[index] = { ...this.alunos[index], ...dadosAtualizados };
            return this.alunos[index];
        }
        return null; // Aluno não encontrado
    }

    // Atualiza parcialmente um aluno (usando Partial)
    static async patchAluno(id: string, dadosParciais: Partial<Aluno>) {
        const index = this.alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            this.alunos[index] = { ...this.alunos[index], ...dadosParciais };
            return this.alunos[index];
        }
        return null; // Aluno não encontrado
    }

    // Deleta um aluno
    static async deleteAluno(id: string) {
        const index = this.alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            this.alunos.splice(index, 1);
            return true; // Deletado com sucesso
        }
        return false; // Aluno não encontrado
    }
}

export default AlunoService;
