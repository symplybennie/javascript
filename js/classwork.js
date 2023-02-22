/* var username = prompt('please enter your name: ');
// alert(username + ' Good Morning, How are you doing');

console.log(username + ' Good Morning, How are you doing'); */

// an app that gives admission to students based on their age
var username = prompt('Enter your name: ');   //step 1: input for getting the username
var age = prompt('Enter your age: ');         //step 2: input for getting the users age
age = parseInt(age);              //step 3: typecasting the users age to int


alert('Welcome ' + username + ' Please Go to the Registrar or admission Board for your admission processes' );  //step 4: welcoming the user

if (age > 18 ){  //step 5: condition to check if the user is above 18
   document.write('You are  not eligible to get admission in Medicine and Engineering department');
}else if (age > 25){    //step 6: condition to check if the user is above 25
    document.write('You are not eligible to get admission in computer science department');
}else if (age > 30){    //step 7: condition to check if the user is above 30
    document.write('You are not eligible to get admission in Economics department');
}else{         //step 8: if the use ris below 18, then user is not eligible for admission
    document.write('You are not yet up eligible for a university degree')
}