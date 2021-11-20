

let character = document.getElementById("character");
let block = document.getElementById("block");
let counter = 0;
const W = document.querySelector(".W");
const A = document.querySelector(".A");
const S = document.querySelector(".S");
const D = document.querySelector(".D");
const box = document.querySelector(".box");

S.addEventListener("click", () => {
    character.classList.add("a");
    setTimeout(() => {
        character.classList.remove("a");
    }, 1000);
}
);

D.addEventListener("click", () => {
    character.classList.add("animate__animated animate__slideOutRight");
    setTimeout(() => {
        character.classList.remove("animate__animated animate__slideOutRight");
    }, 1000);
}
);


function jump() {
    if (character.classList == "jumper") {
        return
    }
    character.classList.remove ("run");
    character.classList.add("jumper");
    setTimeout(function () {
        character.classList.remove("jumper");
        character.classList.add ("run");
    }, 300);
}

W.addEventListener("click", jump);

const checkDead = setInterval(() => {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
      block.style.animation = "none";
      document.getElementById("GameOver").innerHTML = "Game Over. score: " + Math.floor(counter / 100);
    let newGame = prompt ("New Game? Y/N")
    if (newGame === "N") {
        window.location.replace("https://edgemony.com/");
    }
    else {
      counter = 0;
    }
   
      block.style.animation = "block 1s infinite linear";
  } else {
      counter++;
      document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
  }, 10);
 
