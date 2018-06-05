$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  function createDropDown() {
    $.ajax({
      url: '/api/places_of_interest',
      method:'GET'
    }).then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {

        savedCities = $("<option class='location'>")
        savedCities.append(data[i].city);
        $("#savedList").append(savedCities);

      }

    });
  }

  createDropDown()

});

// takes user's selected city from the dropdown and passes it to controller for the selectPlacesWhere GET request
$("#submitPlace").on("click", function() {
  var selectedCity = $(".location:checked").val();
  var selectedList = {
      city: selectedCity
  };
  console.log(selectedList);
  $.ajax("/api/places_of_interest", {
      type: "GET",
      data: selectedList
  }).then(
      function() {
          console.log("pulled your list");
          // **** NEED TO REDIRECT USER TO PAGE OF SAVED PLACES
          location.reload();
      })

});
