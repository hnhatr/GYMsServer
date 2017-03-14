'use strict';

// Libs
var express = require('express');
var async = require('async');

/**
 * Use Facebook API
 * @type {API}
 */
var fbapi = require('../commons/fbgraphapi');

/**
 * Use Google API
 * @type {API}
 */
var ggapi = require('../commons/googleapi');

/**
 * Search for location input
 * @param  {Object} req : request
 * @param  {Object} res : response
 * @return {Object}
 */
function searchplace(req, res) {

    // Request parameters
    let {latitude, longitude, types, type, radius} = req.query;

    // Check request parameters
    if (!latitude || !longitude || (!types && !type) || (types && type)) {

        res.status(400);
        res.send("Request send error \n" +
            "latitude :" + latitude + "\n longitude : " + longitude + "\n types : " + type + "\n types : " + types);

    }

    if (!radius) {

        radius = 2000; // meters

    }

    // Send request
    if (type) {

        // Create optional for search
        const searchOption = {
            latitude: latitude,
            longitude: longitude,
            radius: radius,
            q: type,
            type: 'place'
        };
        searchWithPlace(searchOption, res);

    } else {
        searchMultiWithPlace(null, req, req);
    }

}

/**
 * [searchWithPlace description]
 * @param  {[type]} latitude  [description]
 * @param  {[type]} longitude [description]
 * @param  {[type]} radius    [description]
 * @param  {[type]} type      [description]
 * @return {[type]}           [description]
 */
function searchWithPlace(options, res) {

    // call api search
    async.parallel([
        function(next) {
            // google search
            ggapi.googleSearch(options, function(err, result) {
                next(err, result);
            });

        },
        // function(next) {
        //     // facebook search
        //     fbapi.graphSearch(options, function(err, result) {
        //         next(err, result);
        //     });
        //
        // }
    ], function(err, results) {

        // optional callback, result is list all callback
        if (results.length > 0) {

            res.status(200);
            var arrs = results;
            if (arrs.length === 1) {
                res.send(arrs[0]);
            } else if (arrs.length === 2){
                res.send(arrs[0].concat(arrs[1]));
            }

        } else {

            res.status(404);
            res.send(err);

        }
    });

}

// Search  place with multi types
function searchMultiWithPlace(searchOptionList, req, res) {}

function test(request, response) {
    var fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
    response.send("api send test for : " + fullUrl);
}

module.exports = {
    searchplace,
    test
};
