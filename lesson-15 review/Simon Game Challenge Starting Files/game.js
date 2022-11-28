buttonColours=["red", "blue", "green", "yellow"];
gamePattern=[];
userClickedPattern=[];



//任意键游戏开始
var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});


//记录用户按下的按钮
$(".btn").click(function(){
    // 获取属性，也就是ID
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour); 
    console.log(userClickedPattern);

    playSound(userChosenColour);

    animatePress(userChosenColour);
    // $('#'+userChosenColour).animate({opacity:0},100).animate({opacity:1},100);
    checkAnswer(userClickedPattern.length-1);


});



function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) 
    {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    
        } else {
    
          console.log("wrong");

          playSound("wrong");

          $("body").addClass("game-over");

          

          $("#level-title").text("game over,press any key to restart.")
          
          setTimeout(function(){
            $("body").removeClass("game-over");
          },200);


          startOver();
       
        }
    }


//随机生成一个按钮
function nextSequence(){
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

   var randomNumber=Math.floor(Math.random()*4);
//    console.log(randomNumber);

   var randomChosenColour=buttonColours[randomNumber];
//    console.log(randomChosenColour);

   gamePattern.push(randomChosenColour); 
   

    $('#'+randomChosenColour).animate({opacity:0},100).animate({opacity:1},100);


    playSound(randomChosenColour);

}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

//restart的方式，重制参数
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}
















