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

    originalFormValue.name = name;
    originalFormValue.lastName = lastName;
    originalFormValue.points = points;
    originalFormValue.badges = badges;
    originalFormValue.trails = trails;

    formMode = "update";
    $("#submitBtn").prop("disabled", true);
  });

  // $("input").focusout(function () {
  //   $("input").trigger("change");
  // });

  $("input").on("mouseleave", function () {
    var formData = {
      name: $("#inputFirstName").val(),
      lastName: $("#inputLastName").val(),
      points: $("#inputPoints").val(),
      badges: $("#inputBadges").val(),
      trails: $("#inputTrails").val(),
    };
    if (formMode == "update") {
      // console.log("lastValue > ", originalFormValue);
      if (
        formData.name != originalFormValue.name ||
        formData.lastName != originalFormValue.lastName ||
        formData.points != originalFormValue.points ||
        formData.badges != originalFormValue.badges ||
        formData.trails != originalFormValue.trails
      ) {
        $("#submitBtn").prop("disabled", false);
      } else {
        $("#submitBtn").prop("disabled", true);
      }
    } else $("#submitBtn").prop("disabled", false);
  });

  $("input[id='updateAction']").on("change", function () {
    $("#formTitle").text("Update");
    formMode = "update";
  });

  $("input[id='createAction']").on("change", function () {
    $("input[id='updateAction']").prop("disabled", true);
    $("#formTitle").text("Create");
    formMode = "create";

    $("input[id='inputFirstName']").val("");
    $("input[id='inputLastName']").val("");
    $("input[id='inputPoints']").val("");
    $("input[id='inputBadges']").val("");
    $("input[id='inputTrails']").val("");
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
