var a = [];
var b = [];
var c = [];

// step 1: solve for one disk, two disks, three disks
var hanoi = function ( numDisks, fromPeg, toPeg, squarePeg ) {
  var numMoves = 0;
  // create the game
  start( numDisks, fromPeg );

  var miniHanoi = function ( numDisks, fromPeg, toPeg, squarePeg ) {
    // base case when no disks left to move
    if ( toPeg.length === numDisks ) {
      console.log( fromPeg, toPeg, squarePeg );
      console.log( numMoves );
      return;
    }
    // solve for one disk
    if ( numDisks === 1 ) {
      moveDisk( fromPeg, toPeg );
      numMoves += 1;
      console.log( fromPeg, toPeg, squarePeg );
      console.log( numMoves );
      return;
    }

    // solve for two disks
    if ( numDisks === 2 ) {
      moveDisk( fromPeg, squarePeg );
      numMoves += 1;
      moveDisk( fromPeg, toPeg );
      numMoves += 1;
      moveDisk( squarePeg, toPeg );
      numMoves += 1;
      console.log( fromPeg, toPeg, squarePeg );
      console.log( numMoves );
      return;
    }
  };
  
  // solve for three disks
  // solve for 2, but switch to and square pegs
  miniHanoi( numDisks - 1, fromPeg, squarePeg, toPeg );
  // solve for one disk to move last disk
  miniHanoi( 1, fromPeg, toPeg, squarePeg );
  // solve for 2 disks, but switch the from and square pegs
  miniHanoi( numDisks - 1, squarePeg, toPeg, fromPeg );

  // recurse
  // hanoi( numDisks, fromPeg, toPeg, squarePeg, numMoves );
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
hanoi( 3, a, b, c );
// view hanoi
//console.log(a, b, c);
