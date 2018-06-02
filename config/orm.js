var connection = require("./connection.js");

//helper function for "createPlacesWhere" query
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


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
  },

  //INSERT INTO places_of_interest (col1, col2, col3...) VALUES (val1, val2, val3...)
  createPlacesWhere: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // pull saved places list
//SELECT users.username as username,
// places_of_interest.city as city,
// places_of_interest.country as country,
// places_of_interest.lat as lat,
// places_of_interest.lng as lng,
// places_of_interest.category as category,
// places_of_interest.recommendation as recommendation
// FROM users
// RIGHT JOIN places_of_interest
// ON users.username = places_of_interest.user_id
// WHERE (places_of_interest.city = "city1"  AND users.username = "abc");
selectPlacesWhere: function()

};


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