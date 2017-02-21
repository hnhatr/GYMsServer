var scope = require('../configs/scope')

var PlaceInfo = require('../models/placeinfo');
var Utils = require('./utils');
var NameTag = require('../configs/nametags');

/////////////////////////////////////////////////
// Input:
//           scope: GOOGLE, FACEBOOK
//            resultList: array
// output:
//            return listObjects
/////////////////////////////////////////////////
function placeObjectFactory(typeScope, resultList) {

    switch (typeScope) {
        case scope.fb:
            {
                var results = [];
                for (let obj of resultList) {
                    console.log(obj);
                    if (Utils.filterNameWithTags(NameTag.gyms, obj.name)) {
                        var info = new PlaceInfo;
                        info.scopeid = obj.id;
                        info.name = obj.name;
                        info.scope = scope.fb;
                        info.location = obj.location;
                        info.website = obj.website;
                        info.fblink = obj.link;
                        info.phone = obj.phone;
                        info.description = obj.description;
                        info.emails = obj.emails;
                        info.lineaddress = obj.single_line_address;

                        results.push(info);
                    }

                }
                return results;
            }
        case scope.gg:
            {
                var results = [];
                for (let obj of resultList) {

                    if (Utils.filterNameWithTags(NameTag.gyms, obj.name)) {
                        var info = new PlaceInfo;
                        info.scopeid = obj.id;
                        info.name = obj.name;
                        info.scope = scope.gg;
                        info.icon = obj.icon;
                        info.placeid = obj.place_id;
                        info.types = obj.types;
                        info.location.latitude = obj.geometry.location.lat;
                        info.location.longitude = obj.geometry.location.lng;
                        info.location.street = obj.formatted_address;
                        info.photos = obj.photos;
                        info.website = obj.website;
                        info.phone = obj.formatted_phone_number;

                        results.push(info);
                    }

                }

                return results;
            }
        default:
            {
                return {'error': 'Not found'};
            }
    }

}

module.exports = {
    placeObjectFactory
};
