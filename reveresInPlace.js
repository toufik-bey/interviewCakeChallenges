function reverse(arrayOfChars) {

    let leftIndex = 0;
    let rightIndex = arrayOfChars.length - 1;
  
    while (leftIndex < rightIndex) {
  
      // Swap characters
      const temp = arrayOfChars[leftIndex];
      arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
      arrayOfChars[rightIndex] = temp;
  
      // Move towards middle
      leftIndex++;
      rightIndex--;
    }
  }


  const stream = require('stream');

function setupStreams(dataInputStream, dataOutputStream, callback) {
  // Write your code here
}
