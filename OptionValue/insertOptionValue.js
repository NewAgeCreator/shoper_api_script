const axios = require('axios')
const main = require('../main')

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/option-values'

var value = {
    option_id: 11, // id naszej opcji 
    translations:{
        "pl_PL" :{
            value: "Nazwa naszej opcji"
        }
    }
}

main.getToken().then(token => {
    var config  ={
        headers: { Authorization : `Bearer ${token.data.access_token}`}
    }

    axios.post(session_url , value , config).then(results=>{
        console.log(results.data)
    })
})