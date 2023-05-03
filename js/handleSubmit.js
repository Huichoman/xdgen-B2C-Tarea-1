$(document).ready(function () {
  $("#formTrailblazer").on("submit", function (e) {
    var urlAPI = "https://644d97bd57f12a1d3de247cf.mockapi.io/trailblazer";
    e.preventDefault();

    var formAction = $("input[name='formAction']:checked").val();

    var formData = {
      name: $("#inputFirstName").val(),
      lastName: $("#inputLastName").val(),
      points: $("#inputPoints").val(),
      badges: $("#inputBadges").val(),
      trails: $("#inputTrails").val(),
      id: $("#id").val(),
    };
    console.log("ID >", formData.id);
    if (formAction == "PUT") urlAPI += "/" + formData.id;

    $.ajax({
      type: formAction,
      url: urlAPI,
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log("New trailblazer > ", data);
      $.getScript("./js/getApiData.js", function () {
        insertCard(data, formAction);
      });
    });
  });
});
