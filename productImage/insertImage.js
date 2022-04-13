const axios = require('axios')
const main = require('../main')

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/product-images'

var image ={ 
    product_id : 32, 
    name: 'product_id-number_img',
    url : 'https://guitarcenter.pl/catalog/images/Focusrite%20Scarlett%202i2%203Gen.jpg?pID=59279'
}
main.getToken().then(token => {
    var config  ={
        headers: { Authorization : `Bearer ${token.data.access_token}`}
    }

    axios.post(session_url , image , config).then(results=>{
        console.log(results.data)
    })
})