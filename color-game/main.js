var numBlobs = 6;
var colors = randomColorGen(numBlobs);
var blobs = document.querySelectorAll(".blob");
var answer = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

// easy mode
easyButton.addEventListener("click", function(){
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numBlobs = 3;
  colors = randomColorGen(numBlobs);
  answer = pickColor();
  colorDisplay.textContent = answer;
  for (var i = 0; i < blobs.length; i++) {
    if(colors[i]){
      blobs[i].style.background = colors[i];
    } else {
      blobs[i].style.display = "none";
    }
  }
  messageDisplay.textContent = "";
  resetButton.textContent = "Reset";
  header.style.backgroundColor = "#a5a5a5";
});

// hard mode
hardButton.addEventListener("click", function(){
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numBlobs = 6;
  colors = randomColorGen(numBlobs);
  answer = pickColor();
  colorDisplay.textContent = answer;
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].style.background = colors[i];
    blobs[i].style.display = "block";
  }
  resetButton.textContent = "Reset";
  header.style.backgroundColor = "#a5a5a5";
  messageDisplay.textContent = "";
});

resetButton.addEventListener("click", function(){
  // generate new colors
  colors = randomColorGen(numBlobs);

  // get new answer
  answer = pickColor();

  // change header text to show new rgb color
  colorDisplay.textContent = answer;

  // apply new  random colors to blobs
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].style.backgroundColor = colors[i];
  }
  header.style.backgroundColor = "#a5a5a5";
  resetButton.textContent = "Reset"
});

colorDisplay.textContent = answer;

for(var i = 0; i < blobs.length; i++) {
  // assign colors to squares
  blobs[i].style.backgroundColor = colors[i];

  // assign click event listeners to squares
  blobs[i].addEventListener("click", function(){
    var userGuess = this.style.backgroundColor;
    // compare user's guess to
    if (userGuess === answer){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?"
      changeBlobColor(userGuess);
      header.style.backgroundColor = userGuess;
    } else {
      this.style.backgroundColor = "#333333";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeBlobColor(color){
  for(var i = 0; i < colors.length; i++){
    blobs[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColorGen(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    // push random color into array
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  // pick random r value
  var r = Math.floor(Math.random() * 256);

  // pick random g value
  var g = Math.floor(Math.random() * 256);

  // pick random b value
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
