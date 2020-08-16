var dat = {
    firstName: "Dat",
    lastName: "Duong Tien",
    age: 22,
    mark: 10
}

var quy = {
    firstName: "Quy",
    lastName: "Le Xuan",
    age: 22,
    mark: 11
}
var students = [
    dat, 
    quy,
    {
        name: "Thai Bao",
        age: 18,
        mark: 8
    },
    {
        name: "hihih",
        age: 20,
        mark: 9
    }
]

var find = students.find((item) => {
    return item.name === "Thai Bao"
})
console.log(find);

//filter, map, reduce

console.log(students.filter((item) => {
    return item.age >= 22;
}));

var mapStudents = students.map((student) => {
    return student.mark * 2;
})

var studentRestructure = students.map((student) => {
    return {
        name: student.lastName + student.firstName
    }
})
console.log(studentRestructure);

console.log(mapStudents);


var numbers = [1, 2, 3, 4, 10 ,5 ,6, 7];
var names = ["dat", "quy", "khang"];

var result = numbers.reduce((a, b) => {
    if(b % 2 === 0){
        a.push(b);
        return a;
    }
    return a
}, [])
console.log(result);

//sort

var x = numbers.sort((a, b) => {
    return a - b;
}) 
console.log(names.sort((a, b) => {
    return a;
}));

console.log(x);

//object

for(var student of students) {
    console.log(student);
    
}


