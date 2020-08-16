function sumArray(arr) {
    var result = 0
    for(var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(result);
    
}
sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1])


//way 2:
var sumArray2 = (arr) => {
    return arr.reduce((a, b) => {        
        return a + b;
    })
}
console.log(sumArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
