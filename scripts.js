// TODO: Create a 'greeting' function and send it 2 STRINGS. One for the time of day (e.g. 'morning') and then a 'name.'

const greeting = function() {
  console.log(`${arguments["0"]} ${arguments["1"]}`);
};

greeting("Morning", "Louisa");

// TODO: Update 👆🏽by using `prompt` to get the user's name.

const greeting2 = function() {
  console.log(`${arguments["0"]}`);
};

let who = prompt("What is your name?");

greeting2("Morning " + who);

// TODO: Create an OBJECT 'greeterDB' that will 🏠 the 'data' as per 👆🏽.

const greeterDB = {};

greeterDB.greeting = "Morning";
greeterDB.who = prompt("What is your name?");

const greeterDB2 = function() {
  console.log(`${arguments["0"]}`);
};

greeterDB2(greeterDB.greeting + " " + greeterDB.who);
