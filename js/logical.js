/* 
AND - 
NOT
OR
*/

/* CREATE TWO VARIABLES,  */
var price = parseInt(prompt("Enter a price value: "));
var product = prompt('Enter a product name: ');

var defaultPrice = 100;
var defaultProduct = 'mango';


// AND OPERATOR
/* if ((price === defaultPrice) && (product === defaultProduct)){
    alert('You are logged in');
}else{
    alert('Check your login credentials or sign up');
} */

// OR OPERATOR
/* if ((price === defaultPrice) || (product === defaultProduct)){
    alert('You are logged in');
}else{
    alert('Check your login credentials or sign up');
} */

//NOT OPERATOR
if (price != defaultPrice){
    alert('The price is not equal to the set price');
}else{
    alert('Price is equal to the set pricek')
}