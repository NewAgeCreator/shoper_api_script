const axios = require('axios')
const main = require('../main')

var postProductURL = "https://sklep594688.shoparena.pl/webapi/rest/products"

var item = {
    producer_id: 1,
    category_id: 1,
    unit_id: 1,
    code: "11-121",
    pkwiu: "11-121",
    ean: "815301005162", // nie pamiętam czy jest na grafie
    newproduct: true,
    stock: {
      price:parseFloat('12'),
      stock: parseFloat('12'),
      delivery_id: '1', 
    },

    sold: 1.0,
    translations : {
      pl_PL : {
        name : "przykładowe api",
        short_description : "przykladowe api",
        description : "przykladowe api",
        seo_title:  "przykladowe api"
      }
  }
}


var connection = main.getToken().then((token) => {

    const config = main.getConfig(token.data.access_token);
    console.log("config =" , config)
    var au = axios.post(postProductURL, item, config).then(function(response){
      console.log("Dodajemy product id: " , response.data)
     
    }).catch(function(error) {
       console.log('Error on get insert Product' , error);
    });
});



  