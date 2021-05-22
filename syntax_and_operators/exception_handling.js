/*

try {
    some code that could fail.
}
catch(error) {
    do something with the error.
}
finally{
    This code always runs.
}
*/

try {
    x / 10;
    console.log("this code will never execute."); //because there is an error in the above line.
}
catch (er) {
    console.log(er.message);
}
finally {
    console.log("this code will always run");
}