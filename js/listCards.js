$(document).ready(function () {
  $.getScript("./js/getApiData.js", function () {
    getApiData();
  });

  $(document).on("click", "#svgEdit", function (e) {
    var parentId = e.target.parentNode.parentNode.parentNode.id;
    const { name, lastName, points, badges, trails, id } = $(
      "#" + parentId
    ).data("trailblazer");
    console.log("Edit card data > ", name);
    $("input[id='inputFirstName']").val(name);
    $("input[id='inputLastName']").val(lastName);
    $("input[id='inputPoints']").val(points);
    $("input[id='inputBadges']").val(badges);
    $("input[id='inputTrails']").val(trails);
  });
});
