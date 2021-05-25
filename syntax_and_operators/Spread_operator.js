/*
The syntax uses the Ellipsis symbol (...)
Expand 'iterable'such as string or array into an array
for passing multiple parameters to method.
Always on right side of an equal sign.
*/

let product_name = 'GE033-93JJ98-3';

let hey = [...product_name]; //splits the above string to an array

console.log(hey);


//copy an array

let arr = [23, 44, 53, 44, 22, 43];
let arr2 = [...arr]; //let arr2=arr.slice(0);

console.log(arr2);
//change something in arr2 won't effect the original arr array.
//but if we copy object and modify something then original array will be modified.

//objects are copied by reference

let products = [
    {
        product_id: 1,
        product_name: 'polo'
    }, {
        product_id: 2,
        product_name: 'dolo'
    }
];


products_copy = [...products];

console.log(products);
console.log(products_copy);

//now lets try and modify products_copy and see original object also gets modified
products_copy[1].product_name = 'polo 2.0';

console.log(products);
console.log(products_copy);
