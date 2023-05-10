const reverseString = function(str) {
    if(typeof str !== 'string') {
        return "Invalid input. Please provide a string.";
    }

    return str.split('').reverse().join('');

};

// Do not edit below this line
module.exports = reverseString;
