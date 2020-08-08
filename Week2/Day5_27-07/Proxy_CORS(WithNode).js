 //for node
 fetch = require('node-fetch');

 var url = "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"

 fetch(url)
     .then(res => res.json())
     .then(json => console.log(json));