/* for (i=0; i <= 100; i++){
    // console.log(i);
    if (i % 3 == 0){
        console.log('Wuse')
    }else if(i % 5 == 0){
        console.log('FCT')
    }else if((i % 3 == 0) && (i % 5 == 0)){
        console.log('Wuse in FCT')
    }else{
        console.log(i)
    }
} */


for (i=0; i <= 100; i++){
    // console.log(i);
    if ((i % 3 == 0) && (i % 5 == 0)){
         console.log('Wuse in FCT')
    }else if(i % 5 == 0){
        console.log('FCT')
    }else if(i % 3 == 0){
       console.log('Wuse')
    }else{
        console.log(i)
    }
}

/* 
var states = {
    5 : 'Abuja',
    3 : 'FCT', 
    1 : ' Edo
}
var input = parseInt(prompt('Enter a num between 1, 3, and 5));

if (input in states){
    alert('the corresponding value is' + states[input]);
}eslse {
    alert('Invalid Input. Please enter a number between 1, 3, and 5)
}

*/





