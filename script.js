//making the timer
//first select timer and button
var timer = document.getElementById("timer")
var startButton = document.getElementById("start")

//declare variables
var secondsLeft = 75;
timer.textContent = "Time: " + secondsLeft;

//make sure it doesn't start until button is clicked
startButton.addEventListener("click", function(){
//then make the function counting down
setInterval(function(){
    secondsLeft --;
    timer.textContent = "Time: " + secondsLeft;
}, 1000);
console.log(secondsLeft)})

//setting up questions
var questions = [
    {
      title: "What tag is used to render text into an important (bold) version?",
      choices: ["<em>", "<blockquote>", "<a>", "<strong>"],
      answer: "<strong>"
    },
    {
      title: "The link element must go inside the ____ section of an HTML document or page",
      choices: ["Footer", "Head", "Body", "Paragraph"],
      answer: "Head"
    }
  ]

  //displaying questions
  //get the welcome section

  var welcome = document.getElementById("welcome")

    //add new section for the questions
    var questionDisplay = document.createElement("section")
    var qH1 = document.createElement("h1")
    var qList = document.createElement("ul")
    
  
  //when button is clicked, make welcome disappear
  startButton.addEventListener("click", function(){
      welcome.setAttribute("style","display: none;");
      //and make questions appear
      document.body.appendChild(questionDisplay)
      questionDisplay.appendChild(qH1)
      questionDisplay.appendChild(qList)
  })

  console.log(questions[0].choices)
  var i = 0

  //making the choices and the answers their own global variable
  //i found it makes working with them easier
  var choices = Object.values(questions[i].choices)
  var answer = questions[i].answer

function createQuestion(){
  qH1.textContent = questions[i].title
  for(j = 0; j<4;j++){
    li = document.createElement("li")
    qList.appendChild(li);
    var qButton = document.createElement("button");
    
    li.appendChild(qButton);
    qButton.textContent = choices[j];
}}
  
  createQuestion();
 

  function changeQuestion(){
    qH1.textContent = questions[i].title
    qButton.textContent = choices[j];
  }
 
  //add event Listener for clicking answer
  questionDisplay.addEventListener("click", function(event){
      if(event.target.matches("button") && (event.target.textContent == answer)){
      i++;
      j++;
      changeQuestion();
    }
    else{
        secondsLeft = (secondsLeft - 10);
    }
      console.log(choices[j])
     
  })
  
