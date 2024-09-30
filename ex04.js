// Exercise 4: Recursion
// Instructions: Write a recursive function named `sumOfDigits` that calculates the sum of the elements of a given array. 
// Test your function by calculating the sum of the array and logging the result to the console.

function sumOfDigits(n) {
  return recursive(n, 0);
}

function recursive(n, result) {
  if (n.length === 0) {
    return result;
  }
  
  let addResult = n[n.length - 1] + result;

  let newArr = n.slice(0, n.length - 1);
  
  return recursive(newArr, addResult);
}

console.log(sumOfDigits([1, 3, 7, 1, 8])); // 20