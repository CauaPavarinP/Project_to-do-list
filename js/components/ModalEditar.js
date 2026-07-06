export function modalEditar(){
    return `
        <div class="modal-overlay">
            <div class="modal">
                <h2>Editar tarefa</h2>

                <div class="campo_newtask">
                    <label>Nome da Tarefa</label>
                    <input type="text" id="EditarNome" name="name" placeholder="Escreva o nome da tarefa">
                </div>

                <div class="campo_newtask">
                    <label>Descrição</label>
                    <textarea name="descricao" id="EditarDescricao" placeholder="descrição da tarefa"></textarea>
                </div>

                <div class="campo_newtask">
                    <label>Categoria</label>
                    <select name="categoria" id="EditarCategoria">
                        <option value="">Selecionar</option>
                        <option value="estudos">Estudos</option>
                        <option value="casa">Casa</option>
                        <option value="compras">Compras</option>
                        <option value="finanças">Finanças</option>
                    </select>
                </div>


                <div class="buttons-modal">
                    <button type="submit" id="SalvarModal" class="btn-salvar">
                        Salvar
                    </button>

                    <button id="fecharModal" class="btn-salvar">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    `
}