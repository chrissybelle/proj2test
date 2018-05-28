var express = require("express");
var router = express.Router();

var place = require("../models/place.js");

router.get("/", function (req, res) { //fix path
   var userCondition = "user_id = " + req.params.id; //how do we get the user's id?
});