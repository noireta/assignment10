//STEP 1
 let num1 = prompt(" Please enter a negative or positive number, ");
  console.log(Math.abs(num1));

//STEP 2
let num2 = prompt(" Please enter floating point value (decimal). ");
console.log(Math.ceil(num2));

//STEP 3

let num3 = prompt(" Please enter floating point value (decimal). ");
console.log(Math.floor(num3));

//STEP 4

var numbers = prompt("Please enter five numbers and comma delimit each number ");
let arr = numbers.split(',');
console.log("This is max........."+ Math.max(...arr));
console.log("This is mim........."+ Math.min(...arr));

//STEP 5

var userNum = prompt("Please enter a number");
console.log(Math.sqrt(userNum));

