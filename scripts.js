// TODO: Create an OBJECT 'greeterDB' that will 🏠 the 'data' as per 👆🏽.

const greeterDB = {};

greeterDB.greeting = "Morning";
greeterDB.who = prompt("What is your name?");

const greeterDB2 = function() {
  console.log(`${arguments["0"]}`);
};

greeterDB2(greeterDB.greeting + " " + greeterDB.who);
