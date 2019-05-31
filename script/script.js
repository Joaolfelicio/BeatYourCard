/* CARD WAR */
/*
    Card War is a game were two player pick a random card from a deck of card
    And the winner is the one that receive the highest rank.
    !WE WILL START BY USING ONLY THE hearts!

    1 - CREATE A DECK
        A - Create two array : 
            - One for the Rank (2, 3, 4, 5, 6, 7, 8, 9, 10, j, q, k, a)
            - Another (empty) for the deck []
        B - Create a loops that will build the 13 cards hearts deck
            - each card will be represented by an object with two properties(rank, suit): the rank will always be "hearts",
            - this card object is pushed into the deck array 

        You should end up with a deck array like this    
        deck = [
            {
                rank: "2",
                suit: "hearts"
            },
            {
                rank: "3",
                suit: "hearts"
            }[.. and 11 more ..]
        ]
    2 - SHUFFLE THE DECK : They are many way to shuffle a deck 
    One possible solution is to loop 13 times and exchange the current card of the deck  with a randomly picked one
        A - Pick the card
            - choose a random number from 0 to 12 using the function from the lib file called rndNumber(12);
            - I take the corresponding card in the deck
            - exchange positions
    
    3 - Pick 2 cards by shifting or poping then from deck
    
    4 - Find the winner by comparing the ranks

    5 - SHOW THE RESULT ON THE SCREEN using these two functions :
    showCard(1, 'clubs', 'a');
        playerId (1 or 2), 
        Suit (hearts, diamonds, clubs, spades), 
        Rank (2, 3, 4, 5, 6, 7, 8, 9, 10, j, q, k, a)
    win(1);
        playerId (1 or 2) - 0 means draw

    BONUS - now we want a TRUE DECK OF CARD : 
        Adapt you code to handlle 52 card of 4 differents suits
*/

const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];
const suits = ["hearts", "diamonds", "clubs", "spades"]
const deck = [];

let obj = {};

for (const suit of suits) {

    for (const card of cardValue) {

        obj = {
            cardRank: card,
            cardSuit: suit,
        }
        deck.push(obj);
    }
}

for (let i = 0; i < 52; i++) {


    let temp = deck[i];
    let picked = deck[rndNumber(52)];

    deck[i] = picked;
    deck[deck.indexOf(picked)] = temp;
}
function pickWinner() {

    let firstCard = deck.pop();
    let secondCard = deck.pop();
    let firstCardPos = cardValue.indexOf(firstCard.cardRank);
    let secondCardPos = cardValue.indexOf(secondCard.cardRank);
    if (firstCardPos > secondCardPos) {
        showCard(1, firstCard.cardSuit, firstCard.cardRank);
        showCard(2, secondCard.cardSuit, secondCard.cardRank);
        win(1);

    } else if (firstCardPos < secondCardPos) {
        showCard(1, firstCard.cardSuit, firstCard.cardRank);
        showCard(2, secondCard.cardSuit, secondCard.cardRank);
        win(2);

    } else {
        showCard(1, firstCard.cardSuit, firstCard.cardRank);
        showCard(2, secondCard.cardSuit, secondCard.cardRank);
        win(0);
    }
}


pickWinner();

const playAgainBtn = document.querySelector("#play-again");

playAgainBtn.addEventListener('click', pickWinner);

