// timer countsdown from button click
var count = 5;
var counter = null;
var startButton = document.getElementById("start");

function timer() {
  count = count-1;
  console.log(count);

  document.getElementById("timer").innerText = count;

  if (count <= 0){
     clearInterval(counter);
     alert("Game Over");
  }
}
startButton.addEventListener("click", function() {
    counter = setInterval(timer, 1000);
});
