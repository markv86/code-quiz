// keep timer from going past zero
// local storage
// log scores and initials in highscores.html

// --------------------------------------------------------------


// timer countdown from button click / hide start screen div
var count = 100;
var counter = null;
var startButton = document.getElementById("start");

// Timer function
function timer() {
  count = count-1;
  console.log(count);

  document.getElementById("timer").innerText = count;

  if (count <= 0){
     clearInterval(counter);
     alert("Game Over");
  }
  // stop timer from going past zero
  if (count >= 0) {
  }
}

// Event Listener to start the timer
startButton.addEventListener("click", function() {
  counter = setInterval(timer, 1000);
});

// Hide Start-screen on click of the timer. JQuery
$(document).ready(function(){
  $("#start").click(function(){
    $("#start-screen").hide();
  });
});

// Show test on click. JQuery
$(document).ready(function(){
  $("#start").click(function(){
    $("#test").show();
  });
});

// setup variables for questions
var progress = 0
var test;
var test_status;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var chD;
var correct = 0;
var incorrect = 0;

// QUESTIONS ---------------------------------------------------------------------

var codeQuestions = [
  {
      question: "Commonly used data types DO NOT include_____.",
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
      answer: "B"
    },
  {
      question: "The condition in an if else statement is enclosed within _____.",
      a: "quotes",
      b: "curly braces",
      c: "parenthesis",
      d: "square brackets",
      answer: "B"
    },
  {
      question: "Arrays in Javascript can be used to store _____.",
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all the above",
      answer: "D"
    },
  {
    question: "String values must be enclosed within _____ when being assigned to a variable.",
    a: "commas",
    b: "curly braces",
    c: "quotes",
    d: "parenthesis",
    answer: "D"
    },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is _____.",
    a: "Javascript",
    b: "terminal / bash",
    c: "for loops",
    d: "console.log",
    answer: "D"
    }
];
// -------------------------------------------------------------------------------
// Change "document.getElementById to variable get"
function get(x) {
  return document.getElementById(x);
}
// -------------------------------------------------------------------------------
// Function to show question on page
function showQuestion(){
  test = get("test");
  if(progress >= codeQuestions.length){
    // I wanted to append to div, but it didn't work
    questionTitle.innerHTML = "You answered "+correct+" out of "+codeQuestions.length+" questions correct";
    get("test_status").innerHTML = "Test completed";

     // set correct questions answered to final-score
     get('final-score').textContent = correct;

     // store score at highscores.html

    // send score to local storage
    // localStorage.setItem("highScore", correct)
    localStorage.setItem("highScore", JSON.stringify([correct]))
    console.log(localStorage)


  // clear game when timer or quiz is finishes

    //  reset score
    progress = 0;
    correct = 0;

    // at test complete, hide question title, show id="end-screen"
    $(document).ready(function(){
      $("#end-screen").show();
      });
    clearInterval(counter,"") 

    return false;
  }
  // counter on screen in "test_status" div
  get("test_status").innerHTML = "Question "+(progress+1)+" of "+codeQuestions.length;
  
 
  question = codeQuestions[progress].question;
  chA = codeQuestions[progress].a;
  chB = codeQuestions[progress].b;
  chC = codeQuestions[progress].c;
  chD = codeQuestions[progress].d;

  // shows question
  questionTitle.innerHTML = "<h3>"+question+"</h3>";
  questionTitle.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label>";
  questionTitle.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label>";
  questionTitle.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label>";
  questionTitle.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label>";
  questionTitle.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

// check for correct answer from question array
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == codeQuestions[progress].answer){
    correct++;
  }
  // decrement 10 seconds if correct answer
  if(choice != codeQuestions[progress].answer){
    count = count-10
  }
  progress++;
  showQuestion();
}

document.getElementById("start").addEventListener("click",showQuestion);



