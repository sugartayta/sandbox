function printReverse(arr) {
    for(var i = arr.length-1;i>=0;i-- ){
        console.log(arr[i]);
    }
}

function isUniform(arr) {
    var val = true;
    arr.forEach(function(j,i,arr){
        if(i<=arr.length-2){
            if(j!==arr[i+1])
            val = false;
        }
    });
    return val;
}

// improved isUniform method 
function isThatReallyUniform(arr){
    var first = arr[0];
    for(var i = 1; i<arr.length;i++){
        if(arr[i]!== first){
            return false;
        }
    }
    return true;
}

function sumArray(num) {
    var sum = 0;
    num.forEach(function(j){
        sum+=j;
    });
    console.log(sum);
}

function max(arr) {
    var maxNum = 0;
    arr.forEach(function(j){
        if(j>maxNum){
            maxNum=j;
        }
    });
    console.log(maxNum);
}