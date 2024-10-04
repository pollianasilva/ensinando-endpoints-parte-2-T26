/*import express, { json } from "express";
import { router as index } from "./routes";
import { planetasRouter } from "./routes/planetas";

const app = express();

app.use(json());
app.use("/", index);
app.use(planetasRouter);

*/


import express from 'express';
import planetasRouter from './routes/planetas';
import alunosRouter from './routes/alunos';
import gestaoTarefaRouter from './routes/gestaoTarefa';
import router from './routes/index'; 

const app = express();

// Middleware para tratar JSON
app.use(express.json());

// Middleware para lidar com erros de parsing
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({ message: "Corpo da requisição inválido." });
    }
    next();
});

// Rota Hello World
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Usando as rotas de planetas
app.use('/api/planetas', planetasRouter); // Prefixo para planetas

// Usar o roteador de alunos com o prefixo "/alunos"
app.use('/alunos', alunosRouter);

// Usar o roteador de Gestão De Tarefas com o prefixo "/gestaoTarefas"
app.use('/gestaoTarefas', gestaoTarefaRouter);

// Iniciar o servidor na porta 8080
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

export default app; // Exporta a configuração do app

