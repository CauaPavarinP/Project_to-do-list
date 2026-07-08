//export permite que seja importado
export function DashBoard(){
    return `
        <div class="info-grid">
            <div class="info-card">
                <h4>Total</h4>
                <span id="Total">0</span>
            </div>

            <div class="info-card">
                <h4>Concluídas</h4>
                <span id="Concluida">0</span>
            </div>

            <div class="info-card">
                <h4>Pendentes</h4>
                <span id="Pendentes">0</span>
            </div>
        </div>

        <div class="atividade-grid">
            <div class="atividade-card">
                <h3>Próximas Tarefas</h3>

                <ul id="Prox-Tarefa">
                    
                </ul>
            </div>

            <div class="atividade-card">
                <h3>Atividades Recente</h3>

                <ul>
                    <li>Tarefa Criada</li>
                    <li>Tarefa Concluída</li>
                    <li>Tarefa Editada</li>
                    <li>Tarefa Excluída</li>
                </ul>
            </div>
        </div> 
    `
}        