        import { modalEditar } from "../components/ModalEditar.js";
        
        const tarefas = [];

        /////////////////////////////////////////////////////////
        //                                                      //
        //    Função que pega todos os campos na Nova Tarefa    //
        //                                                      //
        /////////////////////////////////////////////////////////
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

        /////////////////////////////////////////////////////////
        //                                                      //
        // Função que salva a tarefa e não recarrega a página    //
        //                                                      //
        /////////////////////////////////////////////////////////
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


        /////////////////////////////////////////////////////////
        //                                                      //
        // Função que vai salvar a tarefa em uma array          //
        //                                                      //
        /////////////////////////////////////////////////////////
        function adicionarTarefa(){
            const campos = pegarCampos();
            const prioridadeSelecionada = prioridade();

            const tarefa = {
                nome: campos.inputNomeTarefa.value,
                descricao: campos.inputDescricao.value,
                dataLimite: campos.inputDataLimite.value,
                // Não precisa usar .value, pois a função prioridade() já retorna o valor como uma string.
                prioridade: prioridadeSelecionada,
                categoria: campos.selectCategoria.value,
                status: "Pendente"
            }
            
            tarefas.push(tarefa);
            console.log(tarefas);
        }

        /////////////////////////////////////////////////////////
        //                                                      //
        // Função que limpa os campos apos o envio do formulario  //
        //                                                      //
        /////////////////////////////////////////////////////////

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

        /////////////////////////////////////////////////////////
        //                                                      //
        // Função que verifica se os campos estão preenchidos     //
        //                                                      //
        /////////////////////////////////////////////////////////
        function verificaCampos(){
            const campos = pegarCampos();
            //console.log(campos.mensagem);

            if(campos.inputNomeTarefa.value == ''){
                console.log(campos.inputNomeTarefa.value);
                campos.mensagem.className = "msg-erro";
                campos.mensagem.innerHTML = "<span class='msg-erro'> Digite o nome da tarefa </span>"
                return false;
            }
            //arrumar isso
            //campos.mensagem.innerHTML = "<span>puta que pariu</span>";
            return true;
        }

        /////////////////////////////////////////////////////////
        //                                                         //
        // Função que salva a prioridade selecionada no formulario //
        //                                                         //
        /////////////////////////////////////////////////////////
        function prioridade(){
            const prioridade = document.querySelector('input[name=prioridade]:checked');

            return prioridade.value;
        }

        /////////////////////////////////////////////////////////
        //                                                      //
        // Função que cria uma linha na tabela da tarefa        //
        // cadastrada                                           //
        /////////////////////////////////////////////////////////
        export function tarefaTabela(){
            const tabelaTarefas = document.querySelector('#lista-tarefas');
            const fechar = document.querySelector('#fecharModal');

            tabelaTarefas.innerHTML = "";

            for(let i = 0; i < tarefas.length; i++){
                const novaLinha = document.createElement("tr");

                const nomeTarefa = document.createElement("td");
                const descricaoTarefa = document.createElement("td");
                const dataTarefa = document.createElement("td");
                const prioridadeTarefa = document.createElement("td");
                const categoriaTarefa = document.createElement("td");
                const statusTarefa = document.createElement("td");

                const buttonsTarefa = document.createElement("td");
                const buttonDeletar = document.createElement("button");
                const buttonEditar = document.createElement("button");
                const Checkbox = document.createElement("input");
                Checkbox.type = "radio";
                Checkbox.className = "Checkbox-tarefa";
                buttonEditar.className = "editar";
                buttonDeletar.className = "excluir";
                
                buttonEditar.dataset.indice = i;
                buttonDeletar.dataset.indice = i;

                nomeTarefa.innerText = tarefas[i].nome;
                dataTarefa.innerText = tarefas[i].dataLimite;
                prioridadeTarefa.innerText = tarefas[i].prioridade;
                categoriaTarefa.innerText = tarefas[i].categoria;
                statusTarefa.innerText = tarefas[i].status;

                buttonDeletar.innerText = "excluir";
                buttonEditar.innerText = "editar";

                novaLinha.appendChild(nomeTarefa);
                novaLinha.appendChild(categoriaTarefa);
                novaLinha.appendChild(prioridadeTarefa);
                novaLinha.appendChild(dataTarefa);
                novaLinha.appendChild(statusTarefa);
                //novaLinha.appendChild(descricaoTarefa);
                novaLinha.appendChild(buttonsTarefa);
                buttonsTarefa.appendChild(buttonEditar);
                buttonsTarefa.appendChild(buttonDeletar);
                //buttonsTarefa.appendChild(Checkbox);

                buttonEditar.addEventListener("click", () => {
                    //insertAdjacentHtml - pega uma string contendo HTML e a insere no DOM (na página)
                    document.body.insertAdjacentHTML(
                        "beforeend",
                        modalEditar()
                    )

                    const modal = document.querySelector('.modal-overlay');
                    const fechar = document.querySelector('#fecharModal');

                   document.querySelector("#EditarNome").value = tarefas[i].nome;

                    fechar.addEventListener("click", () => {
                        console.log("foi");
                        modal.remove();
                    })

                    const Salvar = document.querySelector("#SalvarModal");

                    Salvar.addEventListener("click", () => {
                        const inputModal = document.querySelector("#EditarNome");

                        tarefas[i].nome = inputModal.value;
                        tarefaTabela();
                        modal.remove();
                    })
                });

                buttonDeletar.addEventListener("click", () => {
                    //array.splice(inicio, quantidade, novoElemento);
                    //i - posição da tarefa
                    //1 - remove 1 elemento
                    // novoElemento (opcional) → elementos que serão adicionados
                    tarefas.splice(i,1);
                    tarefaTabela();
                })

                tabelaTarefas.appendChild(novaLinha);
            }
        }



        function editarTabela(){
            const tabela = tarefaTabela();

            
        }

