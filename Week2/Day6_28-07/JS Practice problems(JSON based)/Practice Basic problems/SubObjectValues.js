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
var cat = [{
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
}]

cat
    .map(friends => friends.catFriends)
    .forEach(activities => activities.map(
        item => console.log(item.activities.toString())))

//end-here
});