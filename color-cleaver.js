const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
let one = getInput(1);
let two = getInput(2);
function colorCleaver(str1, str2){
    if(str2 === undefined && str1 === undefined){
        return 'Please enter at least one color.'
    } else if(str2 === undefined && isValidSecondary(str1) === true){
        return str1 + " is made of " + colorDeconstructor(str1)
    } else if(str2 === undefined && isValidSecondary(str1) === false){
        return 'If you only enter one color, please make it a secondary color.'
    } else if(isValidPrimary(str1) === true && isValidPrimary(str2) === true){
        return str1 + " and " + str2 + " make " + colorCombinator(str1, str2)
    } else if(isValidPrimary(str1) === false || isValidPrimary(str2) === false){
        return 'If you enter two colors, please make them both primary colors.'
    }
}

console.log(colorCleaver(one, two))