let person = ['ajay', 'mathe', '9999999999', 'male']

var person_first_name = person[0];
var person_last_name = person[1];
var person_phone = person[2];
var person_gender = person[3];

//the above code can be simply rewritten as below

var [person_first_name, person_last_name, person_phone, person_gender] = person;

console.log(`${person_first_name} ${person_last_name} ${person_phone} ${person_gender}`);