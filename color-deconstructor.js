/******************
 * YOUR CODE HERE *
 ******************/
function colorDeconstructor(str){
  if(str === 'purple'){
    return 'red and blue'
  } else if(str === 'orange'){
    return 'red and yellow'
  } else if(str === 'green'){
    return 'blue and yellow'
  } else {
    return "error"
  }
}


// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
