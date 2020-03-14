//making the timer
//first select timer and button
var timer = document.getElementById("timer")
var startButton = document.getElementById("start")
//make sure it doesn't start until button is clicked
startButton.addEventListener("click", function(){
//then make the loop counting down
var secondsLeft = 75;
setInterval(function(){
timer.textContent = secondsLeft;
secondsLeft --;
}
)
})
// display on page