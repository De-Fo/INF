let cardsEl = document.getElementById("Cards")
let sumEl = document.getElementById("Sum")
let messageEl = document.getElementById("message-el")
let chipsPlEl = document.getElementById("chipspl-el")


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

var name = window. prompt("Enter your name: ");
let player = {
	Chips: 100,
	Name: name
}

	chipsPlEl.textContent = player.Name + ": " + player.Chips + "$"


function getRandomCard(){
	let randomNumber = Math.floor(Math.random() * 10) + 1
	if (randomNumber > 10){
		return 10
	}

	else if (randomNumber === 1) {
		return 11
	}

	else {
		return randomNumber
	}

}

function startGame(){
	if (player.Chips >= 10) {
	GAMEIT()		
	}
	else {
		alert("You do not have any money!")
		window.close();
	}

}

	function GAMEIT(){
		isAlive = true
		let firstCard = getRandomCard()
		let secondCard = getRandomCard()
		sum = firstCard + secondCard
		cards = [firstCard, secondCard]
		hasBlackJack = false
		player.Chips -= 10
		renderGame()
	}



function renderGame(){


	cardsEl.textContent = "Cards: "

for (let i = 0; i < cards.length; i++) {
	cardsEl.textContent += cards[i] + ", "
}

	sumEl.textContent = ("Sum: ") + sum
	if (sum <= 20) {
    message = "Do you want to draw a new card?"
} 

	else if (sum === 21) {
    message = "You've Won 100$!"
    hasBlackJack = true
   	player.Chips += 110

} 

	else {
    message = "You have lost 10$!"
    isAlive = false
    

}
	messageEl.textContent = message
	chipsPlEl.textContent = player.Name + ": " + player.Chips + "$"

}






function newCard() {

	if (isAlive === true && hasBlackJack === false) {
	message = "Drawing a new card from the deck!"

	let card = getRandomCard()
	sum += card
	cards.push(card)

	renderGame()
}
}

