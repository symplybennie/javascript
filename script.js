/* 
id selector

let title = document.getElementById('h1').innerHTML='My Heading';
console.log(title); */

/* 
tag selector

let paragrapgh = document.getElementsByTagName('p');
paragrapgh[-1].style.backgroundColor = 'pink';

console.log(paragrapgh.length);

for(i = 0; i <= paragrapgh.length; i++){
    paragrapgh[i].style.backgroundColor = 'pink';
} */


/* 
Printing array in reverse order

let courses = ['python', 'js', 'webdesign', 'php', 'nodejs'];

for(i = courses.length; i>=0; i--){
    console.log(courses[i])
} */

/* class selector */
/* let new_p = document.getElementsByClassName('p-class');
new_p[1].style.backgroundColor = 'green'; */

/* query selector
query selector - selects the first item in the list
query selector all - selects all the items in the list
*/

let new_tag = document.querySelector('p');

new_tag.style.backgroundColor = 'blue';

let an_tag = document.querySelectorAll('p');

an_tag[1].style.color = 'green';

for(i = 0; i<an_tag.length; i++){
    an_tag[i].style.color = 'yellow';
}

