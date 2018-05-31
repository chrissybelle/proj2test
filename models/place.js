// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var place = {
    //add new place to list
    createPlacesWhere: function(cols, vals, cb) {
        orm.createPlacesWhere("places_of_interest", cols, vals, function(res) {
            cb(res);
        });
    }

    //pull list


    //delete place from list


};

// Exports the database functions for the controller (placesController.js)
module.exports = place;