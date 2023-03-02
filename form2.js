function formSubmit(){
    
    /* step 1: setting the ids into a variable */
    let userName = document.getElementById('name');
    let userPassword = document.getElementById('password');
    let textArea = document.getElementById('text-area');

    /* step 2: collecting the input from the form */
    let nameValue = userName.value;
    let passwordValue = userPassword.value;
    let textAreaValue = textArea.value;

    /* step 3: getting the length of the input */
    let userNameLength = nameValue.length;
    let userPasswordLength = passwordValue.length;

    /* step 4: setting a limit */
    let nameLength = passLength = 5;

    // let textAreaLength = ' ';

    /* step 5; checking the input length and setting the border to red if not true */
    if(userNameLength < nameLength){
        userName.style.border = '2px solid red';
    }

    if(userPasswordLength < passLength){
        userPassword.style.border = '2px solid red';
    }

    if(textAreaValue == ""){
        textArea.style.border = '2px solid red';
    }

    return false;
}