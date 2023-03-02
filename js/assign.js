// a program that offers admission based on age

// step 1: get input from the user
var userName = prompt('Pleae Enter Your Name: ');
var userAge  = parseInt(prompt('Please Enter Your Age: '));

document.write('Hello '+ userName + ' Welcome to the Admission Portal' + "<br>");

// if ((userAge >= 15) && (userAge <=18)){
//     document.write('You are Eligible to get admission into an Engineering Course');
// }else if((userAge >= 19) && (userAge <=21)){
//     document.write('You are Eligible to get admission into a Computer Science Course');
// }else if((userAge >= 22) && (userAge <=24)){
//     document.write('You are Eligible to get admission into an Economics Course');
// }else if((userAge >= 25) && (userAge <=27)){
//     document.write('You are Eligible to get admission into a Mathematics Course');
// }else if (userAge > 27) {
//     document.write('Contact Admin');
// }else{
//     document.write('Contact Admin ');
// }


switch(true){
    case ((userAge >= 15) && (userAge <=18)):
        document.write('You are Eligible to get admission into an Engineering Course');
        break;
    case ((userAge >= 19) && (userAge <=21)) :
        document.write('You are Eligible to get admission into a Computer Science Course');
        break;
    case ((userAge >= 22) && (userAge <=24)):
        document.write('You are Eligible to get admission into an Economics Course');
        break;
    case ((userAge >= 25) && (userAge <=27)):
        document.write('You are Eligible to get admission into a Mathematics Course');
        break;
    case (userAge > 27):
        document.write('Contact Admin');
        break;
    default:
        document.write('Contact Admin ');
        break;
}

