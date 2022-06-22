var truncateSentence = function(s, k) {
    let str = ""
    var word = s.split(" ")
    for(let i=0; i<k-1; i++){
        str += word[i] + " "
    }
    str += word[k-1];
    return str;
};

//problem-2
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    return nums.map((value) => sorted.indexOf(value));
    };
 
 //problem-3   