// implement queue using stacks
/**
 * @constructor
 */

var Queue = function () {
  this.inbox = [];
  this.outbox = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function (x) {
  this.inbox.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function () {
  // if outbox has something in it, remove last element
  if (this.outbox.length !== 0) {
    this.outbox.pop();
  } else {
    // otherwise, pop elements off inbox and add them to outbox until inbox empty
    while (this.inbox.length !== 0) {
      this.outbox.push(this.inbox.pop());
    }
    // then pop off last element of outbox
    this.outbox.pop();
  }
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function () {
  // if outbox has something in it, return the last element
  if (this.outbox.length !== 0) {
    return this.outbox[this.outbox.length - 1];
  }
  // otherwise, return the first element in inbox
  return this.inbox[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function () {
  return this.inbox.length + this.outbox.length === 0;
};

// TEST
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);
console.log(queue.empty());
console.log(queue.peek());
queue.pop();
console.log(queue.peek());
