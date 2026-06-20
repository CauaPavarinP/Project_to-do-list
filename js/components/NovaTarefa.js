export function NovaTarefa(){
    return `
        <form id="NovaTarefa">
            <h1>Nova Tarefa</h1>

                <div class="form-content">
                    <div class="coluna1">
                        <div class="campo_newtask">
                            <label>Nome da Tarefa</label>
                            <input type="text" id="nomeTarefa" name="name" placeholder="Escreva o nome da tarefa">
                        </div>

                        <div class="campo_newtask">
                            <label>Descrição</label>
                            <textarea name="descricao" id="descricao" placeholder="descrição da tarefa"></textarea>
                        </div>
                    </div>

                    <div class="coluna2">
                        <div class="campo_newtask">
                            <label>Data Limite</label>
                            <input type="date" id="input-dataLimite">
                        </div>

                        <div class="campo_newtask">

                            <label>Prioridade</label>

                            <div class="opcoes-prioridades">
                                <label>
                                    <input type="radio" name="prioridade" value="baixa">
                                    Baixa
                                </label>

                                <label>
                                    <input type="radio" name="prioridade" value="media">
                                    Média
                                </label>

                                <label>
                                    <input type="radio" name="prioridade" value="alta">
                                    Alta
                                </label>
                            </div>
                        </div>

                        <div class="campo_newtask">
                            <label>Categoria</label>
                                
                            <select name="categoria" id="categoria">
                                <option value="">Selecionar</option>
                                <option value="estudos">Estudos</option>
                                <option value="casa">Casa</option>
                                <option value="compras">Compras</option>
                                <option value="finanças">Finanças</option>
                            </select>
                        </div>
                    </div>
                </div>
                    
            <button type="submit">Criar Tarefa</button>
        </form>
    `
}