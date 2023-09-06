/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(str){
  if(str === 'red' || str === 'yellow' || str === 'blue'){
    return true
  } else {return false}
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
