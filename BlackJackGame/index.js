let cards = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 1
    }
    else {
        return randomNumber
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want a new card? "
    }
    else if (sum === 21) {
        message = "You`ve Black Jack"
        hasBlackJack = true
    }
    else {
        message = "You`re out of the game"
        isAlive = false
    }
    messageEl.textContent=message
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card= Math.floor(Math.random() * 13) + 1
        sum+=card
        cards.push(card)
        renderGame()

    } 
}


