var balleX = 0;
var balleY = 0;
var decX = 10;
var decY = 10;
var score = 0;




function MouseEvent(raquette) {
    console.log(raquette);
    document.querySelector("#raquette").style.left = raquette.offsetX + "px";
}


function start (clicker) {
    
document.querySelector("#balle").style.left = raquette.offsetX + "px";

document.querySelector("#cours").addEventListener("mousemove", MouseEvent);
    bougeBalle();
score = 0;
document.querySelector("#score").innerHTML = "score: " + score;
}



function bougeBalle() {
    balleX = balleX + decX;
    balleY = balleY + decY;
    console.log(balleX);

  if (balleX >= 850 || balleX <= 0){
      decX = -decX;
  }
 
  if (balleY >= 550 || balleY <= 0){
      decY = -decY;
  }


document.querySelector("#balle").style.left = balleX + "px";
document.querySelector("#balle").style.top = balleY + "px";
    requestAnimationFrame(bougeBalle);
}
