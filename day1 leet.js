var finalValueAfterOperations = function(operations) {
    let x = operations.filter((op)=> op.includes('+')).length;
    let y = operations.length - p;
    return x + (y-1)
};

//problem-2

var defangIPaddr = function(address) {
    return address.replaceAll(".","[.]");
};

//problem-3

const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

let res = 0;
let words = 0;
for(let i of sentences){
words = i.split("").length;
}