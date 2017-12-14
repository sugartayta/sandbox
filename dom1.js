// var isPurple = false;
// document.querySelector("#botoncito").addEventListener("click",function(){
//     document.body.style.backgroundColor = isPurple? "white":"purple";
//     isPurple = !isPurple
// });

// 2DA FORMA 

document.querySelector("#botoncito").addEventListener("click",function(){
    document.body.classList.toggle("morado");
})