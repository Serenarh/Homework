//PRIMITIVE DATA

//We need a way to reuse of access data, so we create a REFERENCE
//'const' alerts JS to reserve some space in memory
//With 'const' I cannot reassign the value in memory; If unsure use 'const'
//We provide a name for this space in memory
//We use the ASSIGNMENT OPERATOR '='
//This takes the VALUE on the right and assigns to the NAMED REFERENCE.
const myString = "string";

//Use 'let' ONLY if we plan to REASSIGN the VALUE REFERENCED by the VARIABLE.
let myNum = 23;

//myString = "something else";

console.log(myNum);

//Homework due 2/3/2020 lines 19-26
const hwString = "words";
const hwNumber = 524;
const hwBoo = true;

let hwLetNum = 626;

hwLetNum = 867; //let allows me to change hwLetNum's assigned value
hwString = "nope"; //const does NOT allow me to change the variable's value
