var a = [];
var b = [];
var c = [];

var hanoi = function ( numDisks, fromPeg, toPeg, sparePeg ) {
  if ( numDisks > 0 ) {
    hanoi( numDisks - 1, fromPeg, sparePeg, toPeg );
    moveDisk( fromPeg, toPeg );
    hanoi( numDisks - 1, sparePeg, toPeg, fromPeg );
  }
};

// function to populate fromPeg, with smallest disk at last index
var start = function ( numDisks, fromPeg ) {
  for ( var d = numDisks; d > 0 ; d-- ) {
    fromPeg.push( d );
  }
  return fromPeg;
};

// function to move disks
var moveDisk = function ( fromPeg, toPeg ) {
  var disk = fromPeg.pop();
  toPeg.push( disk );
};

// test start function
// console.log(start( 3, a ));
// start( 5, a );
// test move disk function
// moveDisk( a, b );
// test hanoi recursion
var numDisks = 5;
start( numDisks, a );
hanoi( numDisks, a, b, c );
console.log( a, b, c );
// view hanoi
//console.log(a, b, c);
