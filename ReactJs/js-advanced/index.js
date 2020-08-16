// let x = true && 5 * 3;
// let x2 = false && 5 * 3;
// let x3 = false && 5 * 3 && false;
// let x4 = true && 'hello' && 5 * 3;
// console.log(x);
// console.log(x2);
// console.log(x3);
// console.log(x4);


//review map

let students = [
    {firstName: "An", lastName: "Nguyen Truong"},
    {firstName: "Tung", lastName: "Vu Thanh"}
]

let newStudents = students.map(item => {
    return {fullName = item.lastName + item.firstName}
})

console.log(newStudents);
