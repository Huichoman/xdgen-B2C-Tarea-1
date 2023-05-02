var urlAPI = "https://644d97bd57f12a1d3de247cf.mockapi.io/trailblazer";

function getApiData() {
  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
  }).done(function (data) {
    var trailblazers = data;
    for (var i = 0; i < trailblazers.length; i++) {
      var trailblazer = trailblazers[i];
      insertCard(trailblazer);
    }
  });
}

function insertCard(trailblazer) {
  var rankName = "scout.png";

  if (trailblazer.points >= 200) rankName = "hiker.png";
  if (trailblazer.points >= 3000) rankName = "explorer.png";
  if (trailblazer.points >= 9000) rankName = "adventurer.png";
  if (trailblazer.points >= 18000) rankName = "mountaineer.png";
  if (trailblazer.points >= 35000) rankName = "expeditioner.png";
  if (trailblazer.points >= 50000) rankName = "ranger.png";
  if (trailblazer.points >= 100000) rankName = "double-star-ranger.png";
  if (trailblazer.points >= 150000) rankName = "triple-star-ranger.png";
  if (trailblazer.points >= 200000) rankName = "four-star-ranger.png";
  if (trailblazer.points >= 250000) rankName = "five-star-ranger.png";
  if (trailblazer.points >= 300000) rankName = "all-star-ranger.png";

  var rankImage = `https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/${rankName}`;
  console.log(trailblazer);

  var html = "";
  html +=
    "<div id='trailblazer" +
    trailblazer.id +
    "'  class='d-flex flex-column  bg-transparent  border-0 justify-content-center my-3 mx-auto ' style='width: 30rem; display:none; animation: show 1s;'>";

  html +=
    "<div id='cardContainer' class=' d-flex flex-column  align-items-center position-relative'>";

  html += "<div id='cardControls' class='badge p-2 '>";

  html +=
    "<svg id='svgEdit' fill='none' width='20' height='20' viewBox= '0 0 24 24' stroke-width='1' stroke='currentColor' class='w-1 h-1'><path stroke-linecap='round' stroke-linejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' /></svg>";
  html +=
    "<svg id='svgDelete' fill='none' width='20' height='20' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' /> </svg>";
  html += "</div>";

  html +=
    "<div id='avatarContainer' class='d-flex flex-column  align-items-center mt-2'>";
  html +=
    "<img id='avatar' loading='eager' src='" +
    trailblazer.avatar +
    "'" +
    " class='rounded-circle ' >";

  html +=
    "<h6 class='mb-0 text-center '>" +
    trailblazer.name +
    " " +
    trailblazer.lastName +
    "</h6>";
  html += "</div>";

  html +=
    "<div id='statsContainer' class='d-flex flex-row justify-content-around align-items-center mt-4 mb-3 w-100'>";

  html += "<img id='rankImage' src='" + rankImage + "'" + " class='' >";

  html +=
    "<div class='d-flex flex-column justify-content-end align-items-center'>";
  html += "<p id='statValueText' class='mb-0'>" + trailblazer.badges + "</p>";
  html += "<p id='statLabelText' class='mb-0'>Badges</p>";
  html += "</div>";

  html +=
    "<div class='d-flex flex-column justify-content-end align-items-center'>";
  html += "<p id='statValueText' class='mb-0'>" + trailblazer.points + "</p>";
  html += "<p id='statLabelText' class='mb-0'>Points</p>";
  html += "</div>";

  html +=
    "<div class='d-flex flex-column justify-content-end align-items-center'>";
  html += "<p id='statValueText' class='mb-0'>" + trailblazer.trails + "</p>";
  html += "<p id='statLabelText' class='mb-0'>Trails</p>";
  html += "</div>";

  html += "</div></div></div>";

  $("div[id='cardsContainer']").prepend(html);
  $("#trailblazer" + trailblazer.id).data("trailblazer", {
    name: trailblazer.name,
    lastName: trailblazer.lastName,
    points: trailblazer.points,
    badges: trailblazer.badges,
    trails: trailblazer.trails,
    id: trailblazer.id,
  });
  $("#trailblazer" + trailblazer.id).slideDown(600);
}
