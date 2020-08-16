//lay id Facebook

var idFacebook = (link) => {
    var count = 0,
        result;
    for(i = 0; i < link.length; i++) {
        if(link[i] === "/") {
            count++;
            if(count === 3) {
               result = link.slice(i + 1, link.length);
            }
        }
        
    }
    console.log(result);
}
idFacebook("https://facebook.com/datduong431998");