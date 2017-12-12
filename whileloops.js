var uno = -9;
var dos = 12;
var tres = 301;
var cuatro = 6;

console.log("PRUEBA UNO");
while(uno < 19 ){
    console.log(uno);
    uno++;
}
console.log("PRUEBA DOS");
while(dos < 40) {
    console.log(dos);
    dos+=2;
}
console.log("PRUEBA TRES");
while(tres < 333) {
    console.log(tres);
    tres+=2;
}
console.log("PRUEBA CUATRO");
while(cuatro < 50) {
    if(cuatro%5===0 && cuatro%3===0){
        console.log(cuatro);
    }
    cuatro++;
}