/**
 * @constructor
 */
var Stack = function() {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  while (this.queue1.length > 0) {
    this.queue2.push(this.queue1.shift());
  }
  this.queue1.push(x);
  while (this.queue2.length > 0) {
    this.queue1.push(this.queue2.shift());
  }
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  return this.queue1.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  return this.queue1[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return this.queue1.length === 0;
};

var stack = new Stack();
console.log(stack.empty());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top());
console.log(stack.pop());
