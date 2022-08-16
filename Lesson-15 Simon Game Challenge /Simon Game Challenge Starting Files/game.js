var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
// console.log(buttonColours[1]);

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  // console.log(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();


}




nextSequence()
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
