var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var botSquares = document.querySelectorAll(".bot");
var easyMode = false;
colorDisplay.textContent = pickedColor;

// asignar 6 colores a los cuadros
giveColors();   

// reset button
resetButton.addEventListener("click",function(){
    messageDisplay.textContent = "";
    resetButton.textContent = "Nuevos colores";
    h1.style.backgroundColor = "steelblue";
    colors = easyMode?generateRandomColors(3):generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    giveColors();
});

// easy button
easyButton.addEventListener("click", function(){
    easyMode = true;
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    for(var i = 0;i<botSquares.length;i++){
        botSquares[i].classList.add("hide");
    }
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    giveColors();
    
});
// hard button
hardButton.addEventListener("click", function(){
    easyMode = false;
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    for(var i = 0;i<botSquares.length;i++){
        botSquares[i].classList.remove("hide");
    }
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    giveColors();
});

// cambia todos los squares al color elegido cuando se gana
function changeColors (color) {
    for(var i = 0; i <squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}   

// crea 6 colores random
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i <num;i++){
        arr.push(randomColor());
    }
    return arr;
}

// elige un color entre los 6 o 3 colores al azar
function pickColor() {
    return colors[Math.floor(Math.random()*colors.length)];
}

// returns una string con un color en formato rgb("255, 255, 255")
function randomColor() { 
    var str= "rgb("+randomRGB() + ", " + randomRGB()+ ", " + randomRGB()+")";
    return str;
}
// genera un numero entre 0 y 255
function randomRGB(){
   return Math.floor(Math.random()*256)
}

// añade listeners y colores a cada square
function giveColors(){
    for(var i = 0; i <squares.length;i++){ 
        // añadir colores 
        squares[i].style.backgroundColor = colors[i];
        // añadir listeners
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;;
            // respuesta correcta
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Respuesta correcta!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Jugar de nuevo?"
            }else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Inténtalo de nuevo"
            }
        });
    }
}


