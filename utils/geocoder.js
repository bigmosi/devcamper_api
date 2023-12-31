const NodeGeocoder = require('node-geocoder');

const optons = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdaptor: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
}

const geocoder = NodeGeocoder(optons);


module.exports = geocoder;
