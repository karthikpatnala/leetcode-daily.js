var isPalindrome = function(x) {
    return x.toString() === x.toString().split("").reverse().join("");
};

//problem 2
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i]) return digits;
    }
    digits.unshift(1);
    return digits;
};