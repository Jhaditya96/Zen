let outerheaderDiv = document.createElement("div");
outerheaderDiv.setAttribute("style","width:100%;height:auto;");
outerheaderDiv.setAttribute("class","card-group");
let header_div = document.createElement("div");
let header = document.createElement("h1");
header.setAttribute('style',"text-align:center;color:black;font-family: 'Playfair Display', serif;font-size:60px;");
header.innerText = "Rest Countries Details";
header_div.appendChild(header);
document.body.appendChild(header_div);
document.body.appendChild(outerheaderDiv);

function getData(){
  var xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
     xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status >= 300) {
            reject("Error, status code = " + xhr.status)
          } else {
            resolve(xhr.responseText);
          }
        }
      }
      xhr.open('get', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true)
      xhr.send();
    });
}

getData().then((data) =>{
  arr = JSON.parse(data)
  console.log(arr)
  for(let i = 0 ; i < data.length ; i++){
    
    let outerdiv = document.createElement('div');
    outerdiv.setAttribute('style','display:inline-flex;justify-content:center;padding:5px;border-radius:25px;');
    outerdiv.setAttribute('class','col-4');
    //outerdiv.setAttribute('style','display:inline-flex;margin:15px;')
     
    //let sectionaldiv = document.createElement('div');
     //sectionaldiv.setAttribute('class','col mb-4')
      
     let cardDiv = document.createElement('div');
      cardDiv.setAttribute('class','card');
      cardDiv.setAttribute('style','border-radius:25px;')
      
        
        let img = document.createElement('img');
        img.setAttribute('src',arr[i]['flag']);
        img.setAttribute('class','card-img-top');
        img.setAttribute('style','width:300px;height:200px;border-radius:15px;');
        cardDiv.appendChild(img);
        let cardbody = document.createElement('div');
        cardbody.setAttribute('class','card-body');
        
        let CountryName = document.createElement('h4');
        CountryName.setAttribute('class','card-title');
        CountryName.setAttribute('style','font-family:cursive;')
        CountryName.innerText = arr[i]['name'];
        cardbody.appendChild(CountryName);
        
        let para_text = document.createElement('p');
        para_text.setAttribute('class','card-text');
          let ul = document.createElement('ul');
            
            let list1 = document.createElement('li');
            list1.innerText = 'Capital:'+arr[i]['capital'];
            cardbody.appendChild(list1);

            let list2 = document.createElement('li');
            list2.innerText = 'Region:'+arr[i]['region'];
            cardbody.appendChild(list2);

            let list3 = document.createElement('li');
            list3.innerText = 'Lat-Lng:'+arr[i]['latlng'];
            cardbody.appendChild(list3);

            let list4 = document.createElement('li');
            list4.innerText = `Currency Name: ${arr[i]["currencies"][0]["name"]} \nCurrency Code: ${arr[i]["currencies"][0]["code"]} \n Currency Symbol: ${arr[i]["currencies"][0]["symbol"]}`
            cardbody.appendChild(list4);

          cardbody.appendChild(ul);
        cardbody.appendChild(para_text);
        
        cardDiv.appendChild(cardbody);
      outerdiv.appendChild(cardDiv);
     //outerdiv.append(sectionaldiv);
    document.body.append(outerdiv);
  }
})

