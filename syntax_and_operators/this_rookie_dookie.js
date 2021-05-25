/*

All about `this` in javascript:

how 'this' changes
global and function scope
*/
// use strict can impact the this behaviour
// throws an undefined value. to use window directly specify instead of this keyword
'use strict'
console.log(this.toString()); //object window

//Global scope- 'this' is mapped to global/window object

console.log("Begin: global scope sample");
console.log(this.toString());
//console.log(`this === window = ${(this === window).toString()}`);
console.log("End: global scope sample");

function funScope() {
    //  console.log(this.toString()); //this line will throw an error if you use strict.
    console.log(global.toString());
}

funScope();


