// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
var url_string = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6bc9baa8d4993e1425ddae5d5f6af7aa"
var proxy = "https://cors-anywhere.herokuapp.com/"

request.open('GET',proxy+url_string,true)
// Send request
request.send();


request.onload = function() {
	  // Begin accessing JSON data here
var res = JSON.parse(this.response)
console.log(res);
	}


