var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];


var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);
  });




function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();


};




// nextSequence()
//
// console.log(gamePattern);
//
//
// $("#"+gamePattern[0]).animate({opacity: 0}, 100).animate({opacity: 1}, 100);
//
//
//
// document.querySelector("#"+gamePattern[0]).addEventListener("webkitAnimationStart",function() {
//   // var crash = new Audio("sounds/green.mp3");
//   var crash = new Audio("sounds/"+gamePattern[0]+".mp3");
//   crash.play();
// });
