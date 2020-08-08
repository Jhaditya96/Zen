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
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let resarr = function countPositivesSumNegatives(arr) {
   let count = 0;
   let sum = 0;
   for(let i = 0 ; i < arr.length ; i++){
   if(arr[i] > 0){
       count++;
   }
    else if(arr[i]<0){
        sum+=arr[i];
    }   
   }
   return count+" "+sum;
}
console.log(resarr(arr));
//end-here
});

