//const tarefas = [];

//function pegarCampos(){
    //return{
    //    inputNomeTarefa = document.querySelector("#nomeTarefa"),
    //    inputDescricao = document.querySelector("#descricao"),
    //    inputDataLimite = document.querySelector("#input-dataLimite"),
    //    inputOpcoes = document.querySelector("#opcoes-prioridades"),
    //    selectCategoria = document.querySelector("#categoria")
  //  }


//}

//Função que salva a tarefa e não recarrega a página
export function configurarForm(){

    const form = document.querySelector("#NovaTarefa");
    const inputNomeTarefa = document.querySelector("#nomeTarefa");
    const inputDescricao = document.querySelector("#descricao");
    const inputDataLimite = document.querySelector("#input-dataLimite");
    const inputOpcoes = document.querySelector("#opcoes-prioridades");
    const selectCategoria = document.querySelector("#categoria");



    form.addEventListener("submit", (e) => {
        e.preventDefault();


        console.log(inputNomeTarefa.value);
        console.log(inputDescricao.value);
        console.log(inputDataLimite.value);
        //inputOpcoes da erro
        //console.log(inputOpcoes.value);
        console.log(selectCategoria.value);
    })
}

//Função que vai salvar a tarefa em uma array
//export function AdicionarTarefa(tarefas){

//    tarefas.push({
//        nome: inputNomeTarefa.value
//    });
//}


