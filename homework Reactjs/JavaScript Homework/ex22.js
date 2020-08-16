//Find the min max average
// function minMaxAverage(arr) {
//     var average = 0, result = 0;
//     var min = Math.min.apply(Math, arr);
//     console.log("So nho nhat la", min);
//     var max = Math.max.apply(Math, arr);
//     console.log("So lon nhat la", max);
//     for(var i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     average = result / arr.length;
//     console.log("Trung binh cua mang la", average);
// }
// minMaxAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

//Ways 2:
var minMaxAverage2 = (arr) => {
    var average2, result2 = 0, max2, min2;
    arr = arr.sort((a, b) => {
        return a - b;
    });    
    for(let i = 0; i < arr.length; i++) {
        min2 = arr[0];
        max2 = arr[arr.length - 1];
        result2 += arr[i];        
    }
    average2 = result2 / arr.length;
    console.log("So lon nhat la: ", max2);
    console.log("So nho nhat la: ", min2);
    console.log("Trung binh cua mang la: ", average2);
}

minMaxAverage2([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

