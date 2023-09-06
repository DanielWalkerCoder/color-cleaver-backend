/******************
 * YOUR CODE HERE *
 ******************/
function isValidSecondary(str){
  if(str === 'green' || str === 'purple' || str === 'orange'){
    return true
  } else {return false}
}


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
