// var express = require("express");
// var router = express.Router();
// var passport = require("../config/passport.js");
// var user = require("../models/users.js");


//     function auth(req, res, next, authMethod) {
//       passport.authenticate(authMethod, function (err, user, info) {
//         if (err) {
//           res.status(500)
//           res.json(err)
//         }
//         if (!user) {
//           res.status(401)
//           res.json(info.message)
//         }
//         else {
//           req.logIn(user, function (err) {
//             if (err) { return next(err); }
//             res.status(200)
//             res.json("/members");
//           });
//         }
//       })(req, res)
//     }



// router.get("/", function(req, res) {
//     res.render("index");
// });

// router.get("/login", function(req, res) {
//     res.render("partials/login");
// });

// router.get("/signup", function(req, res) {
//     res.render("partials/signup");
// });

// router.post("/api/login", function (req, res, next) {
//     auth(req, res, next, "local-login");
// });

// router.post("/api/signup", function (req, res, next) {
//     auth(req, res, next, "local-signup");
// });


// // router.post("/api/signup", function(req, res) {
// //     console.log(req.body.newUser.username, req.body.newUser.password);
// //     user.createUser(["username", "password"], [req.body.newUser.username, req.body.newUser.password], function(res) {
// //         res.json({ id: res.insertId });
// //         res.redirect("/");
// //     });
// // });



// module.exports = router;