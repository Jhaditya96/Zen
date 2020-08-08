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
var hr = 2;
function hourToSeconds(hr) {
 
 return hr*60*60;   
}
var data = hourToSeconds(hr)
console.log(data);

//end-here
});

