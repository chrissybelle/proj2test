var connection = require("./connection.js");

var orm = {
  selectWhere: function (tableInput, colToSearch, valOfCol, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
      if (err) throw err;
      cb(err, result)
    });
  },
  create: function (tableInput, cols_vals, cb) {
    var queryString = "INSERT INTO ?? set ?";
    connection.query(queryString, [tableInput, cols_vals], function (err, result) {
      if (err) throw err;
      cb(err, result)
    });
  }
}


// var orm = {

//     //FOR USERS
//     //pull user data
//     selectUserWhere: function (tableInput, colToSearch, valOfCol, cb) {
//         var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//         connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
//           if (err) throw err;
//           cb(err, result)
//         });
//       },
//       //create new user data
//       createUser: function (tableInput, cols_vals, cb) {
//         var queryString = "INSERT INTO ?? set ?";
//         connection.query(queryString, [tableInput, cols_vals], function (err, result) {
//           if (err) throw err;
//           cb(err, result)
//         });
//       },
//     //create new saved place data
//     createPlace: function(table, cols, vals, cb) {
//         var queryString = "INSERT INTO " + table;
//         queryString += " (";
//         queryString += cols.toStirng();
//         queryString += ") VALUES (";
//         queryString += printQuestionMarks(vals.length);
//         queryString += ") ";
//         console.log(queryString);
//     },

//     selectPlacesWhere: function (table, colOne, colTwo, cb) {
//         // select recommendations based on user_id and city
//         // SELECT * FROM table WHERE user_id = (user's id) AND city = (selected city)
//       var queryString = "SELECT * FROM " + table + "WHERE ?? = ? AND ?? = ?";
//       connection.query(queryString, valOfCol, function (err, result) {
//           if (err) throw err;
//           cb(err, result)
//       });
//     },
//     selectUsersWhere: function (table, valOfCol, cb) {
//       // select recommendations based on user_id and city
//       // SELECT * FROM table WHERE user_id = (user's id) AND city = (selected city)
//     var queryString = "SELECT * FROM " + table + "WHERE ?? = ? AND ";
//     connection.query(queryString, valOfCol, function (err, result) {
//         if (err) throw err;
//         cb(err, result)
//     });
//   },
  
  
  
    // // to add saved locations to user's favorite list
    // create: function () { //fix parameters
    //   var queryString = "INSERT INTO places_of_interest "
    // }
  // };
  
  module.exports = orm;