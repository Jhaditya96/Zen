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
var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends:[
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omlet'],
 weight: 8,
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}

cat.catFriends[0].color = "black";
cat.catFriends[1].color = "White"
cat.catFriends[1].food = "Fish";
cat.catFriends[0].food = "Milk"

console.log(cat.catFriends)
//end-here
});