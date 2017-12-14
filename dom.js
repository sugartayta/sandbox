// var body = document.querySelector("body");
// var isBlue = false;

// setInterval(function(){
//     body.style.background = isBlue? "white":"blue";
//     isBlue = !isBlue
// },1000);

// var tag = document.getElementById("highlight");
// var tags = document.getElementsByClassName("bold");
// var otherTags = document.getElementsByTagName("li");

// var lis = document.querySelectorAll("li");

// var p = document.getElementById("first");
// var p2 = document.getElementsByClassName("special")[0];
// var p3 = document.querySelector("#first");
// var p4 = document.querySelector(".special");
// var p5 = document.querySelectorAll(".special")[0];
// var p6 = document.querySelectorAll("p")[0];

// var titulo = document.querySelector("h1");
// titulo.textContent = "HOLA BRUNO";

var isBlue = false;
document.querySelector("h1").addEventListener("click",function(){
    this.style.color = isBlue? "black":"red";
    isBlue= !isBlue;
})

var lis = document.querySelectorAll("li");
for(var i = 0; i<lis.length;i++){
    lis[i].addEventListener("click",function(){
        this.style.color="pink";
    })
}