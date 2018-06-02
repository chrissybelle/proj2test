// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var place = {
    //add new place to list
    createPlacesWhere: function(cols, vals, cb) {
        orm.createPlacesWhere("places_of_interest", cols, vals, function(res) {
            cb(res);
            
        });
    },

    //pull list
    selectPlacesWhere: function() {
        orm.selectPlacesWhere(cols, "users", "places_of_interest", "users.username", "places_of_interest.user_id", condition1, condition2, function(res) {
            cb(res);
        });
    }

    //delete place from list


};

// Exports the database functions for the controller (placesController.js)
module.exports = place;