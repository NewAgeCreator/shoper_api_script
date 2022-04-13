const axios = require('axios')
const main = require('../main')

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/options'

var option = {
    group_id : 9,
    stock: true,
    type: "select",
    translations: {
        "pl_PL" : { 
            name: "Opcja testowa"
        }
    }
}

main.getToken().then(token => {
    var config  ={
        headers: { Authorization : `Bearer ${token.data.access_token}`}
    }

    axios.post(session_url,option, config).then(response => {
        console.log(JSON.stringify(response.data, null ,4 ))
    })
})