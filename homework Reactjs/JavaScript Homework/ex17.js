var minMax = (a, b, c) => {
    var arr = [a, b, c];
    console.log(Math.max.apply(null, arr));
    console.log(Math.min.apply(null, arr));
    
}
console.log(minMax(2,4,7));
