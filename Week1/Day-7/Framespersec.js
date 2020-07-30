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
function frames(num1,num2) {
    return num1*num2*60;
}
var fps = frames(10,25)
console.log(fps);

//end-here
});

