// function to count how many ways a child can run up the stairs
// input: n steps
// output: number of ways child can run up stairs
// child can hop up 1, 2, or 3 steps at a time
var tripleStep = function (n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
  }
};

console.log(tripleStep(1));
console.log(tripleStep(5));
