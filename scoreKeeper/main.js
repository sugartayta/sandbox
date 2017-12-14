// var c1 = 0;
// var c2 = 0;
// var m = 5;

// document.querySelector("#p1").addEventListener("click",function(){
//     c1+=1;
//     document.querySelector("#c1").textContent=c1;
//     if(c1==m){
//         document.querySelector("#c1").style.color="red";

//     }
// });

// document.querySelector("#p2").addEventListener("click",function(){
//     c2+=1;
//     document.querySelector("#c2").textContent=c2;
//     if(c2==m){
//         document.querySelector("#c2").style.color="red";

//     }
// });

// document.querySelector("#reset").addEventListener("click",function(){
//     c1 = 0;
//     c2 = 0;
//     document.querySelector("#c1").textContent=c1;
//     document.querySelector("#c2").textContent=c2;
// });

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Goals = 0;
var p2Goals = 0;
var p1Display = document.querySelector("#c1");
var p2Display = document.querySelector("#c2");
var gameOver = false;
var winningScore = 5;
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

p1Button.addEventListener("click",function(){
    if(!gameOver){
    p1Goals++;
    p1Display.textContent = p1Goals;
        if(p1Goals === winningScore){
            gameOver = true;
            p1Display.classList.add("winner")
        }
}
});
p2Button.addEventListener("click",function(){
    if(!gameOver){
        p2Goals++;
        p2Display.textContent = p2Goals;
            if(p2Goals === winningScore){
                gameOver = true;
                p2Display.classList.add("winner")
            }
    }
});

numInput.addEventListener("change",function(){
    winningScoreDisplay.textContent= numInput.value;
    winningScore = Number(numInput.value);
    resetGame();
});

reset.addEventListener("click",function(){
    resetGame();
});

function resetGame() {
    p2Display.classList.remove("winner");
    p1Display.classList.remove("winner");
    p1Goals = 0;
    p2Goals = 0;
    p1Display.textContent = p1Goals;
    p2Display.textContent = p2Goals;
    gameOver=false;
}