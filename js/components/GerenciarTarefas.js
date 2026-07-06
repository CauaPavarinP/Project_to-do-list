export function GerenciarTarefas(){
    return `
        <div class="gerenciar-tarefas">
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Categoria</th>
                        <th>Prioridade</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody id="lista-tarefas">

                </tbody>
            </table>

            <div class="paginacao">
                <button>← Anterior</button>
                
                <button class="pagina-ativa">1</button>
                <button>2</button>
                <button>3</button>

                <button>Próxima →</button>
            </div>
        </div>
    `
}