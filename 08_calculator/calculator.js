const add = function(first, second) {
  return first + second;
	
};

const subtract = function(first, second) {
  return first - second;
	
};

const sum = function(arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++){
    sum += arr[i];
  }
	return sum;
};

const multiply = function(arr) {
  let product = 1;
  for(i = 0; i < arr.length; i++){
    product *= arr[i];
  }
  return product;

};

const power = function(number, power) {
  return number ** power;
	
};

const factorial = function(number) {
  if(number === 0)return 1;
  if(number > 0){
    return number * factorial(number - 1);
  }
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
