let someValues = [8, 39, 33];

function returnTotal(a, b, c) {
    console.log(a + b + c);
}

returnTotal(someValues); //we have a problem here.
returnTotal(...someValues);

let juneSales = Array.of(1000, 2000, 3487);
let julySales = Array.of(324, 78348, 3673);
let augustSales = Array.of(66383, 2000, 5000);


let totalSales = Array.of(...juneSales, ...julySales, ...augustSales);

console.log(total);