//export permite que seja importado
export function DashBoard(){
    return `
        <div class="info-grid">
            <div class="info-card">
                <h4>Total</h4>
                <span>14</span>
            </div>

            <div class="info-card">
                <h4>Concluídas</h4>
                <span>8</span>
            </div>

            <div class="info-card">
                <h4>Pendentes</h4>
                <span>6</span>
            </div>
        </div>

        <div class="atividade-grid">
            <div class="atividade-card">
                <h3>Próximas Tarefas</h3>

                <ul>
                    <li>Estudar CSS</li>
                    <li>Finalizar Dashboard</li>
                    <li>Criar tela nova tarefa</li>
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