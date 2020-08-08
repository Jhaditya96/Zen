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
function getLengthOfWord(word1){
 // your code here
 if(typeof word1 === 'string'){
     return word1.length;
     
 }
 else if(Number.isInteger(word1)){
     return -1;
 }
 else {return -1;}
}
let lengthOfWord = getLengthOfWord();
console.log(lengthOfWord);

//end-here
});

