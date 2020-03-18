const name1 = prompt("What is your name") || "Name is blank";
console.log(name1);
console.log(typeof name1);
console.log(Number(name1));

///'name' will be a STRING but it might be blank.
let name = prompt("What is your name?");
//If 'name' is blank, then '!' will convert to Boolean(NOT FALSE, ie true)  '!' is a UNARY operator
//While 'name is not blank, then '!' will convert to a Boolean(NOT TRUE, ie false)
while (!name) {
  //while(name==="")
  name = prompt("What is your name?");
}

console.log(name);
