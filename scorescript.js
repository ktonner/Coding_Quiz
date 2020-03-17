$(document).ready(function () {

    //timer set to 0
    var timer = document.getElementById("timer")
    secondsLeft = 0
    timer.textContent = "Time: " + secondsLeft;

    //high score button
    highScoreBtn = document.getElementById("high-score")
    highScoreBtn.addEventListener("click", function(){
      window.location.assign("highscore.html")
    })

    //showing score
    score = localStorage.getItem("score");
    scoreDisplay = document.getElementById("score")
    scoreDisplay.textContent = score
    console.log(score)

    //try again button
    $("#tryAgain").on("click",function(){
        window.location.assign("quiz.html")
    })

    //Buttons and initials input
    
    $("#initSubmit").click(function(){
        var initialsVal = document.getElementById("initials");
        initialsVal=initialsVal.value;
        localStorage.setItem("initials", initialsVal)
        console.log(initialsVal)
        alert("Your high score has been submitted!")
    })




})