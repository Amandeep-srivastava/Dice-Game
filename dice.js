var random = Math.floor(Math.random() * 6) + 1;
var randomimg1 = "dice" + random + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimg1);
var random2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "dice" + random2 + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomimg2);
if (random > random2) {
  document.querySelector("h1").innerHTML = "player-1 wins the match";
} else if (random < random2) {
  document.querySelector("h1").innerHTML = "player-2 wins the match";
} else {
  document.querySelector("h1").innerHTML = "This match will be draw";
}
