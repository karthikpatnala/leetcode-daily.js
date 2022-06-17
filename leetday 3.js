var minimumSum = function(num) {
    const array = num.toString().split('')
    
    array.sort((a, b) => a - b)
    
    return Number(array[0] + array[2]) + Number(array[1] + array[3])
};
console.log(minimumSum(2932))

//problem 2
var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0
    
    for (const number of nums) {
        if (map[number]) {
            count += map[number];
            map[number] += 1;
        } else {
            map[number] = 1;
        }
    }
    return count
};

//problem-3

const subtractProductAndSum = n => {
    let sum = 0;
    let prod = 1;
    while (n > 0) {
      const mod = n % 10;
      sum += mod;
      prod *= mod;
      n = Math.floor(n / 10);
    }
    return prod - sum;
  };
