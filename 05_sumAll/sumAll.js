const sumAll = function(start, end) {
    if(!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    }
    
    let sum = 0
    const lower = Math.min(start, end);
    const upper = Math.max(start, end);

    for(let i = lower; i <= upper; i++) {
        sum += i;
    }
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
