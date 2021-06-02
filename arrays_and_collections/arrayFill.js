let juneSales = Array.of(1000, 2000, 3487);
let julySales = Array.of(324, 78348, 3973);
let augustSales = Array.of(63, 200, 5000);


let totalSales = Array.of(...juneSales, ...julySales, ...augustSales);

totalSales.fill(0, 3); //fill zero's starting from index 3
console.log(totalSales);

totalSales.fill(1, 4, 6); //fill one's starting from index 4 to index 6
console.log(totalSales);

totalSales.fill(0); //fills  the original array with 0's
console.log(totalSales);