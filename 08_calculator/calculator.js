const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0);
};

const multiply = function(...nums) {
  let total = 1
  for ( let i = 0; i < nums.length; i++ ) {
    total *= nums[i];
  }
  return total
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 0) return 1;
  let total = 1
  for (i = n; i > 0; i--) {
    total *= i;
  };
  return total
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
