'use strict';

// Defence
var express = require('express');
var async = require('async');

// Link file
var fbapi = require('../commons/fbgraphapi');
var ggapi = require('../commons/googleapi');

// search place with api [FACEBOOK, GOOGLE]
function searchplace(req, res) {

    // get params from request
    var query = req.query;

    // handle request parameters
    if (!query.latitude || !query.longitude || (!query.types && !query.type) || (query.types && query.type)) {

        res.status(400);
        if (!query.latitude || !query.longitude)
            res.send('Require \"latitude\" or \"longitude\" parameter for search!');
        else
            res.send('\"type\" or \"types\" require for search!')

    }

    var radius = (query.radius)
        ? query.radius
        : 2000;
    // Check query type or types
    if (query.type) {

        // create optional for search
        const searchOption = {
            latitude: query.latitude,
            longitude: query.longitude,
            radius: radius,
            q: query.type,
            type: 'place'
        };

        // call api search
        async.parallel([
            function(next) {
                // google search
                ggapi.googleSearch(searchOption, function(err, result) {
                    next(err, result);
                });

            },
            function(next) {
                // facebook search
                fbapi.graphSearch(searchOption, function(err, result) {
                    next(err, result);
                });

            }
        ], function(err, results) {
            // optional callback, result is list all callback
            if (err)
                res.send(err);
            else {

                var arrs = [];
                if (!results[0].length && results[1].length > 0) {

                    res.send(results[1]);

                } else if (results[0].length > 0 && !results[1].length) {

                    res.send(results[0]);

                } else {

                    res.send(results[0].concat(results[1]));

                }
            }
        });

    } else {
        searchMultiWithPlace(null, req, req);
    }

} // end searchplace

// Search  place with multi types
function searchMultiWithPlace(searchOptionList, req, res) {}

function test(request, response) {}

module.exports = {
    searchplace,
    test
};
