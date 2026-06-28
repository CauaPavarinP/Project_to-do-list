        const tarefas = [];

        //Função que pega todos os campos na Nova Tarefa
        function pegarCampos(){
            return{
                inputNomeTarefa: document.querySelector("#nomeTarefa"),
                inputDescricao: document.querySelector("#descricao"),
                inputDataLimite: document.querySelector("#input-dataLimite"),
                inputOpcoes: document.querySelector("#prioridade"),
                selectCategoria: document.querySelector("#categoria"),
                mensagem: document.querySelector("#msg_tarefa")
            }
        }

        //Função que salva a tarefa e não recarrega a página
        export function configurarForm(){

            const form = document.querySelector("#NovaTarefa");

            form.addEventListener("submit", (e) => {
                e.preventDefault();

                if(!verificaCampos()){
                    return;
                }

                adicionarTarefa();
                limpaCampos();
            })
        }

        //Função que vai salvar a tarefa em uma array
        function adicionarTarefa(){

            const campos = pegarCampos();
            const prioridadeSelecionada = prioridade();

            const tarefa = {
                nome: campos.inputNomeTarefa.value,
                descricao: campos.inputDescricao.value,
                dataLimite: campos.inputDataLimite.value,
                // Não precisa usar .value, pois a função prioridade() já retorna o valor como uma string.
                prioridade: prioridadeSelecionada,
                categoria: campos.selectCategoria.value
            }
            
            tarefas.push(tarefa);

            console.log(tarefas);
        }

        function limpaCampos(){
            const campos = pegarCampos();
            const prioridadeSelecionada = document.querySelector('input[name=prioridade]:checked');

            campos.inputNomeTarefa.value = '';
            campos.inputDescricao.value = '';
            campos.inputDataLimite.value = '';

            if(prioridadeSelecionada){
                prioridadeSelecionada.checked = false;
            }

            campos.selectCategoria.value = '';
        }

        function verificaCampos(){
            
            const campos = pegarCampos();

            console.log(campos.mensagem);

            if(campos.inputNomeTarefa.value == ''){
                console.log(campos.inputNomeTarefa.value);
                campos.mensagem.className = "msg-erro";
                campos.mensagem.innerHTML = "<span class='msg-erro'> Digite o nome da tarefa </span>"
                return false;
            }

            campos.mensagem.innerHTML = "<span>puta que pariu</span>";

            return true;
        }

        function prioridade(){
            const prioridade = document.querySelector('input[name=prioridade]:checked');

            return prioridade.value;
        }
        
