// introduction to objects
let x = {}
console.log(typeof x)

let student = {
    Name : 'John',
    Age : 20,
    Course : 'JS'
}
// console.log(student.Name)

// 2 ways to access an object

// console.log(`${student.Name} is my good friend, is ${student.Age} years old`)                //1: [. dot, notation]
console.log(`${student['Name']} is my good friend, is ${student['Age']} years old`)             //2:  [] square bracket 
