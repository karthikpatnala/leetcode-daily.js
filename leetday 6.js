//problem 1
var groupAnagrams = function(strs) {
    let res = {};
    for (let str of strs) {
        let tmp = str.split('').sort().join('');
        if (res[tmp] == null)
            res[tmp] = [str]
        else
            res[tmp].push(str)
    }
    return Object.values(res)
};
//problem 2

var searchInsert = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};