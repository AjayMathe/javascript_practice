/* Explains how to create a custom error object */

//Exception handling


function DivisionFun() {

    try {

        x / 10;
        //we know this will error as x is never declared.
    }
    catch (error) {
        //here we can define a new throw error object with custom error name.
        throw `custom exception message: ${error.message}`;

    }
}

DivisionFun();