// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


// CALLBACK 1

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

getLength(items, function(length) {
  console.log('Length: ', length)
});


// CALLBACK 2

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastIndex = arr.length - 1;
  // console.log(lastIndex);
  return cb(arr[lastIndex]);
}

last(items, function(lastItem) {
  console.log('Last Item: ', lastItem)
});


// CALLBACK 3

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let addNumbers = x + y;
  return cb(addNumbers);
}

sumNums(7, 8, function(additions) {
  console.log('Sum of Numbers: ', additions);
});


// CALLBACK 4

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let multiNumber = x * y;
  return cb(multiNumber);
}

multiplyNums(4, 8, function(multis) {
  console.log('Multiply Numbers: ', multis);
});


// CALLBACK 5

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
