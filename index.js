//numberSummer is a function which will sum the numbers between and including a starting number & an ending number, both of which will be passed to the function
function numberSummer(start, end) {
  let total = 0; //the total begins at 0
  //i is the iterator--it begins at the number passed into start;  the loop will stop after i has reached the ending number passed into end; i increases by one with each loop iteration
  for (let i = start; i <= end; i++) {
    total += i; //the total increases by the number represented by i
  }
  return total; //the total number is returned
}

console.log(numberSummer(1, 10)); //the console will print the total returned by numberSummer when 1 is passed to the function as the starting number (start) and 10 is passed to the function as the ending number (end)
