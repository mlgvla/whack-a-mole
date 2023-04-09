// DOM variables

// 1. get ALL the divs with class "hole"

const holes = ""

// 2. get ALL the divs with class "mole"

const moles = ""

// 3. get the button with the class "start"

const startBtn = ""

// 4. get the scoreboard - the div with the class "score"
const scoreboard = ""


// Variables

let lastHole
let timeUp = false
let score = 0

// Event Listeners

// 5. attach a click event listener to the startBtn that uses the  callback function that starts the game


// 6. attach a click event to EACH mole that uses the callback function that whacks a mole


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
   hole.classList.add("up")
   setTimeout(() => {
      hole.classList.remove("up")
      if (!timeUp) peep()
   }, time)
}

// Callback Functions

function startGame() {
   scoreboard.textContent = 0
   timeUp = false
   score = 0
   // 7. what function needs to be called so the moles can start to appear?
   // ??
   setTimeout(() => {
      timeUp = true
   }, parseInt(10000))
}

function whack(e) {
   if (!e.isTrusted) return // we only want user clicks - not bot clicks!
   score++
   e.target.parentNode.classList.remove("up")
   scoreboard.textContent = score
}

// BONUS #1

// Selecting the image - using the "change" event

// 1. Get all the radio buttons by the name attribute

const radioBtns = ""

// 2. For each radio button, add an event listener that uses the "change event"
   // The event handler should use the target value to determine which image
   // to invoke the changeImage function with

/// YOUR CODE HERE



function changeImage(imageURL) {
   moles.forEach((mole) => {
      mole.style.background = `url(${imageURL}) bottom center no-repeat`
      mole.style.backgroundSize = "50%"
   })
}


