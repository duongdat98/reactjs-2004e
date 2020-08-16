function findTheNumber(arr) {
    var max = 0, count = 1;
    arr = arr.sort((a, b) => {
        return a - b;
    })
    console.log(arr);
    
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]) {
            count++;
            if(count > max) {
                max = count;                
            }
    
        }
        else max = 0;
    }
    console.log(max);
    
}
findTheNumber([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]);