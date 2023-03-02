

// let newList = students.join()

// let lowerCase = newList[0]
// console.log(newList)
// console.log(lowerCase)
/* 
convert the first alphabet in an array of names to lowercase
1: create the array
2: loop through the array and get each value
3: loop through the value and convert the first letter to uppercase
4: convert the first alphabet of the value to lowercase
*/

// 2: loop through the array and get each value
// for (i = 0; i < students.length; i++) {
//     // console.log(students[i])
//     // 3: loop through the value and convert the first letter to uppercase
//     let studentName = students[i];
//     console.log(studentName)

//     for (i = 0; i < a.length; i++) {
//         const element = array[i];
        
//     }
    
    
// }
let students = ['andrew', 'joshua', 'peter', 'caleb', 'david', 'emma', 'abdul', 'yusuf', 'mohammed', 'friday']
function arrayTransform(students){
    return students.map((student) =>{
        const capitalizeFirst = student.charAt(0).toUpperCase();
        const reset = student.slice(1).toLowerCase();
        return capitalizeFirst + reset

    } )
}
console.log(arrayTransform(students));