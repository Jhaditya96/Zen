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
function getOpposite(num) {

    if(Number.isInteger(num) !== true){return -1;}
    else if(num === 0){return 0;}
    else if(num>0 || num <0){return -num;}
    
}
var result = getOpposite(num)
console.log(result)

//end-here
});

