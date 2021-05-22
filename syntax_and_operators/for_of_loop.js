/* for of loop can be used to iterate over an iterable object(an array)
two advantages over for in :
1) It visits indicies of an array in numeric(ascending) order.
2) indices of an arrays are not converted to strings. so you can do arithmatic
*/


let denominations = [10, 20, 50, 100, 500, 2000];

for (i of denominations) {
    console.log(i);
}

let street_name = '1234 Balapur'

for (a in street_name) {
    console.log(a);
    if (a == 4) {  // here continue has no effect. It prints all indices
        continue;
    }

}
