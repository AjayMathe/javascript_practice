
let calculateSavings = (totalIncome, expense) => {
    return totalIncome - expense
}

console.log(calculateSavings(500000, 220000));

//if there are no parameters,  then arrow function can be
//written in a single line of code

let welcomeMessage = () => {
    console.log("arrow function with no params");
}

welcomeMessage();