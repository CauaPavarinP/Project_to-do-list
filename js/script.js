//importando o conteudo das outras pastas
// importa { Função } da pasta "./teste/arquivo.js"
import { DashBoard } from "./components/dashboard.js"
import { NovaTarefa } from "./components/NovaTarefa.js";
import { GerenciarTarefas } from "./components/GerenciarTarefas.js";
import { config } from "./components/config.js";
import { configurarForm } from "./services/tarefaServices.js";

const main = document.getElementById("conteudo-principal");

function render(componente){
    main.innerHTML = componente();
}

document
    .getElementById("btn-dashboard")
    .addEventListener("click", () => {
        render(DashBoard);
    });

document
    .getElementById("btn-novaTarefa")
    .addEventListener("click", () => {
        render(NovaTarefa);

        configurarForm();
    });

document
    .getElementById("btn-gerenciarTarefas")
    .addEventListener("click", () => {
        render(GerenciarTarefas);
    });

document
    .getElementById("btn-configuracao")
    .addEventListener("click", () => {
        render(config);
    });

render(DashBoard);