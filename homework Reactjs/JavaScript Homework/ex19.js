
function sum(num) {
    if(num == 0) return 0;
    else return sum(num -1) + num;
}
console.log(sum(10));


