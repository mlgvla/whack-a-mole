
// DOM variables

// get all the divs with class "hole"
const holes = document.querySelectorAll(".hole")

// get all the divs with class "mole"
const moles = document.querySelectorAll(".mole")

// get the button with the class "start"
const startBtn = document.querySelector(".startBtn")

// get the scoreboard - the div with the class "score"
const scoreboard = document.querySelector(".score")

// Variables

let lastHole
let timeUp = false
let score = 0

// Event Listeners

// attach a click event listener to the startBtn that uses the  callback function that starts the game
startBtn.addEventListener("click", startGame)

// attach a click event to EACH mole that uses the callback function that whacks a mole
moles.forEach(mole => mole.addEventListener('click', whack))

// Functions

function randomTime(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes) {
   const idx = Math.floor(Math.random() * holes.length)
   const hole = holes[idx]
   if (hole === lastHole) {
      return randomHole(holes)
   }
   lastHole = hole
   return hole
}


function peep() {
   const time = randomTime(500, 1500)
   const hole = randomHole(holes)
   hole.classList.add('up')
   setTimeout(() => {
      hole.classList.remove('up')
      if(!timeUp) peep()
   }, time);
}

// Callback Functions

function startGame() {
   scoreboard.textContent = 0
   timeUp = false
   score = 0
   //what function needs to be called so the moles can start to appear?
   peep()
   setTimeout(() => {
      timeUp = true
   }, 20000)
}

function whack(e) {
   if (!e.isTrusted) return // we only want user clicks - not bot clicks!
   score++
   e.target.parentNode.classList.remove("up") 
   scoreboard.textContent = score
}
