/* let fruitJuice = function(orange, mango){
    return `This orange juice is made up of ${orange} oranges and ${mango} mango`;
}
console.log(fruitJuice(5, 0));

// arrow function
let smoothie = (mango, orange, waterMelon) => `This smoothie contains the following: ${mango}% mango, ${orange}% orange, ${waterMelon}% waterMelon`;

console.log(smoothie(3, 5, 3))
console.log(smoothie(1.2, 3, 10))
 */


function fruitCutter(fruit){
    return fruit / 8;
}
const fruitBlend = function (orange, watermelon){
    const orangePiece = fruitCutter(orange);
    const melonPiece = fruitCutter(watermelon);

   return  ` Juice with ${orange} pieces of oranges with ${orangePiece} sizes and ${watermelon} pieces of watermelons with ${melonPiece} sizes`;
    

}
console.log(fruitBlend(10, 15))

const ageCal = function (year){
    return 2023 - year;
}
const yearUntilRetirement = function (birthYear, firstName){
    const age = ageCal(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
       
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    }else{
        return -1;
    }
}
console.log(yearUntilRetirement(1970, 'John'));







const ageCalculator = function (birthYear) { 
    return 2023 - birthYear;
 }

const yearArr = [1990, 1991, 1992, 1993, 1994, 1995, 1996];
console.log(yearArr.length)

const age1 = ageCalculator(yearArr[0]);
const age2 = ageCalculator(yearArr[1]);
const age3 = ageCalculator(yearArr[yearArr.length-1]);

const ages = [age1, age2, age3];
console.log(ages);

yearArr[0] = 2000
console.log(yearArr)

yearArr.push(2001)
console.log(yearArr)
yearArr.unshift(2010);
console.log(yearArr);
yearArr.pop()
console.log(yearArr)
yearArr.shift()
console.log(yearArr)

/* loop through the array and print out the values in an array  */
/* let agesArr = []
for(i = 0; i < yearArr.length; i++){
    // agesArr.append()
    let ages = ageCalculator(yearArr[i]);
    agesArr.append(ages);
    console.log(agesArr)
} */

