$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/places_of_interest").then(function(data) {


      $(".savedList").append(data);
    });
  });
  