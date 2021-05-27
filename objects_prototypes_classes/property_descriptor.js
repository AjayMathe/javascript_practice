'use strict';
let vehical = {
    types: 'car',
    petrol: true,
    registration_number: 'TS8877',
    isPertrol: function () {
        return this.registration_number ? true : false
    }
}

console.log(Object.getOwnPropertyDescriptor(vehical, 'types'));

//changing the property descriptor to make vehical type non-writable
Object.defineProperty(vehical, 'types', { writable: false });
console.log(Object.getOwnPropertyDescriptor(vehical, "types"));

vehical.types = 'bus'; //cannot modify this attribute now.
