var cross = true;
var score = 0;

var audio = new Audio('music.mp3');
var audiogo = new Audio('gameover.mp3');
setTimeout(() => {
  audio.play();
},1000);

document.onkeydown = function (e) {
  console.log("key code is:", e.keyCode);

  if (e.keyCode == 38) {
    var mario = document.querySelector(".mario");
    mario.classList.add("animateMario");
    setTimeout(() => {
      mario.classList.remove("animateMario");
    }, 500);
  }

  if (e.keyCode == 39) {
    var mario = document.querySelector(".mario");
    var mariox = parseInt(
      window.getComputedStyle(mario, null).getPropertyValue("left")
    ); //mario ni computing left value aapse;
    mario.style.left = mariox + 300 + "px";
  }
  if (e.keyCode == 37) {
    var mario = document.querySelector(".mario");
    var mariox = parseInt(
      window.getComputedStyle(mario, null).getPropertyValue("left")
    ); //mario ni computing left value aapse;//right
    mario.style.left = mariox - 112 + "px";
  }
  // if((e.keyCode == 37)&&(e.keyCode = 39)) {
  //   var mario = document.querySelector(".mario");
  //   var mariox =parseInt( window.getComputedStyle(mario,null).getPropertyValue('left'));//mario ni computing left value aapse;
  //   mario.style.left = (mariox+112)+'px';
  //   mario.style.top=(mario+112)+'px';
  // }
};

setInterval(() => {
  var mario = document.querySelector(".mario");
  var gameOver = document.querySelector(".gameOver");
  var dragon = document.querySelector(".dragon");

  var mx = parseInt(
    window.getComputedStyle(mario, null).getPropertyValue("left")
  ); //mario ni computing left value aapse;
  var my = parseInt(
    window.getComputedStyle(mario, null).getPropertyValue("top")
  ); //mario ni computing top value aapse;
  var ox = parseInt(
    window.getComputedStyle(dragon, null).getPropertyValue("left")
  ); //dragon ni computing left value aapse;
  var oy = parseInt(
    window.getComputedStyle(dragon, null).getPropertyValue("top")
  ); //dragon ni computing top value aapse;

  var offsetX = Math.abs(mx - ox);
  var offsetY = Math.abs(my - oy);

  //   console.log(offsetX,offsetY);
  if (offsetX < 93 && offsetY < 52) {
    // gameOver.style.visibility='visible';

    var gameOver = (document.getElementById("gameOver").style.visibility =
      "visible");
audiogo.play();
setTimeout(() => {
  audiogo.pause();
},1000);

    var dragon = document.querySelector(".dragon");
    dragon.classList.remove("animateDragon");
    mario.classList.remove("mario");
  } else if (offsetX < 350 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
  }
  //for speed
  setTimeout(() => {
    var aniDur = parseFloat(
      window
        .getComputedStyle(dragon, null)
        .getPropertyValue("animation-duration")
    );
    var newDur = aniDur - 0.01;
    dragon.style.animationDuration = newDur + "s";
  }, 100);
}, 500);

function updateScore(score) {
  scoreCont.innerHTML = "Your Score:" + score;
}
