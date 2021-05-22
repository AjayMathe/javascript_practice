/* Logical operator short circuiting */

//if the first part is false, 2nd part will never be evaluated.
let result = 2 > 3 && 4 > 3;

//each expression is evaluated until one of them is true.
let result_or = 44 > 11 || 4 < 3

console.log(result);
console.log(result_or);