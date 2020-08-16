//kiem tra xem so do co phai la so doi xung hay khong?
var n = 1234321;
var reverseNumber = (n) => {
    n = n + "";
    return n.split("").reverse().join("");
}
var b = (Number(reverseNumber(n)));
 if(n === b) {
     console.log("YES");
 }
 else console.log("NO");
 
    
    