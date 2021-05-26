'use strict'
let person = {
    firstName: 'ajay',
    lastName: 'mathe'
}


//Add functions to objects
let person2 = {
    firstName: 'ajay',
    lastName: 'mathe',
    isStudent: function (profession) {
        return profession.toLowerCase().includes('student') ? true : false;
    }
}

//console.log(person2);
//console.log(person2.isStudent('student'));

person2.justafunction = function () {
    console.log('additional function addition');
}
//console.log(person2);
person2.justafunction();