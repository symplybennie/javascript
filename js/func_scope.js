var a = 2;
let c = 5;
function testing(){
    console.log(a);
    b = 3;
    const d = 5;     //cannot change 
    // console.log(c)
}
testing();
console.log('outside');
console.log(b);
console.log(c);