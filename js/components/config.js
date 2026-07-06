export function config(){
    return `
        <div class="config">
                <h1>Configuração</h1>

                <div class="campos-config">
                    <label>Nome do Usuário</label>
                    <input type="text">
                 </div>
                <!--
                <div class="campos-config">
                    <label>Gmail do Usuário</label>
                    <input type="text">
                </div>
                -->
                <div class="tema-config">
                    <label>Tema</label>

                    <div class="config-tema">
                            <input type="radio" name="tema" value="claro">claro
                            <input type="radio" name="tema" value="claro">escuro
                        </div>
                    </div>

                    <!-- 
                    Futura implementação onde o usuário vai receber avisos sobre as tarefas no gmail ou whatszapp 

                    <div class="noti-config">
                        <label>Notificações</label>

                        <div class="config-notificacao">
                            <label>
                                <input type="checkbox" name="lembrete" value="lembrete">
                                Receber lembretes
                            </label>
                            <label>
                                <input type="checkbox" name="prazo" value="prazo">
                                Receber avisos de prazo
                            </label>
                        </div>
                    </div>
                    -->

                    <button>Salvar</button>
                </div>
    `
}