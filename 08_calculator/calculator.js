const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(input) {
	return input.reduce((accum, curr) => {
    return accum + curr;
  },0);
};

const multiply = function(input) {
  return input.reduce((accum, cur) => accum*cur);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let output = 1;
  for (let i = 1; i <= a; i++) {
    output = output * i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
