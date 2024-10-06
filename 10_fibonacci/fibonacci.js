const fibonacci = function(x) {
    x = parseInt(x)
    let fibonacci_array = [];
    for (let i = 0; i < x; i++) {
        if (i < 2) {
            fibonacci_array.push(1)
        }
        else {
            fibonacci_array.push(fibonacci_array[i-2] + fibonacci_array[i-1]);
        }
    }
    if (x === 0) {
        return 0
    }
    else {
        return fibonacci_array[x-1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
