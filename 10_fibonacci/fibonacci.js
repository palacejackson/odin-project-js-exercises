const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  fib = [0, 1];
  for (let i = 1; i < n; i++) {
    fib.push(fib[i] + fib[i - 1]);
  };
  return fib[n]
};

// Do not edit below this line
module.exports = fibonacci;
