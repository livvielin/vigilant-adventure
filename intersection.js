// function to find intersection of two rectangles
var intersection = function (rect1, rect2) {
  var bottom = rect1.y <= rect2.y ? rect1 : rect2;
  var top = rect1.y <= rect2.y ? rect2 : rect1;
  var tallest = rect1.height >= rect2.height ? rect1.height : rect2.height;
  var longest = rect1.width >= rect2.width ? rect1.width : rect2.width;
  if (Math.abs(rect1.y - rect2.y) >= tallest || Math.abs(rect1.x - rect2.x) >= longest) {
    return 'there is no intersection';
  } else {
    // handle right intersection
    if (bottom.x <= top.x) {
      console.log('right');
      return {
        'x': top.x,
        'y': top.y,
        'width': bottom.x + bottom.width - top.x,
        'height': bottom.y + bottom.height - top.y
      };
    }
    // handle left intersection
    else {
      console.log('left');
      return {
        'x': top.x + top.width - bottom.x,
        'y': top.y,
        'width': top.x + top.width - bottom.x,
        'height': bottom.y + bottom.height - top.y
      };
    }
  }
};

var rectangle1 = {

    // coordinates of bottom-left corner:
    'x': 1,
    'y': 5,

    // width and height
    'width': 10,
    'height': 4,

};

var rectangle2 = {
  'x': 3,
  'y': 7,
  'width': 5,
  'height': 3
};

var rectangle3 = {
  'x': 11,
  'y': 5,
  'width': 1,
  'height': 1
};

var rectangle4 = {
  'x': 2,
  'y': 5,
  'width': 4,
  'height': 5
};

var rectangle5 = {
  'x': 2,
  'y': 7,
  'width': 4,
  'height': 5
};

// right intersection
console.log(intersection(rectangle1, rectangle2));
// no intersection
console.log(intersection(rectangle1, rectangle3));
console.log(intersection(rectangle2, rectangle3));
// right intersection
console.log(intersection(rectangle2, rectangle4));
// one rectangle completely contained in other
console.log(intersection(rectangle4, rectangle5));

// can also refactor to use find range overlap helper function
