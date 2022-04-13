const axios = require('axios')
const main = require('../main')

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/deliveries'

main.getToken().then((t) => {
    console.log(t.data)
    var config = main.getConfig(t.data.access_token)
    console.log(config)
    axios.get(session_url, config)
        .then(result => {
            console.log(result.data)
        })
        .catch(err => {
            console.log("ERR: " , err.response.data)
        })
    })