
// function declaration
function learning(){
    console.log('We are learning Javascript')
}
learning();

console.log(`Your age is ${ageClass(1999)}`)
// to calculate basic age
function ageClass(yearofBirth){
    return 2023 - yearofBirth;

}



// function expression
let ageCall = function(yearofBirth){
    return 2023 - yearofBirth;
}
console.log(ageCall(1999))

// arrow function
let ageCal3 = yearBirth => 2023 - yearBirth;
console.log(ageCal3(1999))

let fruitJuice = function(orange, mango){
    return `This orange juice is made up of ${orange} oranges and ${mango} mango`;
}
console.log(fruitJuice(5, 0));

// arrow function
let smoothie = (mango, orange, waterMelon) => `This smoothie contains the following: ${mango}% mango, ${orange}% orange, ${waterMelon}% waterMelon`;

console.log(smoothie(3, 5, 3))
console.log(smoothie(1.2, 3, 10))


