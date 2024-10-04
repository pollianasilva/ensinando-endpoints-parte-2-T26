export interface gestaoDeTarefa {
    id: string;
    titulo: string;
    descricao: string;
    concluida: boolean;
    dataCriacao?: Date;     // Data de criação da tarefa
    dataConclusao?: Date;    // Data de conclusão da tarefa
    prioridade?: string;     // Prioridade da tarefa
    usuarioResponsavel?: string; // Usuário responsável pela tarefa
}
