// timer countsdown from button click
var count = 30
var counter = setInterval(timer, 1000); 

function timer() {
  count = count-1;
  if (count <= 0){
     clearInterval(counter);
     return;
  }
//   console.log(count)
}


// button click

