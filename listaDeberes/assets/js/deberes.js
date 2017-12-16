// Tachar una tarea finalizada
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
// Eliminar tarea de la lista
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut("200",function(){
        $(this).remove();
    });
    // previene event bubbling
    event.stopPropagation();
});

// Añade tarea con enter
$("input[type='text'").keypress(function(e){
    if(e.which === 13){
       addTarea();
    }
});
// añade nueva tarea con con el boton +
$(".fa-plus-circle").on("click",function(){
    addTarea();
});

$("input").focus(function(){
    $(this).removeClass("wrong");
})

// esconde el addtarea
$(".fa-angle-down").click(function(){
    $(".addtarea").slideToggle();
});

// extraer tarea del input y añadirla a la lista
function addTarea(){
    var nuevoDeber = $("input[type='text'").val();
    if(nuevoDeber !== ""){
    $("input[type='text'").val("");
    // lo agrega al <ul></ul>
    $("ul").append("<li><span class='tareas'><i class='fa fa-trash'></i></span> " + nuevoDeber + "</li>");
    }else{
        $("input").addClass("wrong");
    }
}

