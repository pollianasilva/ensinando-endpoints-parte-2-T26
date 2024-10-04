import { Router } from "express"; // Corrigido para importar o Router corretamente
import planetasRouter from "./planetas"; // Importando o roteador de planetas
import alunosRouter from "./alunos"; // Importando o roteador de alunos
import gestaoTarefaRouter from './gestaoTarefa'; // Corrigido o caminho da importação

const router = Router(); // Instância do Router

// Rota de exemplo
router.get("/", (req, res) => {
    try {
        res.status(200).send("Hello World");
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
});

// Usar o roteador de planetas com o prefixo "/planetas"
router.use("/planetas", planetasRouter);

// Usar o roteador de alunos com o prefixo "/alunos"
router.use("/alunos", alunosRouter);

// Usar o roteador de Gestão De Tarefas com o prefixo "/gestaoTarefas"
router.use('/gestaoTarefas', gestaoTarefaRouter);

// Exportar o roteador para ser utilizado em outros módulos
export default router; 
