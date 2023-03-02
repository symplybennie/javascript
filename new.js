function formSubmit(){

    let name = document.getElementById('name');
    let password = document.getElementById('password');
    let textArea = document.getElementById('text-area');

    let nameLength = passLength = 5;

    let nameValue = name.value;
    let passValue = password.value;
    let textAreaValue = textArea.value

    let userNameLength = nameValue.length;
    let userpasslength = passValue.length;

    if(userNameLength < nameLength){
        name.style.border='2px solid red';
    }

    if(userpasslength < passLength){
        password.style.border = '2px solid red';
    }

    if(textAreaValue == ""){
        textArea.style.border = '2px solid red';
    }

    return false;

}