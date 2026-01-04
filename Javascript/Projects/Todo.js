let req = prompt("Enter your request here: ");
let todos = [];
while(true){
    if(req == "quit"){
        console.log("You are exiting from the todo app");
        break;
    }
    if(req == "list"){
        console.log("____________________________________");
        console.log("All your tasks");
        for(let i = 0; i < todos.length; i++){
            console.log(i,todos[i]);
        }
        console.log("_____________________________________");
    }
    else if(req == "add"){
        let task = prompt("Enter your task to add");
        todos.push(task);
        console.log("Task Entered");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the task no you want to delete");
        todos.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("Wrong request entered");
    }
    req = prompt("Enter your request here: ");
}
