var insertNumber = (arr, k) => {
    for(var i = 0; i < arr.length; i++) {
        if(k < arr[i]) {
            arr.splice(i, 0, k);
            break;
        }
    }
    console.log(arr);
    
}

insertNumber([1,3,6,9,11,20], 13);