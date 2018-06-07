$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  function createDropDown() {
    $.ajax({
      url: '/api/places_of_interest',
      method: 'GET'
    }).then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {

        savedCities = $("<option class='location'>")
        savedCities.append(data[i].city);
        savedCities.attr("value", data[i].city);
        $("#savedList").append(savedCities);

      }

    });
  }

  createDropDown()

});

// takes user's selected city from the dropdown and passes it to controller for the selectPlacesWhere GET request
$("#submitPlace").on("click", function () {
  event.preventDefault();
  $("#tableRows").empty();
  var selectedCity = $(".location:checked").val();
  console.log(selectedCity);
  $.ajax({
    url: "/api/places_of_interest/" + selectedCity,
    type: "GET",
    // data: selectedList
  }).then(function (data) {
    console.log("pulled your list");
    // **** NEED TO REDIRECT USER TO PAGE OF SAVED PLACES
    $("#table").removeClass("hidden")

    for (var i = 0; i < data.length; i++) {
      row = $("<tr>");

      rowDelete = $("<td>")
      rowDelete.html("<label><input type='checkbox' class = 'checkboxDelete' value='" + data[i].id + "'<label>");
      row.append(rowDelete);

      rowCountry = $("<td>");
      rowCountry.append(data[i].country);
      row.append(rowCountry);

      rowState = $("<td>");
      rowState.append(data[i].state);
      row.append(rowState);

      rowCity = $("<td>");
      rowCity.append(data[i].city);
      row.append(rowCity);

      rowCategory = $("<td>");
      rowCategory.append(data[i].category);
      row.append(rowCategory);

      rowRecommendation = $("<td>");
      rowRecommendation.append(data[i].recommendation);
      row.append(rowRecommendation);

      $("#tableRows").append(row) //NEED TO FIX SO THAT CLICKING "SUBMIT" DOES NOT KEEP ADDING ON THE SAME INFO


    }
    $("#formList").html("<input id='deletePlace' type='submit' value='Delete'>");
  })

});




$("#formList").on("click", "#deletePlace", function (event) {
  console.log("GOOD");
  var deleteItems = [];

  $(".checkboxDelete:checked").each(function () {
    deleteItems.push($(this).val()); //(this).data("value");
    console.log(deleteItems);

  for (var j=0; j<deleteItems.length; j++) {

    var id = parseInt(deleteItems[j]);
    console.log(id);
    // Send the DELETE request.
    $.ajax("/api/places_of_interest/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted place: ", id);
        // Reload the page to get the updated list

      }
    )
  }
          location.reload();
})
});


