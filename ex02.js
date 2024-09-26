// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  let difference = numbers[0] //first number in arr
  for (let i = 0; i < numbers.length; i++){
    difference -= numbers[i]
  }
  return difference //return the final difference
}

console.log(subtract(10, 2, 3)); // Example usage
