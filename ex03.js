// Exercise 3: Set
// Instructions: Create a Set named `uniqueNumbers` and add some numbers to it using .add(), including some duplicates. 
// Verify that the Set only keeps unique values by logging it to the console.

const uniqueNumbers = new Set();
uniqueNumbers.add(1)
uniqueNumbers.add(2)
uniqueNumbers.add(3)
uniqueNumbers.add(1) //it's duplicate so not going to stole
console.log(uniqueNumbers);
