// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6bc9baa8d4993e1425ddae5d5f6af7aa', true)

request.onload = function() {
	if(open.readyState == 4){
  // Begin accessing JSON data here
var data = JSON.parse(request.responseText)
document.getElementById("data").innerText = request.responseText;
//console.log(data)
	}
}

// Send request
request.send()