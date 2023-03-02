/* 
function func_name(){
    output
}
func_name()

*/

// function without parameter

/* function add() {
    console.log(7 + 3);
}
add(); */


// function with parameter

function student(course, fee){
    console.log(`${course} is ${fee}`)
}
student('Js', 200)

//function with return
function learning(course, school){
    return `${course} is available @ ${school}`
}

var result = learning('JS', 'G-skills')
// console.log(result );
console.log(result + ' at an available price')

// function scope


//function scope
/* 
var
let
const
*/



