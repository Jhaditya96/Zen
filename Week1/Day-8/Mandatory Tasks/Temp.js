const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
console.log(function(str){
    return str.toLowerCase().split(' ')
              .map((word) => word.replace(word[0],word[0].toUpperCase()))
               
}.tojoin()()
)
//end-here
});
/*
console.log((x => x*x)(10));
let show = function () {
    console.log('Anonymous function');