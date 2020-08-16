// function Student(id, name, className) {
//     this.name = name;
//     this.id = id;
//     this.className = className
//     this.exam = function() {
//         console.log(this.name + " exam....");
//     }
// };

// var quy = new Student(1, "Quy", "Reactjs");
// quy.exam();
// var quyExam = quy.exam.bind(quy);
// quyExam();

//introduce bind();

var camera = function(mathStudying) {
    mathStudying()
}

var student = {
    name: "Minh",
    study: function() {
        var mathStudying = function() {
        console.log(this.name + "'s Studying Math........");
        }.bind(student);
        // mathStudying()
        // camera(mathStudying);
    }
}

student.study();

//callback

var cookingSoup = () => {
    console.log("Done!!!");             
}

var cookingRice = () => {
    console.log("Done cooking rice....");
    console.log("Starting cooking soup.....");   
    var minh = setTimeout(cookingSoup, 3000)         
}

var thinking = () => {
    console.log("Done thinking....");
    console.log("Starting cooking rice....");
    var dat = setTimeout(cookingRice, 2000);   
}

function doTask() {
    console.log("Strarting do tasks....");
    var quy = setTimeout(thinking, 1000);
}

// doTask();
// console.log("continue");


/*Promise*/

var goodStudent = true;
var goodBoy = true;
var buyCarCallback = (resolve, reject) => {
    setTimeout(() => {
        if(goodStudent){
        console.log("Buying car...."); 
        resolve({name: "Lambogini", weight: 850}) 
        }
        else {
            reject({reason: "Bad student"})
        } 
    }, 3000)   
};

var buyCar = new Promise(buyCarCallback);

var hangOutCallback = (resolve, reject) => {
    setTimeout(() => {
        if(goodBoy) {
            resolve({status: true})
        }
        else {
            reject({status: false})
        }
    }, 2000)
}

buyCar.then((car) => {
    console.log("Driving car...." + car.name + " weight " + car.weight); 
    //have a girlfriend  
    return new Promise(hangOutCallback);

}).then((hangOutStatus) => {
    if(hangOutStatus.status){
    console.log("Done");
    }  
}).catch((result) => {
    console.log("dont buy car because " + result.reason);  
})

//async, await

async function myLife() {
    var result = await new Promise(buyCarCallback)
    console.log("result: ", result);
    var status = await new Promise(hangOutCallback)
    console.log("Status", status);
}

myLife();


// class Student {
//     constructor(id, name, age, className) {
//         this.id = id;
//         this.name = name;
//         this.className = name;
//     }
//     study = () => {
//         console.log(this.name + " is studying....");
        
//     }
// }

// var quy = new Student(1, "Xuan Quy", 22, "reactjs");
// var dat = new Student(2, "Duong Dat", 22, "reactjs");
// console.log(quy);
// console.log(dat);
// quy.study();
// dat.study();

