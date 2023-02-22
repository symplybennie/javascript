// A simple login app
// steps
/* 
step 1: set the default details for login i.e the username and password
step 2: alert the user to login, so as to access the system
step 3: get the user name and password
step 4: check the conditions and give user access if details are correct

*/


alert('Please login to have access to the class!')   //alert the user to login, so as to access the system

var userName = prompt('Please enter the Username: ');  //get the user name 
var userPassword = prompt('Please enter the password: ');   //get the password

var loginName = 'jsclass';       //set the default
var loginPassword = 'learning102';

if ((userName === loginName ) && (userPassword == loginPassword)){
    alert('You have access to the system');
}else{
    alert('Invalid details. Enter the correct Username and Password');
}