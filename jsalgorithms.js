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