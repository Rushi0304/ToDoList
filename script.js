let todos= [];

if(localStorage.getItem("todos")){
    todos=JSON.parse(localStorage.getItem("todos"));
    updateDisplay();
}else{
    todos=[];
}
document.getElementById("todoform").addEventListener("submit",function(event1){
    event1.preventDefault();
    getTodo();
});
function getTodo(){
    const input = document.getElementById("todo-input");
    if(input.value.trim()===""){
        alert("Please enter a valid ToDo");
        return ;
    }else{
        if(todos.includes(input.value.trim())){
            alert("ToDo already exists");
            return;
        }
    } 
    todos.push(input.value.trim())
        input.value="";
        updateDisplay();   
}
function removeTodo(index){
    todos.splice(index,1);
    updateDisplay();
}
function updateDisplay(){
    const container =document.getElementById("todocontainer");
    container.innerHTML ="";
    todos.forEach((todo,index)=>{
        const todoDiv = document.createElement("div1");
        const p =document.createElement("p");
        p.innerText=todo;
        const remove =document.createElement("button");
        remove.innerText="❌";
        remove.addEventListener("click",()=>removeTodo(index));
        todoDiv.appendChild(p);
        todoDiv.appendChild(remove);
        container.appendChild(todoDiv);
    });
    localStorage.setItem('todos',JSON.stringify(todos));
}