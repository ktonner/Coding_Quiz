var timer = document.getElementById("timer")
secondsLeft = 0
timer.textContent = "Time: " + secondsLeft;


score = localStorage.getItem("score");
scoreDisplay = document.getElementById("score")
scoreDisplay.textContent = score
console.log(score)