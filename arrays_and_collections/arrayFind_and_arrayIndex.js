let juneSales = Array.of(1000, 2000, 3487);
let julySales = Array.of(324, 78348, 3973);
let augustSales = Array.of(63, 200, 5000);


let totalSales = Array.of(...juneSales, ...julySales, ...augustSales);
console.log(totalSales);

//find elements having a values less than 1000
console.log(totalSales.find(element => element === 3973)); //gets the first value satisfyin the condition
console.log(totalSales.findIndex(element => element > 1000));