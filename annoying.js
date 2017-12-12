var answer = (prompt("Are we there yet?")).toLowerCase();

while(answer.indexOf("yes") === -1){
    answer = prompt("ARE WE THERE YET?").toLowerCase();
}
alert("FINNALLY WE MADE IT!");

