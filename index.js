

let addHomePoints = document.getElementById("home-points")
let addAwayPoints = document.getElementById("guest-points")


let homePoints = 0
let awayPoints = 0
function addOne() {
    homePoints += 1
    addHomePoints.textContent = homePoints
}

function addTwo() {
    homePoints += 2
    addHomePoints.textContent = homePoints
}

function addThree() {
    homePoints += 3
    addHomePoints.textContent = homePoints
}

// Away


function awayAddOne() {
    awayPoints += 1
    addAwayPoints.textContent = awayPoints
}

function awayAddTwo() {
    awayPoints += 2
    addAwayPoints.textContent = awayPoints
}

function awayAddThree() {
    awayPoints += 3
    addAwayPoints.textContent = awayPoints
}

function resetPoints() {
    addHomePoints.textContent = 0
    addAwayPoints.textContent = 0
    homePoints = 0
    awayPoints = 0
}