/* Switch variable scope is block scope. Example follows... */

let street_number = 22;

//problem
/*switch(street_number){
    case 44:
        let house_number = 44;
    case 22:
        let house_number=11; // identifier already declared error
}*/

//Fix
switch(street_number){
    case 44:{
        let house_number = 44;
    }
    case 22:
        let house_number=11; // No error
        console.log(house_number);

    }