const AddTask = document.getElementById("add_task");
const btn = document.getElementById("btn");

const List = document.getElementById("list");

function add_tarefa(){

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
                deleteBtn.style.display = "none";
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
    }

    btn.addEventListener('click', newTask)

    AddTask.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            AddTask();
        }
    })

}


