const axios = require('axios')
const main = require('../main')

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/producers'

main.getToken().then( (token) => {
    // var config = main.getConfig(t.data.access_token);

    var config = {
        headers: { Authorization : `Bearer ${token.data.access_token}`},
        params: {
            page: 2
        }
       
      
    }
    axios.get(session_url, config)
        .then(response => {
            console.log(response.data)
        })
});