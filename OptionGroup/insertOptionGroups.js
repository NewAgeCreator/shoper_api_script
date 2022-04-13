const axios = require('axios')
const main = require('../main')

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/option-groups'

var group = {
    filters : true,
    translations: {
        "pl_PL" : {
            name: 'Przyklad API'
        }
    }
}

main.getToken().then(token => {
    var config  ={
        headers: { Authorization : `Bearer ${token.data.access_token}`}
    }
    axios.post(session_url, group, config).then(response => {
        console.log("Dodano grupe o ID = " , response.data)
    })

})