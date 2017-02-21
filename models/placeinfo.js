// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var placeSchema = new mongoose.Schema({
    scopeid: String, // id from api
    scope: String, // api
    name: String, // place name
    types: Object, // [gym, yoga ...]
    location: {
        city: String,
        country: String,
        latitude: Number,
        longitude: Number,
        street: String
    }, //{city, country, latitude, longitude, street}
    website: String,
    fblink: String,
    phone: String,
    emails: String,
    description: String,
    iconurl: String,
    picture: Object, // {}
    cover: Object, // {}
    photos: Object, // []
    placeid: String,
    references: Object ,//[]
    lineaddress: String
});

// Return model
module.exports = restful.model('PlaceInfo', placeSchema);
