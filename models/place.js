// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var place = {
    //I don't know if we need lines 6-10?
    all: function (cb) {
        orm.all("places_of_interest", function (res) {
            cb(res);
        });
    },
    //add new place to list
    createPlacesWhere: function (cols, vals, cb) {
        console.log("POST - MODEL WORKING");
        orm.createPlacesWhere("places_of_interest", cols, vals, function (res) {
            cb(res);

        });
    },

    //post distinct cities to saved_places in order to use in dropdown
    // createCity: function(cols, vals, cb) {
    //     console.log("POST CITIES - MODEL WORKING");
    //     orm.createCity("")
    // }



    //pull list
    selectPlacesWhere: function (user, city, cb) {
        var findUser = "places_of_interest.user = ";
        findUser += "'" + user + "'";

        var findCity = "places_of_interest.city = ";
        findCity += "'" + city + "'";

        console.log("GET - MODEL WORKING");
        orm.selectPlacesWhere("places_of_interest", findUser, findCity, function (res) {
            cb(res);
        });
    },
    updatePlacesWhere: function (city, user, cb) {
        var findCity = "places_of_interest.city = ";
        findCity += "'" + city + "'";

        var findUser = "places_of_interest.user = ";
        findUser += "'" + user + "'";
        
        console.log("UPDATE - MODEL WORKING");
        orm.update("places_of_interest", findUser, findCity, function (res) {
            cb(res);
        });
    },
    deletePlacesWhere: function (condition, cb) {
        console.log("DELETE - MODEL WORKING");
        orm.deletePlacesWhere("places_of_interest", condition, function (res) {
            cb(res);
        });
    },

// pull cities for favorites dropdown
selectDistinctCitiesWhere: function(user, cb) {
    var findUser = "places_of_interest.user = ";
    findUser += "'" + user + "'";
    console.log("GET FAVORITES - MODEL WORKING");
    orm.selectDistinctCitiesWhere("places_of_interest.city", "places_of_interest", findUser, function(res) {
        cb(res);
    })
}


};


// Exports the database functions for the controller (placesController.js)
module.exports = place;