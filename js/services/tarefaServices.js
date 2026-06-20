    const tarefas = [];

    function pegarCampos(){
        return{
            inputNomeTarefa: document.querySelector("#nomeTarefa"),
            inputDescricao: document.querySelector("#descricao"),
            inputDataLimite: document.querySelector("#input-dataLimite"),
            inputOpcoes: document.querySelector("#opcoes-prioridades"),
            selectCategoria: document.querySelector("#categoria")
        }
    }

    //Função que salva a tarefa e não recarrega a página
    export function configurarForm(){

        const campos = pegarCampos();

        const form = document.querySelector("#NovaTarefa");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const tarefa = {
                nome: campos.inputNomeTarefa.value,
                descricao: campos.inputDescricao.value,
                dataLimite: campos.inputDataLimite.value,
                //prioridade: campos.inputOpcoes.value
                categoria: campos.selectCategoria.value
            }

            tarefas.push(tarefa);

            console.log(tarefas);
        })
    }

    //Função que vai salvar a tarefa em uma array
    //export function AdicionarTarefa(tarefas){

    //    tarefas.push({
    //        nome: inputNomeTarefa.value
    //    });
    //}


