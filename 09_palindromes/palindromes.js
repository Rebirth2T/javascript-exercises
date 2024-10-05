const palindromes = function (string) {
    let str_length = string.length;

    // Loop through the first half of the string
    for (let i = 0; i < Math.floor(str_length / 2); i++) {
        // Compare characters from the start and the end
        if (string[i] !== string[str_length - 1 - i]) {
            return false;
        }
    }
    return true; // If no mismatches, it is a palindrome
};


// Do not edit below this line
module.exports = palindromes;
