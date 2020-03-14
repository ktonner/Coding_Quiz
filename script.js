//making the timer
//first select timer and button
var timer = document.getElementById("timer")
var startButton = document.getElementById("start")

//declare variables
var secondsLeft = 75;
timer.textContent = "Time: " + secondsLeft;

// function timerCounter(){
//     setInterval(function(){
//         secondsLeft --;
//         timer.textContent = "Time: " + secondsLeft;
//     }, 1000);
// console.log(secondsLeft)}

//make sure it doesn't start until button is clicked
startButton.addEventListener("click", function(){
//then make the loop counting down
setInterval(function(){
    secondsLeft --;
    timer.textContent = "Time: " + secondsLeft;
}, 1000);
console.log(secondsLeft)})

    
// display on page
