// TODO: Update 👆🏽by using `prompt` to get the user's name.

const greeting2 = function() {
  console.log(`${arguments["0"]}`);
};

let who = prompt("What is your name?");

greeting2("Morning " + who);
