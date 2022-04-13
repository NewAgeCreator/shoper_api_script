const axios = require('axios')
const main = require('../main')

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/product-stocks'



main.getToken().then(token => {
    var config  ={
        headers: { Authorization : `Bearer ${token.data.access_token}`}
    }

    axios.get(session_url , config).then(response => {
        console.log(JSON.stringify(response.data , 0 ,2));
    });




})