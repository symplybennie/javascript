function formSubmit(){
    // alert('Testing');

    let userName = 'benedicta';
    let password = 123456;

    let userLength = 9;
    let passLength = 6;

    

    let myName = document.getElementById('name').value;
    // let myEmail = document.getElementById('email').value;
    let myPassword = document.getElementById('password').value;

    let nameLengthCheck = myName.length;
    let passLengthCheck = myPassword.length;

    myPassword = Number(myPassword);

    let errorMessage = document.getElementsByClassName('error-message');



    // let submit = document.getElementById('submit');

    if((userLength != nameLengthCheck ) && (passLength != passLengthCheck)){
       
       
        for(i = 0; i < errorMessage.length; i++){
            errorMessage[i].style.display = 'block';
        }
        // return true;

      

    }else{
        // errorMessage.style.display = 'block';
        // alert('invalid details');
        // errorMessage.style.display = 'block';
        
        function display(){
            

            for(i = 0; i < errorMessage.length; i++){
                errorMessage[i].style.display = null;
            }

            // alert('successfully logged in');


            if((userName === myName) && (password === myPassword)){
                // location.replace('home.html');
                // alert('successfully logged in');
                // window.location('https://www.google.com')
                alert('successfully logged in');
                
                }else{
                // location.href='error.html';
                // alert('invalid details');
                // window.location('https://www.facebook.com')
                // alert('invalid details');
                /* for(i = 0; i < errorMessage.length; i++){
                    errorMessage[i].style.display = 'block';
                } */
                alert('incorrect username and password');
            }

        }

        display();
        

          
    }

    return false;

    /* // document.write(myName + ' ' + myEmail).innerHTML;
    alert(myName + ' ' + myEmail); */



}
