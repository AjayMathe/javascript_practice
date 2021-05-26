//object.keys gives an array of indexes in an  object

let vehical = {
    type: 'car',
    petrol: true,
    registration_number: 'TS8877',
    isPertrol: function () {
        return this.registration_number ? true : false
    }
}

console.log(Object.keys(vehical));

//object.assign is used to copy an object in to other object
let vehical2 = {};
Object.assign(vehical2, vehical);

console.log(Object.keys(vehical2));
onsole.log(Object.is(vehical, vehical2));//they both are not equal


let vehical3 = {
    type: 'car',
    petrol: true,
    registration_number: 'TS8877',
    isPertrol: function () {
        return this.registration_number ? true : false
    }
}

console.log(Object.is(vehical, vehical3));
////returns false. Its the memory addresses that is compared but not the object values