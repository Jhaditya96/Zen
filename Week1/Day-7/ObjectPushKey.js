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

var obj = {
 "key": "HouseKey",
 "name":"John",
 "sirname":"Doe",
 "Gender":"Male"
};
console.log(addProperty(obj,"hello"));
function addProperty(obj, key){
 // your code here
   let xyx = key;
    obj[xyx] = true;
    return obj;
    
}
//end-here
});

