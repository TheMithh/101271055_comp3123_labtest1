function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(array)) {
        const result = array
          .filter(item => typeof item === 'string')  
          .map(word => word.toLowerCase());         
        resolve(result);  
      } else {
        reject("Input is not an array");  
      }
    });
  }


  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings', '25'];
lowerCaseWords(mixedArray)
  .then(result => console.log(result))  
  .catch(error => console.log(error));

