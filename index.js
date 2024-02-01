const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function() {
  let newArray = tutorials.map(fun1);
  return newArray;
}


function fun1(item) {
  let indexArray = [-1];
  for (let i = 0; i < item.length; i++) {
    if (item[i] === ' ') {
      indexArray.push(i);
    }
  }
  for (let index of indexArray) {
    let firstChunk = "";
    if (index >= 0) {
      firstChunk = item.slice(0, (index + 1));
    }
    let newChar = item[index + 1].toUpperCase();
    let newSlice = item.slice(index + 2);
    item = firstChunk + newChar + newSlice;
  }
  console.log(item);
  debugger;
  return item;
}