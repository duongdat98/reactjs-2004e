function findNearest(arr, k) {
    result = [];
        arr.sort((a, b) => {
            return Math.abs(a - k) - Math.abs(b - k);
        })
        
        if(Math.abs(arr[0] - k) == Math.abs(arr[1] - k)) {
            result.push(arr[0], arr[1])
            
        }
        else {result.push(arr[0])}
    console.log(result);
}
findNearest([1, 2, 3, 4, 6, 8, 2, 3, 5], 7);

