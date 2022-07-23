const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
let playerPoints = 0
let dealerPoints = 0
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    img: `images/${rank}_of_${suit}.png`,
    suit: suit,
    pointValue: rank.length > 2 ? 10 : rank === 10 ? 10 : rank
  };
  deck.push(card);
};
for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}
function dealing(deck){
  //created player hand card 1
  let img1=document.createElement("img");
  newCard1=deck.pop();
  img1.setAttribute('src',newCard1.img)
  playerHand.appendChild(img1)
  playerPoints+=newCard1.pointValue

  console.log(playerPoints)
  document.getElementById("player-points").innerHTML=playerPoints

  //created dealer hand card 1
  let img2=document.createElement("img");
  newCard2=deck.pop();
  img2.setAttribute('src',newCard2.img)
  dealerHand.appendChild(img2)
  dealerPoints+=newCard2.pointValue
console.log(dealerHand)
document.getElementById("dealer-points").innerHTML=dealerPoints
}
function hitMe(deck){
  //hit button for player
  let img3=document.createElement("img");
  newCard3=deck.pop();
  img3.setAttribute('src', newCard3.img)
  playerHand.appendChild(img3)
  playerPoints+=newCard3.pointValue
  document.getElementById("player-points").innerHTML=playerPoints
}
function hitdealer(deck){
  //hit button for player
  let img4=document.createElement("img");
  newCard4=deck.pop();
  img4.setAttribute('src', newCard4.img)
  dealerHand.appendChild(img4)
  dealerPoints+=newCard4.pointValue
  document.getElementById("dealer-points").innerHTML=dealerPoints
}
function shuffle(deck) {
  var currentIndex = deck.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}

window.addEventListener("DOMContentLoaded", () => {
 // Execute after page load
  //setting up key variables for page to work
  shuffle(deck);
  let deal=document.querySelector('#deal-button');
  let hit=document.querySelector('#hit-button');
  let stand=document.querySelector('#stand-button');
  deal.addEventListener('click', (e)=> {
    dealing(deck)
  })
  hit.addEventListener('click', (e)=> {
    hitMe(deck)

  })
  stand.addEventListener('click', (e)=> {
    hitdealer(deck)
  })
});