const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    job: 'Developer',
    friends: ['Andy', 'Josh', 'Yusuf', 'Abdul', 'Muhammed']
};

// dot(.) notation - accessing an object using a dot
console.log(student.firstName);

/* 

john has 5 frineds and his bestfriend friend is yusuf
*/
console.log(`${student.firstName} has ${student.friends.length} friends and his bestfriend is ${student.friends[2]}`)

// bracket notation - accessing an object using bracket
console.log(student['lastName']);