/* import { Router } from "express";
import { PlanetasController } from "../controllers/planetasController";

export const planetasRouter = Router();

// Usando o controlador para obter todos os planetas
planetasRouter.get("/planetas", PlanetasController.getAllPlanetas);

export default planetasRouter; // Certifique-se de exportar o roteador

*/




import { Router } from "express";
import PlanetasController from "../controllers/planetasController"; // Importação sem chaves

const planetasRouter = Router();

// Usando o controlador para obter todos os planetas
planetasRouter.get("/", PlanetasController.getAllPlanetas); // Rota para obter todos os planetas

// Rota para adicionar um novo planeta
planetasRouter.post('/', PlanetasController.addPlaneta); // Rota para adicionar um novo planeta

// Rota para atualizar um planeta existente (PUT)
planetasRouter.put('/:id', PlanetasController.updatePlaneta); // Atualiza o planeta pelo ID

// Rota para atualizar parcialmente um planeta (PATCH)
planetasRouter.patch('/:id', PlanetasController.patchPlaneta); // Atualiza parcialmente pelo ID

// Rota para deletar um planeta
planetasRouter.delete('/:id', PlanetasController.deletePlaneta); // Deleta o planeta pelo ID

export default planetasRouter; // Exporta o roteador
