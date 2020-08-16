var filterArray = (arr) => {
    arr.sort((a, b) => {
        return a - b;
    }) 
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);    
    if(max == min){
        return -1;
    }
    else {
        var x = arr.indexOf(max);     
        arr = arr.slice(0, x);
        return arr[arr.length -1];    
    }   
}
console.log(filterArray([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]));
console.log(filterArray([1, 1, 1, 1, 1, 1, 1, 1, 1]));