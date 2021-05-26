//shorthand version of method declaration in JS

//original version
let vehical = {
    type: 'car',
    petrol: true,
    registration_number: 'TS8877',
    isPertrol: function () {
        return this.registration_number ? true : false
    }
}

console.log(vehical.isPertrol());

//shorthand version
let vehical2 = {
    type: 'car',
    petrol: true,
    registration_number: 'TS8877',
    isPertrol() {
        return this.registration_number ? true : false
    }
}
console.log(vehical2.isPertrol());