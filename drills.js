'use strict';

function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}

// This function does not increase in run-time complexity as the input value increases.
// Therefore, it is O(1)

let counter=0;

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    counter++;
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      counter ++;
      const el2 = arr2[j];
      if (el1 === el2) 
        return true;
    }
  }
  console.log(counter,'counter');
  return false;
}



// This function checks to see if any of the elements in an array
// exist in a second provided array

// The bigO value of this function would be O(n^2), since there is
// a nested for loop.
areYouHere([1,2,3],[4,9,10,0,34,44,9]);


function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// This function's bigO value is Linear, or O(n), since the runtime complexity
// increases directly proportionally to the size of the data. 

function naiveSearch(array, item) {
  let counter = 1;
  for (let i=0; i<array.length; i++) {
    counter++;
    if (array[i] === item) {
      return i;
    }
  }
}

// This function's runtime complexity increases proportionally to it's data input
// Therefore it's bigO value would be O(n);


function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// This algorithmn receives a number, then returns the fibonacci sequence witht the index of that number
// It's runtime complexity increases directly proportionally to the input value, so it is
// O(n);


function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    counter ++;
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      counter++;
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      counter++;
      maxIndex = currentIndex - 1;
    }
    else {
      counter++;
      return currentIndex;
    }
  }
  console.log('counter', counter);
  return -1;
}

console.log(efficientSearch([1,2,3,4,5,6,10,1,5,23,4,6234,3,2,34,21,5,53,2345,23454,543,35,345,32,452,345,2345,234,5234,5234,52435,24,5234,5], 210));

// O(log n)


function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// This function is constant, because there is no calculation
// O(1);



function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i === 0) return false;
  }
  return true;
}

//this function's runtime complexity increases directly proportional to the 
// size of the data input. Therefore it has a big O of O(n)

