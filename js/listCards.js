$(document).ready(function () {
  $.getScript("./js/getApiData.js", function () {
    getApiData();
  });

  $(document).on("click", "#svgEdit", function (e) {
    var parentId = e.target.parentNode.parentNode.parentNode.id;

    const { name, lastName, points, badges, trails, id } = $(
      "#" + parentId
    ).data("trailblazer");

    $("input[id='inputFirstName']").val(name);
    $("input[id='inputLastName']").val(lastName);
    $("input[id='inputPoints']").val(points);
    $("input[id='inputBadges']").val(badges);
    $("input[id='inputTrails']").val(trails);
    $("input[id='id']").val(id);
    $("input[id='updateAction']").prop("checked", true);
    $("input[id='updateAction']").prop("disabled", false);
    $("#formTitle").text("Update");
  });

  $("input[id='updateAction']").on("change", function () {
    $("#formTitle").text("Update");
  });

  $("input[id='createAction']").on("change", function () {
    $("input[id='updateAction']").prop("disabled", true);
    $("#formTitle").text("Create");

    $("input[id='inputFirstName']").val("");
    $("input[id='inputLastName']").val("");
    $("input[id='inputPoints']").val("");
    $("input[id='inputBadges']").val("");
    $("input[id='inputTrails']").val("");
  });
});
