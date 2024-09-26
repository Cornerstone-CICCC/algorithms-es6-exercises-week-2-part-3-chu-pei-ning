// Exercise 4: Recursion
// Instructions: Write a recursive function named `sumOfDigits` that calculates the sum of the elements of a given array. 
// Test your function by calculating the sum of the array and logging the result to the console.

function sumOfDigits(n) {
    let sum = 0
    for (let i = 0; i < n.length; i++){
      sum = sum + n[i]
    }
    return sum
}
console.log(sumOfDigits([1, 3, 7, 1, 8])); // 20
