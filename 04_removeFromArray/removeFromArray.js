const removeFromArray = function(array, ...filters) {
    return array.filter(item => !filters.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
