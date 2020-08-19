let body = document.body
body.style = "background-color:#2c2954;";

let outbox = document.createElement('div');
outbox.setAttribute('class', 'card-group');
outbox.style = 'width:100%;height:auto;';

let headerDiv = document.createElement('div');
headerDiv.style = 'text-align:center;color:black;';

body.appendChild(headerDiv);
body.appendChild(outbox);
let outerDiv
async function getInfo(url) {
    let country = await fetch(url);
    let result = await country.json()
    return result;
}

async function display(a, b) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=4b83b512b8a0c3028cf6fa4cd0a9f4c2`);
    let jsondata = await data.json();
    alert("Temprature: " + jsondata.main.temp + " F "
        + "\n Description: " + jsondata.weather[0].description);
}

async function CountryDetails() {
    try {
        let array = await getInfo('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
        console.log(array);
        for (let i = 0; i < array.length; i++) {

            let outerDiv = document.createElement("div")
            outerDiv.style = 'display:flex;justify-content:center;padding:5px;margin-bottom:30px;';
            outerDiv.setAttribute("class", "col-lg-4 col-sm-12")

            let innerDiv = document.createElement("div")
            innerDiv.setAttribute("class", "row")
            innerDiv.style = 'background-color:black;color:white;font-size:20px;font-family:"Russo One", sans-serif;height:40px;width:100%;margin-left:2px;display:flex;justify-content:center;padding:5px;';
            innerDiv.innerText = array[i]["name"]

            let cardDiv = document.createElement("div")
            cardDiv.setAttribute("class", "card")
            cardDiv.style = 'background: rgb(105,106,92);background: linear-gradient(90deg, rgba(105,106,92,1) 0%, rgba(205,197,115,1) 52%, rgba(98,98,81,1) 100%);padding-bottom:40px;';

            let img = document.createElement("img")
            img.setAttribute("class", "card-img-top")
            img.setAttribute("src", array[i]["flag"])
            img.style = "width:300px;height:200px;padding:20px;"

            let cardBody = document.createElement("div")
            cardBody.setAttribute("class", "card-body")


            let capitalcard = document.createElement("spam")
            capitalcard.setAttribute("class", "card-text")
            capitalcard.style = 'color:white;display:flex;justify-content:center;font-family:"Titillium Web", sans-serif;font-size:20px;';
            capitalcard.innerText = "Capital : " + array[i]["capital"]

            let Regioncard = document.createElement("spam")
            Regioncard.setAttribute("class", "card-text")
            Regioncard.style = 'color:white;display:flex;justify-content:center;font-family:"Titillium Web", sans-serif;font-size:20px;';
            Regioncard.innerText = "Region : " + array[i]["region"]

            let latCard = document.createElement("spam")
            latCard.setAttribute("class", "card-text")
            latCard.style = 'color:white;display:flex;justify-content:center;font-family:"Titillium Web", sans-serif;font-size:20px;';
            latCard.innerText = "Latlng : " + array[i]["latlng"]
            let lat = array[i]["latlng"][0]
            let lon = array[i]["latlng"][1]

            let countryCode = document.createElement("spam")
            countryCode.setAttribute("class", "card-text")
            countryCode.style = 'color:white;display:flex;justify-content:center;font-family:"Titillium Web", sans-serif;font-size:20px;';
            countryCode.innerHTML = "Country Code:  " + array[i]["cioc"]

            let button = document.createElement("button");
            button.setAttribute("class", "btn");
            button.setAttribute("onclick", `display(${lat},${lon})`);
            button.style = "margin-left:50px;font-family:'Titillium Web', sans-serif;margin-top:10px;padding:12px;padding-left:22px;padding-right:22px;font-size:16px;text-align:center;border: 2px solid white;color:white;";
            button.innerText = "Click For Weather";

            cardBody.appendChild(capitalcard);
            cardBody.appendChild(Regioncard);
            cardBody.appendChild(latCard);
            cardBody.appendChild(countryCode);
            cardBody.appendChild(button);

            cardDiv.appendChild(innerDiv);
            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBody);
            outerDiv.appendChild(cardDiv);
            outbox.appendChild(outerDiv);
        }
    } catch (err) {
        console.log(err);
    }
}
CountryDetails();
