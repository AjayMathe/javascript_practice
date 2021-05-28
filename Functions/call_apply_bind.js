let person1 = { name: 'ajay', age: 27 }
let person2 = { name: 'john', age: 33 }

let displayDetails = function () {
    console.log(`Name is ${this.name} and age is ${this.age}`)
}

displayDetails.call(person1);
displayDetails.call(person2);

//call and apply both are same except call expects individual arguments
//while apply expects an array

let person3 = { name: 'ajay', age: 27 }
let person4 = { name: 'john', age: 33 }

let displayDetails2 = function () {
    console.log(`Name is ${this.name} and age is ${this.age}`)
}

displayDetails2.apply([person3, 'dummy value']); //apply expects an array
displayDetails2.apply([person4, 'dummy value']);


let person5 = {
    name: 'Mary',
    getName: function () {
        return this.name;
    }
}

let person6 = { name: 'John' };
let getNameCopy = person5.getName.bind(person6);//new copy of a function is returned
console.log(getNameCopy());