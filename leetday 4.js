var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length === 0) { return ''; }
   
   return strs.reduce((prev, next) => {
       let i = 0;
       while (prev[i] && next[i] && prev[i] === next[i]) i++;
       return prev.slice(0, i);
                    
   });
};

//problem 2
var merge = function(intervals) {
    if(!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for(let [start, end] of intervals) {
        if(start <= result[result.length - 1][1]) {
            const [startPrev, endPrev] = result.pop();
            result.push([startPrev, Math.max(end, endPrev)]);
        } else result.push([start, end]);
    }
    return result;
};