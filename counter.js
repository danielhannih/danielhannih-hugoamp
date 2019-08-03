const startUI = document.querySelector("[data-start-ui]");
const counterUI = document.querySelector("[data-counter-ui]");
const btnStart = document.querySelector("[data-btn-start]");
const btnRestart = document.querySelector("[data-btn-restart]");

const playerRadios = document.getElementsByName("players");
const customHealthRadio = document.querySelector("#health-4");

const playerDivs = document.querySelectorAll(".player");


let playerCount = 2;
let startingHealth = 20;

// Player 1
const lifeP1 = document.querySelector("[data-life-1]");
const plusP1 = document.querySelector("[data-plus-1]");
const minusP1 = document.querySelector("[data-minus-1]");
let currentLifeP1 = startingHealth;

// Player 2
const lifeP2 = document.querySelector("[data-life-2]");
const plusP2 = document.querySelector("[data-plus-2]");
const minusP2 = document.querySelector("[data-minus-2]");
let currentLifeP2 = startingHealth;

// Player 3
const lifeP3 = document.querySelector("[data-life-3]");
const plusP3 = document.querySelector("[data-plus-3]");
const minusP3 = document.querySelector("[data-minus-3]");
let currentLifeP3 = startingHealth;

// Player 4
const lifeP4 = document.querySelector("[data-life-4]");
const plusP4 = document.querySelector("[data-plus-4]");
const minusP4 = document.querySelector("[data-minus-4]");
let currentLifeP4 = startingHealth;

// Player 5
const lifeP5 = document.querySelector("[data-life-5]");
const plusP5 = document.querySelector("[data-plus-5]");
const minusP5 = document.querySelector("[data-minus-5]");
let currentLifeP5 = startingHealth;

// Player 6
const lifeP6 = document.querySelector("[data-life-6]");
const plusP6 = document.querySelector("[data-plus-6]");
const minusP6 = document.querySelector("[data-minus-6]");
let currentLifeP6 = startingHealth;


function gotoCounter() {
  playerCount = document.querySelector('input[name="players"]:checked').value;
  startingHealth = document.querySelector('input[name="health"]:checked').value;
  if (startingHealth == "x") {
    startingHealth = document.querySelector('input[class="custom-health"]').value;
  }
  if (playerCount < 6) {
    playerDivs[5].style.setProperty("display", "none");
    if (playerCount < 5) {
    playerDivs[4].style.setProperty("display", "none");
  }
  }
  document.documentElement.style.setProperty("--players", playerCount);

  // Player 1
  lifeP1.innerHTML = startingHealth;
  currentLifeP1 = startingHealth;

  // Player 2
  lifeP2.innerHTML = startingHealth;
  currentLifeP2 = startingHealth;

  // Player 3
  lifeP3.innerHTML = startingHealth;
  currentLifeP3 = startingHealth;

  // Player 4
  lifeP4.innerHTML = startingHealth;
  currentLifeP4 = startingHealth;

  // Player 5
  lifeP5.innerHTML = startingHealth;
  currentLifeP5 = startingHealth;

  // Player 6
  lifeP6.innerHTML = startingHealth;
  currentLifeP6 = startingHealth;
}


// Player 1
function upP1() {
  currentLifeP1++;
  lifeP1.innerHTML = currentLifeP1;
}

function downP1() {
  currentLifeP1--;
  lifeP1.innerHTML = currentLifeP1;
}

plusP1.addEventListener("click", upP1);
minusP1.addEventListener("click", downP1);

// Player 2
function upP2() {
  currentLifeP2++;
  lifeP2.innerHTML = currentLifeP2;
}

function downP2() {
  currentLifeP2--;
  lifeP2.innerHTML = currentLifeP2;
}

plusP2.addEventListener("click", upP2);
minusP2.addEventListener("click", downP2);

// Player 3
function upP3() {
  currentLifeP3++;
  lifeP3.innerHTML = currentLifeP3;
}

function downP3() {
  currentLifeP3--;
  lifeP3.innerHTML = currentLifeP3;
}

plusP3.addEventListener("click", upP3);
minusP3.addEventListener("click", downP3);

// Player 4
function upP4() {
  currentLifeP4++;
  lifeP4.innerHTML = currentLifeP4;
}

function downP4() {
  currentLifeP4--;
  lifeP4.innerHTML = currentLifeP4;
}

plusP4.addEventListener("click", upP4);
minusP4.addEventListener("click", downP4);

// Player 5
function upP5() {
  currentLifeP5++;
  lifeP5.innerHTML = currentLifeP5;
}

function downP5() {
  currentLifeP5--;
  lifeP5.innerHTML = currentLifeP5;
}

plusP5.addEventListener("click", upP5);
minusP5.addEventListener("click", downP5);

// Player 6
function upP6() {
  currentLifeP6++;
  lifeP6.innerHTML = currentLifeP6;
}

function downP6() {
  currentLifeP6--;
  lifeP6.innerHTML = currentLifeP6;
}

plusP6.addEventListener("click", upP6);
minusP6.addEventListener("click", downP6);



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function appInit() {
  let heightUI = window.innerHeight;
  let widthUI = window.innerWidth;
  document.documentElement.style.setProperty("--h", heightUI + "px");
  document.documentElement.style.setProperty("--w", widthUI + "px");
}

function restartGame() {
  location.reload();
}


document.addEventListener("DOMContentLoaded", appInit);
window.addEventListener("orientationchange", appInit);
window.addEventListener("resize", appInit);
btnStart.addEventListener("click", gotoCounter);
btnRestart.addEventListener("click", restartGame);
