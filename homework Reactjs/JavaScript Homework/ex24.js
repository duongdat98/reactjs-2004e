var arr = [1,2,3,2,3,4,6,7];
function filterArr(arr) {
    check = true;
    for(var i = 0; i < arr.length; i++) {
        for(var j = 2; j < Math.sqrt(arr[i]); j++) {
            if(i % j === 0)
                check = true;
            else 
                check = false;
        }
    }
}

var prime = arr.filter(filterArr);
console.log(prime);
