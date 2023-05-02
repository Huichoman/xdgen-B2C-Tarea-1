$(document).ready(function () {
  $.getScript("./js/getApiData.js", function () {
    getApiData();
  });

  // var urlAPI = "https://644d97bd57f12a1d3de247cf.mockapi.io/trailblazer";
  // $.ajax({
  //   type: "GET",
  //   url: urlAPI,
  //   dataType: "json",
  // }).done(function (data) {
  //   var trailblazers = data.reverse();
  //   for (var i = 0; i < trailblazers.length; i++) {
  //     var trailblazer = trailblazers[i];
  //     var rankName = "scout.png";
  //     if (trailblazer.points >= 200) rankName = "hiker.png";
  //     if (trailblazer.points >= 3000) rankName = "explorer.png";
  //     if (trailblazer.points >= 9000) rankName = "adventurer.png";
  //     if (trailblazer.points >= 18000) rankName = "mountaineer.png";
  //     if (trailblazer.points >= 35000) rankName = "expeditioner.png";
  //     if (trailblazer.points >= 50000) rankName = "ranger.png";
  //     if (trailblazer.points >= 100000) rankName = "double-star-ranger.png";
  //     if (trailblazer.points >= 150000) rankName = "triple-star-ranger.png";
  //     if (trailblazer.points >= 200000) rankName = "four-star-ranger.png";
  //     if (trailblazer.points >= 250000) rankName = "five-star-ranger.png";
  //     if (trailblazer.points >= 300000) rankName = "all-star-ranger.png";
  //     var rankImage = `https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/${rankName}`;
  //     console.log(trailblazer);
  //     var html = "";
  //     html +=
  //       "<div class='d-flex flex-column  bg-transparent  border-0 justify-content-center my-3 mx-auto ' style='width: 30rem;'>";
  //     html +=
  //       "<div id='cardContainer' class=' d-flex flex-column  align-items-center'>";
  //     html +=
  //       "<div id='avatarContainer' class='d-flex flex-column  align-items-center mt-2'>";
  //     html +=
  //       "<img id='avatar' src='" +
  //       trailblazer.avatar +
  //       "'" +
  //       " class='rounded-circle ' >";
  //     html +=
  //       "<h6 class='mb-0 text-center '>" +
  //       trailblazer.name +
  //       " " +
  //       trailblazer.lastName +
  //       "</h6>";
  //     html += "</div>";
  //     html +=
  //       "<div id='statsContainer' class='d-flex flex-row justify-content-around align-items-center mt-4 mb-3 w-100'>";
  //     html += "<img id='rankImage' src='" + rankImage + "'" + " class='' >";
  //     html +=
  //       "<div class='d-flex flex-column justify-content-end align-items-center'>";
  //     html +=
  //       "<p id='statValueText' class='mb-0'>" + trailblazer.badges + "</p>";
  //     html += "<p id='statLabelText' class='mb-0'>Badges</p>";
  //     html += "</div>";
  //     html +=
  //       "<div class='d-flex flex-column justify-content-end align-items-center'>";
  //     html +=
  //       "<p id='statValueText' class='mb-0'>" + trailblazer.points + "</p>";
  //     html += "<p id='statLabelText' class='mb-0'>Points</p>";
  //     html += "</div>";
  //     html +=
  //       "<div class='d-flex flex-column justify-content-end align-items-center'>";
  //     html +=
  //       "<p id='statValueText' class='mb-0'>" + trailblazer.trails + "</p>";
  //     html += "<p id='statLabelText' class='mb-0'>Trails</p>";
  //     html += "</div>";
  //     html += "</div></div></div>";
  //     jQuery("div[id='cardsContainer']").append(html);
  //   }
  // });
});
