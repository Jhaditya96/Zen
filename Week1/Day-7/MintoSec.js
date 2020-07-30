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
var min = 3;
function toSeconds(min) {

    return min*60;
}
var secs = toSeconds(min)
console.log(secs)

//end-here
});