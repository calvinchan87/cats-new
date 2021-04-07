const fs = require('fs');

const breedDetailsFromFile = function(breed, finalFunction) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // CHANGE: Pass data into callback instead of returning it directly
    if (!error) finalFunction(data);
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printBreed = breed => {
  console.log('Return Value: ', breed)
}

// we try to get the return value
breedDetailsFromFile('Bombay', printBreed);