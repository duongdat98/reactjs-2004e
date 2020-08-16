//in ra bang cuu chuong

var result =0;
var i = 2;
while(i < 10) {
    for(var j = 1; j <= 10; j++) {
        result = i * j;
        if(j === 10) {
            console.log(i, "*", j, "=", result, "\n")
        }
        else
        console.log(i, "*", j, "=", result);
    }
    i++;
}