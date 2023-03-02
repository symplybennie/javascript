//array of users names
/* let students = ['Andrew', 'Joshua', 'Peter', 'Caleb', 'David', 'Emma', 'Abdul', 'Yusuf', 'Mohammed', 'Friday']
let evenNum = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22] */

//looping through the users array
/* for (i = 0; i < students.length; i++) {
    
    
    //printing induvudual user names, untill the condition is met
    // if(i == 3) break;
    // if( (i==3) || (i == 7)) continue;    // to jump index nums in 3, and 7
    // if( i % 2 == 0) continue;            // to print odd numbers
    // if( i % 2 == 1) continue;               // to print even numbers
    // console.log(`${students[i]} your num is ${evennum}`);
    
}  */
// students.slice(0, 4)
// students.forEach((x, i) => console.log(x, i))
/* students.forEach((x, i )=> {
    return x, i
})
console.log(num) */

// students.forEach((x, i) => console.log(x))

/* let newList = students[students.length-7]
for (i = 0; i < newList.length; i++) {
    console.log(newList)
    
}
 */
// let newvalue = students.map(value => value*2)

// Assigning an even num value to the array names
let students = ['Andrew', 'Joshua', 'Peter', 'Caleb', 'David', 'Emma', 'Abdul', 'Yusuf', 'Mohammed', 'Friday']
let evenNum = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]


let value = function (){
    for (i = 0; i < students.length; i++) {
        return `${students[i]}`
    }
}
let index = function (){
    for (b = 0; b < evenNum.length; b++) {
        return `${evenNum[b]}`
        
    }
}
console.log(``)



























