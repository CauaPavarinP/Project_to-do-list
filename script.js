const AddTask = document.getElementById("add_task");
const btn = document.getElementById("btn");

const List = document.getElementById("list");

function add_task_list(){
    if( AddTask.value !== ""){

        const newTask = document.createElement("li");
        newTask.className = 'task_item';

        const checkbox = document.createElement("input");
        checkbox.type = 'checkbox';

        const span = document.createElement("span");
        span.textContent = AddTask.value;

        const deletBtn = document.createElement("button");
        deletBtn.textContent = "Apagar";
        deletBtn.style.display = "none";
        
        checkbox.addEventListener("change", function(){

            if(checkbox.checked){
                deletBtn.style.display = "inline"
                span.style.textDecoration = "line-through";
            } else{
                deletBtn.style.display = "none";
                span.style.textDecoration = "none";
            }
        })

        deletBtn.addEventListener('click', function(){
            newTask.remove();
        })

        newTask.appendChild(checkbox);
        newTask.appendChild(span);
        newTask.appendChild(deletBtn);

        List.appendChild(newTask);
        
        AddTask.value = "";
}}

btn.addEventListener('click', add_task_list);

//Parâmetro "e" carrega as informações da tecla pressioanda
AddTask.addEventListener('keydown', function(e){
    
        if(e.key === 'Enter'){
            //Puxa a função para criar a task
            add_task_list();
        }
    }
)