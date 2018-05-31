var express = require("express");
var router = express.Router();

var place = require("../models/place.js");

//DATA FROM AJAX CALL HAS TO BE PULLED THROUGH TO THIS FILE, OR THIS CODE HAS TO BE PUT INTO THE FILE WHERE THE AJAX CALL IS MADE

router.post("/api/places_of_interest", function (req, res) {
    place.createPlacesWhere(["user_id", "city", "state", "country", "lat", "lng", "category", "recommendation"], [req.body.user_id, req.body.city, req.body.state, req.body.country, req.body.lat, req.body.lng, req.body.category, req.body.recommendation], 
    function(result) {
        res.json({ id: result.insertId });
    });
});