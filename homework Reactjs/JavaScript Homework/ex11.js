//Dem so khoang trang trong chuoi
var countString = (str) => {
    var count = 0;
    for(i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            count++;
        }
    }
    console.log(count);  
}
countString("Hello world");
