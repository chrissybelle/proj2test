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


    // pull saved places list
    router.get("/api/places_of_interest", function (req, res) {
        console.log("GET - CONTROLLER WORKING");
        var user = req.user.username;
        var city = "new york"; //hardcoded to test, need to pull value from selection
        place.selectPlacesWhere(user, city, function(data) {
            var hbsObject = {
                place: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
            console.log("GET request DONE");
        }
        );
    });


  
    
    
// }
// // Export routes for server.js to use.

module.exports = router;