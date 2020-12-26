// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let rejEx = /\S+/g;
    let arr = str.match(rejEx);
    let max = 0;
    arr.forEach(word => {
      if (word.length > max) max = word.length;
    });
    return max;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

  function largestOfFour(arr) {
    let largest = [];
    arr.forEach(el => {
      largest.push(Math.max(...el));
    });
    return largest;
  }
  
  console.log(largestOfFour(
    [[4, 5, 1, 3], 
     [13, 27, 18, 26], 
     [32, 35, 37, 39], 
     [1000, 1001, 857, 1]
    ]
  ));

  // Check if a string (first argument, str) ends with the given target string (second argument, target).Using substring method.

function confirmEnding(str, target) {
    let finalIndex = str.length;
    let startIndex = finalIndex - target.length;
    console.log(finalIndex, startIndex);
    return str.substring(startIndex, finalIndex) == target;
  }
  
  console.log(confirmEnding("Bastian", "idan"));

//Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. 
// For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let newString = ""
    for (let i = 0; i < num; i++) newString+= str;
    return newString
  }
  
  console.log(repeatStringNumTimes("abc", 3));

//   Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
    let newString = str.slice(0, num);
    if (newString.length >= num) newString += "...";
    return newString;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 888));