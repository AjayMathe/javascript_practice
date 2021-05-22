/* Switch case match will be strict case. Example follows */

let consumer_id = "225" // a string value


switch(consumer_id){
    case 225:
        console.log("this will not print");
        break;
    case "225":
        console.log(`Consumer id is ${consumer_id}`);
        break;
    default :
    console.log("default");
}
