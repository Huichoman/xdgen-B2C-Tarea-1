$(document).ready(function () {
  var urlAPI = "https://644d97bd57f12a1d3de247cf.mockapi.io/trailblazer";

  $("#formTrailblazer").on("submit", function (e) {
    e.preventDefault();

    var formData = {
      name: $("#inputFirstName").val(),
      lastName: $("#inputLastName").val(),
      points: $("#inputPoints").val(),
      badges: $("#inputBadges").val(),
      trails: $("#inputTrails").val(),
    };

    $.ajax({
      type: "POST",
      url: urlAPI,
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log("New trailblazer > ", data);
      $.getScript("./js/getApiData.js", function () {
        insertCard(data);
      });
    });
  });

  $(document).on("click", "#svgDelete", function (e) {
    var parentId = e.target.parentNode.parentNode.parentNode.id;
    const { name, lastName, points, badges, trails, id } = $(
      "#" + parentId
    ).data("trailblazer");
    console.log("Edit card data > ", id);

    $.ajax({
      url: urlAPI + `/${id}`,
      type: "DELETE",
      success: function (result) {
        $("#" + parentId).remove();
      },
    });
  });
});
