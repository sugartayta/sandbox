var todo = ["Comprar una nueva tortuga"];

var input = prompt("Que te gustaria hacer?");

while(input !== "quit"){
	if(input==="list"){
		listToDo();
	}else if(input === "new"){
		addToDo();
	}else if(input==="delete") {
		deleteToDo();
	}
	input = prompt("Que te gustaria hacer?");
}
console.log("OK, YA ME VOY. BYE!");

function listToDo() {
	console.log("*****************")
	todo.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("*****************")
}

function addToDo() {
	var newTodo = prompt("Agrega una nueva tarea");
	todo.push(newTodo);
	console.log("Tarea añadida")
}

function deleteToDo() {
	var index = prompt("Que tarea desea eliminar?")
	todo.splice(index,1);
	console.log("Tarea eliminada")
}
