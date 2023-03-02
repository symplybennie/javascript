/* 
1: use arrow function to create retirement calculator
tips: age in service = 65 yrs

2: create a function that checks numbers if it is odd or even

*/
// Assignment 1


/* 
let retireCalc = yearofBirth => {
    // if (age < 65){
    //     return `You are not retired yet`;
    // }else{
    //     return `You are retired`;
    // } 
    let age = 2023 - yearofBirth
    let retirement = 65 - age
    return retirement
}
console.log(retireCalc(1989));


// Assigment 2
let numCheck = function (num){
    if(num % 2 ==0){
        return 'Your number is even';
    }else{
        return 'Your number is odd';
    }
}
console.log(numCheck(26)); 

 */


// solutions
// Assignment 1

let age = yearOfBirth => 2023 - yearOfBirth

let yearRemainUntillRetirement = yearOfBirth => {
    
    // let age = 2023 - yearOfBirth

    let retirement = 65 - age(2000)

    return retirement
}

console.log(`Years remaining untill retirement ${yearRemainUntillRetirement(2000)}`)


//Assignment 2
// sol 1
let oddEven = num => num % 2 == 0 ? 'Even' : 'odd'

console.log(oddEven(20))

// sol 2
let numCheck = function (num){
    if(num % 2 == 0){
        return 'Your number is even';
    }else{
        return 'Your number is odd';
    }
}
console.log(numCheck(26)); 

// a func that checks if a num is prime
let primeNum = num => num % 2 == 1 ? 'Num is Prime' : 'Num is not Prime'

console.log(primeNum(18))


































