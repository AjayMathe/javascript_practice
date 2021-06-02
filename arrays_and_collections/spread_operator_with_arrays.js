let someValues = [8, 39, 33];

function returnTotal(a, b, c) {
    console.log(a + b + c);
}

returnTotal(someValues); //we have a problem here.
returnTotal(...someValues);