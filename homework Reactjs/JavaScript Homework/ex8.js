//kiem tra xem tat ca chu so la so le hay khong?

var check = (n) => {
    while(n > 0) {
        var a = n % 10;
        if(a % 2 === 0) {
            return false;
        }
        n = (n - a) / 10;
    }
    return true;
}


if(check(1354) === false) {
    console.log('NO');
}
else {console.log('YES');}

