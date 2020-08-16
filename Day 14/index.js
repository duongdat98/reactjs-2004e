//try catch

function task() {
    try {
        console.log(x);
        let x = 5; 
        throw "my exception"
    } catch(e) {
        console.log(e);      
    }
}
task();
console.log("hi");


//Javascript advanced

//passing agruement to a function

//closure

function plus(x) {
    return function(y) {
       return x+y;
    }

}
var hihi = plus(7);
var increase = plus(5);
console.log(increase(2));
