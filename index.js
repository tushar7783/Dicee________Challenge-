var random = Math.floor(Math.random() * 6) + 1;
var ranimg = "dice" + random + ".png";
var imgsrc = "images/" + ranimg;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", imgsrc);

var random1 = Math.floor(Math.random() * 6) + 1;
var ranimg2 = "dice" + random1 + ".png";
var imgsrc2 = "images/" + ranimg2;
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src", imgsrc2);

var heading = document.querySelector("h1");
if (random > random1) {
  heading.innerHTML = "🚩 Player1 Won!";
} else if (random < random1) {
  heading.innerHTML = "Player2 Won! 🚩";
} else {
  heading.innerHTML = "Draw😊";
}
