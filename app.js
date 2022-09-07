const homeText = document.getElementById("home-score");
const guestText = document.getElementById("guest-score");
const rematchBtn = document.querySelector(".rematch");
let winner = document.getElementById("winner");

let homeScore = 0;
let guestScore = 0;

function increaseByOne() {
	homeScore += 1;
	homeText.textContent = homeScore;
}
function increaseByTwo() {
	homeScore += 2;
	homeText.textContent = homeScore;
}
function increaseByThree() {
	homeScore += 3;
	homeText.textContent = homeScore;
}
function increaseByOneG() {
	guestScore += 1;
	guestText.textContent = guestScore;
}
function increaseByTwoG() {
	guestScore += 2;
	guestText.textContent = guestScore;
}
function increaseByThreeG() {
	guestScore += 3;
	guestText.textContent = guestScore;
}
function rematch() {
	homeScore = 0;
	guestScore = 0;
	homeText.textContent = homeScore;
	guestText.textContent = guestScore;
	winner.textContent = "";
}
function endGame() {
	let whoWon = "";
	if (homeScore > guestScore) {
		whoWon += "HOME WINS";
	} else if (guestScore > homeScore) {
		whoWon += "GUEST WINS";
	} else {
		whoWon += "NO GAME FOUND";
	}
	winner.textContent = whoWon;
}
