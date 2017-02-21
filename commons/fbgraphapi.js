// Defence
var FB = require('fb');
var async = require('async');

// Link file
var config = require('../configs/config');
var scope = require('../configs/scope');
var factory = require('./placefactory')

// set facebook accessToken
FB.setAccessToken(config.fb.accessToken);

function graphSearch(option, callback) {

    const searchOption = {
        q: option.q,
        type: option.type,
        center: option.latitude + ',' + option.longitude,
        distance: option.radius
    };

    FB.api('search', searchOption, function(res) {

        if (!res || res.error) {

            var err = new Error('Search with error ' + res.error);
            callback(err, null);

        } else {

            // Field get info of  node id
            const fields = {

                fields: "name,location,website,link,contact_address,cover,description,emails,phone,picture,single_line_address,hometown"

            };

            // list Location, result for search place
            var datas = res.data;

            // Get info with array id
            var AsyncSquaringLibrary = {

                squareExponent: 3,
                square: function(info, callback) {
                    FB.api(info.id, fields, function(ress) {
                        if (!ress || ress.error) {
                            var err = new Error('Search info ' + info.id + 'with error' + res.error);
                            callback(err, null);
                        } else {
                            callback(null, ress);
                        }
                    });
                }
            };

            // Async get info
            async.map(datas, AsyncSquaringLibrary.square.bind(AsyncSquaringLibrary), function(err, results) {

                if (!err)
                    callback(err, factory.placeObjectFactory(scope.fb, results));
                else {
                    callback(err, null);
                }

            });

        }

    });

}

module.exports = {
    graphSearch
};
