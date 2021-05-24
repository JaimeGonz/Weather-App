const request = require('request')
const url = ('http://api.weatherstack.com/current?access_key=05630058b08dcb6e9bab33f91c7f1056&query=19.2433,%20-103.725')
const translate = require('@iamtraction/google-translate');
let weather_description

// translate(text, options).then(console.log).catch(console.error);

request({url:url, json:true}, (error, response) => {
    // console.log(response.body.current)
    weather_description = response.body.current.weather_descriptions[0]
    translate(weather_description, { from: 'en', to: 'es' }).then(res => {
        console.log("El clima es "+res.text);
    }).catch(err => {
        console.error(err);
    });

    // console.log("El clima es "+ response.body.current.weather_descriptions)
    console.log("La temperatura es de "+ response.body.current.temperature + "°C")
    console.log("Sin embargo, se percibe una temperatura de "+response.body.current.feelslike+"°C")
    console.log("La probabilidad de lluvia es de "+response.body.current.precip+"%")

})