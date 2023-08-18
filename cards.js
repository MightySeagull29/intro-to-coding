let cl = console.log;

//creates an array of all 52 cards.
let buildDeck = function () {
  let deck = [];
  for (let i = 2; i <= 14; i++) {
    deck.push(createCard(i, "Clubs"));
    deck.push(createCard(i, "Hearts"));
    deck.push(createCard(i, "Diamonds"));
    deck.push(createCard(i, "Spades"));
  }
  return deck;
};

//Builds a single card based on its rank.
let createCard = function (rank, suit) {
  let card = {
    rank: rank,
    suit: suit,
    color: getColor(suit),
    name: getName(rank),
  };
  return card;
};

//Gets the card's name based on its rank.
let getName = function (rank) {
  switch (rank) {
    case 11:
      return "Jack";
      break;
    case 12:
      return "Queen";
      break;
    case 13:
      return "King";
      break;
    case 14:
      return "Ace";
      break;
    // case 3:
    //   return "99";
    //   break;
    default:
      return rank + "";
  }
};

//Gets the card's function based on it's suits.
let getColor = function (suit) {
  let color;
  if (suit === "Clubs" || suit === "Spades") {
    color = "black";
  } else if (suit === "Diamonds" || suit === "Hearts") {
    color = "red";
  }
  return color;
};

let deck = buildDeck();
// console.table(deck);

// let card = deck.splice(Math.random, 1)[0];

//Retreives single card fro the deck.
let dealCard = function (deck) {
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1)[0];
  return card;
};

//provides an array of five cards from the deck
let dealHand = function (deck) {
  return [
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
  ];
};

// (dealHand(deck));
// cl(dealCard(deck));

let createPlayer = function (name, deck) {
  return {
    name: name,
    hand: dealHand(deck),
    wins: 0,
  };
};

let player1 = createPlayer("Cpu1", deck);
cl(player1);
let player2 = createPlayer("Cpu2", deck);
cl(player2);

let pile = [];

let cardDown = function (deck) {
  return dealCard(deck);
};

let readPile = function (pile) {
  return pile.suit + pile.rank;
};
pile.push(cardDown(deck));
cl(readPile(pile[0]));

let pileSuit = pile[0].suit;

let playCards = true;

// cl(player1.hand);
let takeATurn = function (player) {
  for (let i = 0; i < player.hand.length; i++) {
    if (player.hand[i].suit === pile[pile.length - 1].suit) {
      let matchedCard = player.hand.splice(i, 1);
      playCards = true;
      cl(player.name, player.hand);
      pile.push(matchedCard, 0);
      cl(matchedCard);
      playCards = true;
      break;
    } else if (player.hand[i].rank === pile[pile.length - 1].rank) {
      let matchedCard = player.hand.splice(i, 1);
      cl(player.name, player.hand);
      playCards = true;
      pile.push(matchedCard, 0);
      cl(matchedCard);
      playCards = true;
      break;
    } else {
      playCards = false;
    }
  }
};

while (player1.hand.length >= 1 || player2.hand.length >= 1) {
  takeATurn(player1);
  if (playCards === false) {
    player1.hand.push(dealCard(deck));
    playCards = false;
    cl(player1.hand);
  }
  if (player1.hand.length === 0) {
    break;
  }
  // takeATurn(player2);
  // if (playCards === false) {
  //   player2.hand.push(dealCard(deck));
  //   playCards = false;
  // }
  // if (player2.hand.length === 0) {
  //   break;
  // }
}
