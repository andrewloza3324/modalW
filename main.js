let openButton = document.querySelector(".button");
let klose = document.querySelector(".close");
let like = document.querySelector(".like");
let modalWindow = document.querySelector(".modal-window");
openButton.addEventListener("click", () => {
  modalWindow.classList.remove("window-close");
  modalWindow.classList.add("modal-open");
});
klose.addEventListener("click", () => {
  modalWindow.classList.remove("modal-open");
  modalWindow.classList.add("window-close");
});
like.addEventListener("click", () => {
  like.classList.remove("l-");
  like.classList.add("l");
});
like.addEventListener("dblclick", () => {
  like.classList.remove("l");
  like.classList.add("l-");
});

// game

let winCounter = 0;
let loseCounter = 0;

let k = document.querySelector(".k");
let n = document.querySelector(".n");
let p = document.querySelector(".p");
let counter = document.querySelector(".counter");

function randomChoise() {
  let computerNum = Math.round((Math.random() + 0.5) * 2);
  if (computerNum == 1) {
    computerNum = "камінь";
  } else if (computerNum == 2) {
    computerNum = "ножиці";
  } else if (computerNum == 3) {
    computerNum = "папір";
  }
  console.log(computerNum);
  return computerNum;
}

function userChoise(event) {
  console.log(event);
  let userChoise;
  if (event.target == k) {
    userChoise = "камінь";
  } else if (event.target == n) {
    userChoise = "ножиці";
  } else if (event.target == p) {
    userChoise = "папір";
  }
  return userChoise;
}

function buttonClick(event) {
  if (userChoise(event) === randomChoise()) {
    winCounter++;
    counter.textContent = winCounter;
  } else {
    loseCounter++;
  }
}

k.addEventListener("click", buttonClick);
n.addEventListener("click", buttonClick);
p.addEventListener("click", buttonClick);
