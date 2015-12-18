/**
 * @constructor
 */
var MinStack = function() {
  this.storage = [];
  this.minimums = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function (x) {
  this.storage.push(x);
  if (this.minimums[this.minimums.length - 1] >= x || this.minimums.length === 0) {
    this.minimums.push(x);
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  var popped = this.storage.pop();
  if (this.getMin() === popped) {
    this.minimums.pop();
  }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.storage.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  return this.minimums[this.minimums.length - 1];
};

var stack = new MinStack();
stack.push(0);
stack.push(1);
stack.push(0);
console.log(stack);
