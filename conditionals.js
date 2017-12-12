    var age = prompt("What is your age");

    if (age < 0) {
        console.log("Por favor, introduce una edad valida");
    }
    else {
        if (age % 2 != 0) {
            console.log("your age is odd!");
        }
        if (age == 21) {
        console.log("Happy 21st birthday!");
        }
        if(Math.sqrt(age)%1==0) {
            console.log("perfect square!");
        }
    }