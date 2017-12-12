var input = prompt("Que quieres hacer?");
var todolist = ["nada"];
while(input!="quit"){
    if(input == "list") {
        console.log(todolist);
    }else if (input =="new") {
        var newTodo = prompt("Ingresa una nueva tarea");
        todolist.push(newTodo);
    }
    input = prompt("Que quieres hacer?");
}

console.log("OK, YA ME VOY!");

