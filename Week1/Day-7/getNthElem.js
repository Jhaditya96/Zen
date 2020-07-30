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
console.log(getNthElement([1,2,3,4],2));
function getNthElement(arr,num)
{
    if(arr.length <= 0){return undefined;}
    else if(num > 0){
        return arr[num];
    }
    else{
        return -1;
    }
    }
//end-here
});

