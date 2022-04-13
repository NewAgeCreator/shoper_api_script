const axios = require('axios')
const main = require('../main')

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/producers';

var producer = {
    name: 'Prodcer Test API',
    
}

main.getToken().then( (t) => {
    var config = main.getConfig(t.data.access_token)
    console.log(config)
    axios.post(session_url, producer, config)
})