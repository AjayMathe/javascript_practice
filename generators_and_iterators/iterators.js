const arr = [4, 66, 32, 44];

let iterableObj = arr[Symbol.iterator]();

console.log(iterableObj.next());
console.log(iterableObj.next());
console.log(iterableObj.next());
console.log(iterableObj.next());
console.log(iterableObj.next());

//creating iterable on map object

let mapObj = new Map();

mapObj.set('key 1', 'value 1');
mapObj.set('key 2', 'value 2');
mapObj.set('key 3', 'value 3');
mapObj.set('key 4', 'value 4');

let mapIterable = mapObj[Symbol.iterator]();

console.log(mapIterable.next().value);
console.log(mapIterable.next().value);
console.log(mapIterable.next().value);
console.log(mapIterable.next().value);
console.log(mapIterable.next().value); //undifined

//for loop to iterate over a map

for (let [key, value] of mapObj) {
    console.log(`${key} and ${value}`);
};

