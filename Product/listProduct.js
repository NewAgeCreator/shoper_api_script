const axios = require('axios')
const main = require('../main')
var session_url = 'https://sklep594688.shoparena.pl/webapi/rest/products';

var connection = main.getToken().then((token) => {
    
    var config = main.getConfig(token.data.access_token)
    console.log("config = " , config)

        axios.get(session_url, config, {})
        .then((response) => {
           console.log(response.data)
        })
           
})
   

