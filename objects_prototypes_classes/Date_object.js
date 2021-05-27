let date = new Date(2021, 03, 04); //yyyy mm dd
//notice 03 gives April in output?  because month in Date object is '0' index based
console.log(date);


let date2 = new Date(2021, 03, 04, 9, 88, 56, 999); //yyyy mm dd hrs mins secs millisec
//88 splits to 60+28 and hence output prints 10:28 instead of 9:88 (which is invalid though)
console.log(date2);