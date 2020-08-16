// var rename = (name) => {
//     // name = name.toLowerCase();
//     // console.log(name.charAt(0).toUpperCase() + name.slice(1));
//     for(var i = 0; i <= rename.length; i++) {
//         if(name(i) === " ") {
//             name(i+1) = name(i+1).toUpperCase();
//         }
//     }
//     console.log(name);
    
// }
// rename("NguyeN THi tHu hA");

//Chuong trinh chuan hoa ten
function rename(name) { 
    name = name.toLowerCase().split(" ");
    
    // console.log(str);
    var renamed = " ";
    
    for(var i = 0; i < name.length; i++) {
        
        var arr = name[i] + " ";
        arr = arr.charAt(0).toUpperCase() + arr.slice(1);   
        renamed = renamed.concat("", arr);
    }
    console.log(renamed);
      
  } 
rename("NguyeN THi tHu hA");