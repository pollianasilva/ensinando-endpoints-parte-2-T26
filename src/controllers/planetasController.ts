/* import { Request, Response } from "express";
import PlanetaServices from "../services/planetaServices";

class PlanetasController {
  static getAllPlanetas = async (req: Request, res: Response) => {
    // controller nao pode ter lógica de negócio, apenas chamar o service
    // ela serve para tratar os erros e deixá-los mais amigáveis para o usuário
    // deve-se usar condicionais, try catch, etc. para tratar os erros
    // e devolver uma resposta amigável para o usuário
    // pesquise sobre status code e como usá-los para tratar erros de forma eficiente e amigável
    // mas também atente-se para não expor informações sensíveis ao usuário
    res.status(200).json(await PlanetaServices.getAllPlanets());
  };
}

export { PlanetasController };
*/


import { Request, Response } from "express";
import PlanetaServices from "../services/planetaServices";
import { Planeta } from "../models/planetas";

class PlanetasController {
    static async getAllPlanetas(req: Request, res: Response) {
        try {
            const planetas = await PlanetaServices.getAllPlanets();
            res.status(200).json(planetas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao obter planetas." });
        }
    }

    static async addPlaneta(req: Request, res: Response) {
        const novoPlaneta: Planeta = req.body;

        if (!novoPlaneta.name || !novoPlaneta.climate || !novoPlaneta.orbital_period) {
            return res.status(400).json({ message: "Campos obrigatórios faltando." });
        }

        try {
            const planetaCriado = await PlanetaServices.savePlaneta(novoPlaneta);
            console.log("Planeta criado:", planetaCriado); // Log da criação do planeta
            res.status(201).json(planetaCriado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao adicionar o planeta." });
        }
    }

    static async updatePlaneta(req: Request, res: Response) {
        const { id } = req.params;
        const dadosAtualizados: Planeta = req.body;

        if (!id || !dadosAtualizados.name) {
            return res.status(400).json({ message: "ID ou campos obrigatórios faltando." });
        }

        try {
            const planetaAtualizado = await PlanetaServices.updatePlaneta(id, dadosAtualizados);
            if (planetaAtualizado) {
                console.log("Planeta atualizado:", planetaAtualizado); // Log da atualização do planeta
                res.status(200).json(planetaAtualizado);
            } else {
                res.status(404).json({ message: "Planeta não encontrado." });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao atualizar o planeta." });
        }
    }

    static async patchPlaneta(req: Request, res: Response) {
        const { id } = req.params;
        const dadosParciais = req.body;

        if (!id) {
            return res.status(400).json({ message: "ID é obrigatório." });
        }

        try {
            const planetaAtualizado = await PlanetaServices.patchPlaneta(id, dadosParciais);
            if (planetaAtualizado) {
                console.log("Planeta parcialmente atualizado:", planetaAtualizado); // Log da atualização parcial
                res.status(200).json(planetaAtualizado);
            } else {
                res.status(404).json({ message: "Planeta não encontrado." });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao atualizar parcialmente o planeta." });
        }
    }

    static async deletePlaneta(req: Request, res: Response) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "ID é obrigatório." });
        }

        try {
            const foiDeletado = await PlanetaServices.deletePlaneta(id);
            if (foiDeletado) {
                console.log(`Planeta com ID ${id} deletado.`); // Log da deleção do planeta
                res.status(204).send(); // No Content
            } else {
                res.status(404).json({ message: "Planeta não encontrado." });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao deletar o planeta." });
        }
    }
}

export default PlanetasController;
