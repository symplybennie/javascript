/* 
2 ways to declare an array
let courses = ['js', 'py']
let friends = Array()
*/

/* let courses = ['py', 'js']
let friends = Array('Web')

console.log(typeof courses)
console.log(typeof friends)
console.log(courses)
console.log(friends) */


// Array - collection of items, it can contain more than one datatypes, we have dimensional arrays

let myName = 'Joshua'
let friends = ['Andrew', 'Patrick', 'Caleb', 'David', 'Emmanuel', 'Ahmed']
friends.push('Muhammed');
// friends[0].push('Josh')
friends.unshift('joshoa');
// console.log(friends[1] + ' is my coding friend')
console.log(`${friends}`);
// console.log(isArray(friends));
console.log(Array.isArray(friends));
console.log(Array.isArray(myName));