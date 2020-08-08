var request = new XMLHttpRequest()

var url_string = "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"
var proxy = "https://cors-anywhere.herokuapp.com/"

//Open a new connection,using the GET request on the CORS connection
request.open('GET',proxy+url_string,true)
request.send();

request.onload = function(){
	//Begin accessing JSON data here
	var data = JSON.parse(this.response)
	console.log(data);

}