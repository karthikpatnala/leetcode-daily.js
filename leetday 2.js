//problem-1
arr=[]
    for(let i=0;i<nums.length;i++){
        arr.push(nums[nums[i]]);
    }
    return arr;    
    
};

//problem 2
    var getConcatenation = function(nums) {
    return nums.concat(nums)    
 };

//problem-3
var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    return nums
    
};
//problem-4
const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }; 
  
//problem 5
// solve 5 questions tomorrow