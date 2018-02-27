

var numArr = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suitArr = ["&#9827;","&#9824;","&#9830;","&#9829;"];

var num = Math.floor(Math.random() * 12);
var suit = Math.floor(Math.random() * 4);

var numbers = document.querySelectorAll("span");
for (var i = 0, max = numbers.length; i < max; i++) {
    numbers[i].innerHTML = numArr[num];
}

document.querySelector("h1").innerHTML = suitArr[suit];

function setColor (AddColor,ReColor) {
    numbers = document.querySelectorAll("#color");
    for (var i = 0, max = numbers.length; i < max; i++) {
    numbers[i].classList.remove(ReColor);
    numbers[i].classList.add(AddColor);
}}

if (suit == 0 || suit == 1) {
    setColor("black","red");
}
else {
    setColor("red","black");
}

