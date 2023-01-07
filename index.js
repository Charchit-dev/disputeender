var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var sourceImage1 = "images/dice"+randomNumber1 + ".png";
var sourceImage2 = "images/dice"+randomNumber2 + ".png";
var set1 = document.querySelectorAll("img")[0];
var set2 = document.querySelectorAll("img")[1];
set1.setAttribute("src",sourceImage1);
set2.setAttribute("src",sourceImage2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 1 wins!!!"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML ="Player 2 wins!!!"
}
else{
    document.querySelector("h1").innerHTML ="Draw!!!"
}

