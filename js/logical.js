/* 
AND - 
NOT
OR
*/

/* CREATE TWO VARIABLES,  */
// var price = parseInt(prompt("Enter a price value: "));
// var product = prompt('Enter a product name: ');

// var defaultPrice = 100;
// var defaultProduct = 'mango';


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
/* if (price != defaultPrice){
    alert('The price is not equal to the set price');
}else{
    alert('Price is equal to the set pricek')
}
 */

//SWITCH OPERATOR
/* var num = 5;
switch(num){
    case 1:
        alert(num + ' is zero');
        break;
    case 2:
        alert(num + ' is two');
        break;
    case 3:
        alert(num + ' is three');
        break;
    case 4:
        alert(num + ' is four');
        break;
    case 6:
        alert(num + ' is five');
        break;
    default:
        alert('The value does not exist')
        break;
} */


var course = prompt('Enter your course name: ');
switch(course){
    case 'javascript':
        alert('Your course is ' + course);
        break;
    case 'python':
        alert('Your course is ' + course);
        break;
    case 'php':
        alert('Your course is ' + course);
        break;
    case 'nodejs':
        alert('Your course is ' + course);
    default:
        alert('Your ' + course + ' is not on the list');
        break;
}



