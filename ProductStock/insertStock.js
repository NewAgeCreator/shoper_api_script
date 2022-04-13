const axios = require('axios')
const main = require('../main')

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/product-stocks'

var stock = {
    price: 1000,
    price_type: 1, // typ 1 nadpisanie wartości 
    active : 1,
    default: true, // dla najtańszej opcji false => dla pozostałych  
    product_id: 32,
    stock: 10,
    options: [
        {
            option_id: 11,
            value_id: 53
        }
    ]

 }

 main.getToken().then(token => {
    var config  ={
        headers: { Authorization : `Bearer ${token.data.access_token}`}
    }

    axios.post(session_url, stock, config).then((results, err) => {
        if(err)
            {
                console.log(err)
                return
            }
        console.log(results.data)
    })
 })