//typed arrays allows us to access the raw binary data
//typed array can be created by ArrayBuffer and only be accessed using Views

//create a typed array buffer
let typedArray = new ArrayBuffer(3);

//create a view to work with array buffer. you cannot directly access it.
let view = new Int8Array(typedArray);

view[0] = 128; //int8array can only store values until 127.
view[1] = 121;
view[2] = 4;
view[3] = 40; //3 bytes already filled. can I access this ?
console.log(view);

//array buffers can also be accessed using DataView object
let view2 = new DataView(typedArray);