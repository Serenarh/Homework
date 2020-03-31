//Sum the #s in this array
const nums = [51, 22, 33, 44, 11, 65, 7, 8, 9, 10]; //declare, create, and fill array with integers

//function will sum the integers in an array passed to the function
function sumDaNumbers(numbers) {
  let total = 0; //set total variable to 0
  for (let i = 0; i < numbers.length; i++) {
    //set up the for loop; i is the iterator and is set to 0; i will stop after it hits the end of the array (since it is set to one less than the array's length & will represent each elements' index; i will go up by 1 each time the loop runs )
    total += numbers[i]; //loop through the array one at a time
  }
  return total; //return the total of the array's integer elements
}

const totalOfNums = sumDaNumbers(nums); //create a variable to hold result of array nums
//being passed into sumDaNumbers
console.log(totalOfNums); //print the total returned from sumDaNumbers--rep by var totalOfNums

console.log(sumDaNumbers(nums)); //here print total returned from sumDaNumbers by passing nums directly into the function
