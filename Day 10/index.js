// //array

// // var names = new Array("Quy", "Dat", "Minh", "Nam");
// // var namess = ["Quy", "Dat", "Minh", "Nam"];
// // var value = names.forEach(element => {
// //     console.log(element);  
// // });
// // console.log(typeof(names));
// // console.log(names.length);

// // console.log(names);
// // console.log(names[1]);


// var fruits = [];
// fruits.push('Mango');
// fruits.push('Apple');
// fruits.push('Orange');
// fruits.push('Banana');
// fruits.unshift('Lemon');
// // console.log(fruits.lastIndexOf('Lemon'));

// // console.log(fruits);

// // //slice, splice, join, reverse
// // console.log(fruits.reverse());
// // console.log(fruits.join('\t'));
// // console.log(fruits.slice(0, 2));

// //callback function

// // function hello() {
// //     console.log("hello world");
// // }

// // function hello2() {
// //     console.log("hello class");
    
// // }

// // function call(hi) {
// //     hi();
// // }

// // console.log(call(hello));
// // console.log(call(hello2));

// // arrays - find
// var findCallback = (item) => {
//     return item === 'Banana';
// }
// function myFind(findCallback) {
//     for(var i = 0; i < fruits.length; i++) {
//         if(findCallback(fruits[i])) {
//             return fruits[i];
//         }
//     }
// }

// // var x = fruits.find(findCallback);
// var y = myFind(findCallback);
// console.log(y);


// //number
// var numbers = [1, 3, 5, 7, 9];
// numbers.forEach(item => {
//     console.log(item)
// })
// var checkPrime = (item) => {
//     var count = 0;
//     for(var i = 2; i < item-1; i++) {
//         if(item % i === 0)
//         count++;
//     }
// }

// var x = (checkPrime) => {
//     if(count == 1) {
//         return true;
//     }
//     return flase
// }
// var y = numbers.find(checkPrime);
// console.log(y)

var x = [1, 3, 4, 6]
var a = x.splice(3, 0, 5);
console.log(x);




