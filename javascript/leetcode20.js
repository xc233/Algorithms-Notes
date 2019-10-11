//stack FILO
var isValid = function (s) {
  let stack = [];
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (i of s) {
    console.log(i);
    if (!map[i]) {
      stack.push(i);
      // console.log(stack);
    }
    else if (!stack | map[i] != stack.pop()) {
      // console.log('false');
      return false;
    }
  }
  if (stack.length == 0){
    return true;
  }
  else {
    return false;
  }
  // console.log(stack.length);
  // console.log('true');
};
console.log(isValid("())[]{}"));