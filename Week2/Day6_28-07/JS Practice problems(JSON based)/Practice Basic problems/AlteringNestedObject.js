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
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}

cat.catFriends[0].furcolor = "black";
console.log(cat.catFriends[0])
//end-here
});