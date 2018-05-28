var express = require("express");
var router = express.Router();

var place = require("../models/users.js");

router.get("/", function(res, req) {
    res.render("index");
})

router.get("/login", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/login.html"));
});

router.get("/signup", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/signup.html"));
});

router.post("/api/users", function(req, res) {
    user.create(["username", "password"], [req.body.newUser.username, req.body.newUser.password])
})