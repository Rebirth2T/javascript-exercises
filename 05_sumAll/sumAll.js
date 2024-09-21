const sumAll = function(a, b) {
    let sum = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";

    } else if (a < 0 || b < 0) {
        return "ERROR";
    } else {
        const min = Math.min(a, b);
        const max = Math.max(a, b);
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }

    



};

// Do not edit below this line
module.exports = sumAll;
