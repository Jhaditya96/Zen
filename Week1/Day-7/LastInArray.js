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
console.log(getLastElement([1,2,3,4]));
function getLastElement(arr)
{
    if(arr.length <= 0){return -1;}
    else{
         return arr[arr.length-1];
    }
}
//end-here
});

