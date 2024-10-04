/*import { Planeta } from "../models/planetas";

class PlanetaServices {
    static planetas: Planeta[] = []; // Simulação de um banco de dados

    static async getAllPlanets() {
        return this.planetas;
    }

    static async savePlaneta(novoPlaneta: Planeta) {
        novoPlaneta.id = (this.planetas.length + 1).toString(); // Gerar ID simples
        this.planetas.push(novoPlaneta);
        return novoPlaneta;
    }

    static async updatePlaneta(id: string, dadosAtualizados: Planeta) {
        const index = this.planetas.findIndex(p => p.id === id);
        if (index !== -1) {
            this.planetas[index] = { ...this.planetas[index], ...dadosAtualizados };
            return this.planetas[index];
        }
        return null;
    }

    static async deletePlaneta(id: string) {
        const index = this.planetas.findIndex(p => p.id === id);
        if (index !== -1) {
            this.planetas.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default PlanetaServices;


*/


// src/services/planetaServices.ts
import { Planeta } from "../models/planetas";

class PlanetaServices {
    private static planetas: Planeta[] = []; // Simulação de um banco de dados

    // Obtém todos os planetas
    static async getAllPlanets() {
        return this.planetas;
    }

    // Adiciona um novo planeta
    static async savePlaneta(novoPlaneta: Planeta) {
        // Geração de ID simples, considere usar UUID
        novoPlaneta.id = (this.planetas.length + 1).toString(); 
        this.planetas.push(novoPlaneta);
        return novoPlaneta;
    }

    // Atualiza um planeta existente
    static async updatePlaneta(id: string, dadosAtualizados: Planeta) {
        const index = this.planetas.findIndex(p => p.id === id);
        if (index !== -1) {
            this.planetas[index] = { ...this.planetas[index], ...dadosAtualizados };
            return this.planetas[index];
        }
        return null; // Planeta não encontrado
    }

    // Atualiza parcialmente um planeta
    static async patchPlaneta(id: string, dadosParciais: Partial<Planeta>) {
        const index = this.planetas.findIndex(p => p.id === id);
        if (index !== -1) {
            this.planetas[index] = { ...this.planetas[index], ...dadosParciais };
            return this.planetas[index];
        }
        return null; // Planeta não encontrado
    }

    // Deleta um planeta
    static async deletePlaneta(id: string) {
        const index = this.planetas.findIndex(p => p.id === id);
        if (index !== -1) {
            this.planetas.splice(index, 1);
            return true; // Deletado com sucesso
        }
        return false; // Planeta não encontrado
    }
}

export default PlanetaServices;
