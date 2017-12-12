function isEven(num) {
 return (num%2==0);
}
function factorial(num){
    if(num == 0) {
        return 1;
    }else{
        var count = num;
        for(var i=num;i>1;i--){
            count*=i-1;
        } 
        return count;
    }   
}

function kebabToSnake(str) {
    return str.replace(/-/g,"_");
}

var num = prompt("Pick a number and we will decide if its even or not.");
alert(isEven(num));
alert(factorial(num));
var str = prompt("Insert a kebab-String pls!");
alert(kebabToSnake(str));
