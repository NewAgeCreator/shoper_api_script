const axios = require('axios')




const username = 'integra.seo.start@gmail.com'
const password = 'superHaslo123$' 

const session_url = 'https://sklep594688.shoparena.pl/webapi/rest/auth';

var token;

exports.getToken = () => {
    return au = axios.post(session_url , {} ,{
        auth: {
            username: username,
            password: password
        }
    })
}

exports.getConfig = (token) =>{
    var config = {
        headers: { Authorization : `Bearer ${token}`}
    }
    return config;
}

// var token = main.getToken().then((t) => {
//     console.log(t.data)

    
//     return t.data.access_token;
// })
    
    
