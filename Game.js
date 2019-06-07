var randomResult;
var win = 0;
var loss = 0;
var prior = 0;

var resetAndStart = function() {
  // deletes all stuff
  $(".crystals").empty();
  // array of images
  var images = [
    "https://images.unsplash.com/photo-1551947391-249dcb8ed976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1546608135-e5de34abc308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1545354628-c454465de722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1546524279-471adc001f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  ];
  // random result of the target
  randomResult = Math.floor(Math.random() * 69) + 30;
  // display the total
  $("#result").html("Target Crystal: " + randomResult);
  // dynamic set up of the 4 boxes for the crystals-random
  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    // defining the crystals variable
    var crystal = $("<div>");
    // attr for custom "data-random"
    crystal.attr({
      class: "crystal",
      "data-random": random
    });
    // it puts the style of the img into the boxes
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
    });
    // append for dynamitic img
    $(".crystals").append(crystal);
  }
  // display score for clicked crystals
  $("#prior").html("Total Score: " + prior);
};
// resets the game looks for the fields to populate
resetAndStart();

$(document).on("click", ".crystal", function() {
  // parseint- turns into number
  var number = parseInt($(this).attr("data-random"));
  prior += number;

  $("#prior").html("Total Score: " + prior);
  // console.log(prior);
  // if/else=win loss
  if (prior > randomResult) {
    loss++;
    $("#loss").html("You Lose:! " + loss);
    prior = 0;
    resetAndStart();
  } else if (prior === randomResult) {
    win++;
    $("#win").html("You Win: " + win);
    prior = 0;
    resetAndStart();
  }
});
