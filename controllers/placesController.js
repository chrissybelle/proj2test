var express = require("express");
var router = express.Router();

var place = require("../models/place");
// var savedplace = require("../public/js/project.js");



//     //DATA FROM AJAX CALL HAS TO BE PULLED THROUGH TO THIS FILE, OR THIS CODE HAS TO BE PUT INTO THE FILE WHERE THE AJAX CALL IS MADE

//     // router.post("/api/savedPlaces", function (req, res) {
//     //     var newCity = req.body.val.toString();
//     //     place.createPlacesWhere({'city_recommendations': newCity}, function(result) {
//     //         res.json({ id: result.insertId });
//     //     });
//     // });


//     // pull users
//     router.get("/api/places_of_interest", function (req, res) {
//         place.selectPlacesWhere(function (data) {
//             var hbsObject = {
//                 users: data
//             };
//             console.log(hbsObject);
//             res.render("index", hbsObject);
//         }
//         );
//     });


//add new place to list
router.post("/api/places_of_interest", function (req, res) {
    console.log("POST - CONTROLLER WORKING " + req.user.username);
    place.createPlacesWhere(
        ["user", "city", "state", "country", "lat", "lng", "category", "recommendation"],
        [req.user.username, req.body.city, req.body.state, req.body.country, req.body.lat, req.body.lng, req.body.category, req.body.recommendation],
        function (result) {
            res.json({ id: result.insertId });
        }
    );
});

//pull cities for favorites dropdown
router.get("/api/places_of_interest", function(req, res) {
    console.log("GET FAVORITES - CONTROLLER WORKING");
    console.log(req.body);
    var user = req.user.username;

    place.selectDistinctCitiesWhere(user, function(data) {
        console.log(data);
        console.log("GET CITIES request DONE");

        // router.post("api/saved_places", function(req, res) {
        //     place.createCity("city", data, function(result) {
        //         res.json({ id: result.insertId});
            // })
        // })
    });
});


// pull saved places list
router.get("/api/places_of_interest", function (req, res) {
    console.log("GET - CONTROLLER WORKING");
    console.log(req.body);
    var user = req.user.username;
    var city = req.body.selectedCity;
    place.selectPlacesWhere(user, city, function (data) {
        var hbsObject = {
            place: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
        console.log("GET request DONE");
    }
    );
});

//update/add saved places list
router.put("/api/places_of_interest/:id", function (req, res) {
    console.log("PUT - CONTROLLER WORKING");
    var user = "id = " + req.user.username;

    console.log("id", user);

    place.updatePlacesWhere({
        city: req.body.city
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
//delete city from saved list
router.delete("/api/places_of_interest/:id", function (req, res) {
    console.log("DELETE - CONTROLLER WORKING");
    var user = "id = " + req.user.username;

    place.deletePlacesWhere(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});





// }
// // Export routes for server.js to use.

module.exports = router;