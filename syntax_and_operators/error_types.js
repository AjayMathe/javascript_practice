/* Various error types in JS
ReferenceError
RangeError
TypeError
URIError
SyntaxError
EvalError(backward compatibility)
*/

//reference error
try {
    x + 10;
} catch (err) {
    handleError(err);
}

//Range error
try {
    let a = 2.12788;
    console.log(a.toPrecision(223)); // only 1-100 allowed here
} catch (err) {
    handleError(err);
}

//Type error
try {
    let a = 5;
    a.toUpperCase();
} catch (err) {
    handleError(err);
}

//URI error
try {
    decodeURI('%');
} catch (err) {
    handleError(err);
}

//Syntax error
try {
    eval('hoo bar');
} catch (err) {
    handleError(err);
}

function handleError(error) {
    switch (error.name) {
        case 'ReferenceError':
            console.log(`Reference error : ${error.message}`);
            break;
        case 'RangeError':
            console.log(`Range Error : ${error.message}`);
            console.log(`Range Error : ${error.name}`);
            break;
        case 'TypeError':
            console.log(`Type error : ${error.message}`);
            break;
        case 'URIError':
            console.log(`URI error : ${error.message}`);
            break;
        case 'SyntaxError':
            console.log(`Syntax error : ${error.message}`);
            break;
        default:
            console.log(`default error ${error.message}`);
    }
}