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
function lessThan100(num1,num2) {
    if(num1+num2 < 100 ){
        return true;
    }
    else 
     return false;
}
var res = lessThan100(92,15)
console.log(res);

//end-here
});

