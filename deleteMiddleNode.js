var Node = function (val) {
  this.val = val;
  this.next = null;
};

var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function (node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function () {
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
};

LinkedList.prototype.printList = function () {
  var current = this.head;
  var values = [];
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var linkedList = new LinkedList();
linkedList.addToTail(a);
linkedList.addToTail(b);
linkedList.addToTail(c);
linkedList.addToTail(d);
linkedList.addToTail(e);
linkedList.addToTail(f);

// function to delete a node in middle of a singly linked list,
// given only access to that node
LinkedList.prototype.deleteMiddleNode = function (node) {
  if (node === null || node.next === null) {
    return false;
  }
  node.val = node.next.val;
  node.next = node.next.next;
  return true;
};
linkedList.deleteMiddleNode(c);
console.log(linkedList.printList());
