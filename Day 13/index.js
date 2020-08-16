// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     go = () => {
//         console.log(this.name + " is going to libary");     
//     }
//     eat = () => {
//         console.log(this.name + " is eating") 
//     }
// }

// var quy = new Person("Quy");
// var dat = new Person("Dat");
// quy.go();
// quy.eat();

// var quy = quy.eat;
// quy();
// console.log(quy);

// class Teacher extends Person {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
// }

// class Doctor extends Person {
//     constructor(name, degree) {
//         super(name);
//         this.degree = degree;
//     }
// }

// var teacher = new Teacher("Huan", 30);
// var doctor = new Doctor("Hung", "dentist");
// console.log(teacher);



document.body.style.backgroundColor = "lightblue";
document.getElementById("js-btn-click").onclick = onClick;
var btnStart = document.getElementById("js-start");
var btnStop = document.getElementById("js-stop");
var oclock = document.getElementById("js-oclock");
var times;
btnStart.onclick = function() {
    times = setInterval(() => {
        var curentDate = new Date();
        oclock.innerText = curentDate.toLocaleTimeString();   
    }, 1000);
}


btnStop.onclick = function() {
    clearInterval(times);
}
function onClick(){
    var textInput = document.getElementById("js-input-text");
    var value = textInput.value;
    document.body.style.backgroundColor = value;
}

var userName = document.getElementById("username");
var passWord = document.getElementById("password");
var btnSubmit = document.getElementById("btnSubmit");

btnSubmit.onclick = function(event){
    var username1 = userName.value
    var error = document.getElementById("error");
    if(!username1) {
        error.innerText = "Please enter username";
        event.preventDefault();
    }
    else if(username1.length < 6) {
        error.innerText = "So short username";
        event.preventDefault();
    }
    else if(username1.indexOf("T3H_") != 0){
        error.innerText = "Thiếu T3H, zui lòng nhập lại";
    } else
    {error.innerText = "";}
}



// var data = prompt("Enter value", 0);
// var x = document.getElementById("abc");
// x.innerText = data;