var n = 10;
var count = 0;
for(var i = 2; i <= n; i++) {
    for(var j = 2; j < i; j++){
        if(i % j !== 0) {
            console.log(j);
        }
    }
}