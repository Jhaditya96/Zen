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
var arr = [6, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr)
console.log(data);

//end-here
});

