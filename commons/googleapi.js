var GG = require('@google/maps');
var async = require('async');

// Link file
var config = require('../configs/config');
var scope = require('../configs/scope');
var factory = require('./placefactory')

// Set google public key
var gg = GG.createClient({key: config.gg.APIkey});

function googleSearch(option, callback) {

    gg.placesRadar({

        location: [
            option.latitude, option.longitude
        ],
        radius: parseInt(option.radius),
        type: option.q
    }, function(err, res) {

        if (!res || err) {

            var error = new Error('Search with error ' + err);
            callback(error, null);

        } else {

            var datas = res.json.results;

            // Get info with array id
            var AsyncSquaringLibrary = {

                squareExponent: 3,
                square: function(info, callback) {
                    gg.place({
                        placeid: info.place_id
                    }, function(err, ress) {
                        if (!ress || err) {
                            var error = new Error('Search info ' + info.placeid + 'with error' + res.error);
                            callback(error, null);
                        } else {

                            if (ress.status == '200') {

                                callback(null, ress.json.result);

                            } else {
                                callback(null, ress.json.status);
                            }
                        }
                    });
                }
            };

            // Async get info
            async.map(datas, AsyncSquaringLibrary.square.bind(AsyncSquaringLibrary), function(err, results) {

                callback(err, factory.placeObjectFactory(scope.gg, results));

            });

        }
    });

}

module.exports = {
    googleSearch
};
