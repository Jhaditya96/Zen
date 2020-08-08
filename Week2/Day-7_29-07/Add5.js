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
var num = 0;
function addFive(num) { 
return num+5;
}
var result = addFive(num)
console.log(result)

//end-here
});

