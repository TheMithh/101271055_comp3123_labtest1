function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(array)) {
        // Filter only strings and convert them to lowercase
        const result = array
          .filter(item => typeof item === 'string')  // Filter non-strings
          .map(word => word.toLowerCase());         // Convert remaining words to lowercase
        resolve(result);  // Resolve the promise with the transformed array
      } else {
        reject("Input is not an array");  // Reject the promise if input is not an array
      }
    });
  }


  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings', '25'];
lowerCaseWords(mixedArray)
  .then(result => console.log(result))  // Output: ['pizza', 'wings']
  .catch(error => console.log(error));

