let cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}
];

let cardsInPlay = [];

function flipCard(){
	const cardId = this.getAttribute('data-id');
	let card = cards[cardId];
	this.setAttribute('src', card.cardImage);
	cardsInPlay.push(card.rank);
	if(cardsInPlay.length === 2){
		checkForMatch();
	}
}

function createBoard(){
	for(let i = 0; i < cards.length; i++){
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		const parent = document.getElementById('game-board');
		parent.appendChild(cardElement);
	}
}

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
	}
}

function reload() {
	location.reload();
}

createBoard();

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', reload);