// TODO: Create a 'greeting' function and send it 2 STRINGS. One for the time of day (e.g. 'morning') and then a 'name.'

const greeting = function() {
  console.log(`${arguments["0"]} ${arguments["1"]}`);
};

greeting("Morning", "Louisa");
