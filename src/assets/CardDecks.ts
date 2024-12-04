const cards:any = [
    { id: 1, name: "Ace of Spades", value: 1, image: "https://deckofcardsapi.com/static/img/AS.png" },
    { id: 2, name: "2 of Spades", value: 2, image: "https://deckofcardsapi.com/static/img/2S.png" },
    { id: 3, name: "3 of Spades", value: 3, image: "https://deckofcardsapi.com/static/img/3S.png" },
    { id: 4, name: "4 of Spades", value: 4, image: "https://deckofcardsapi.com/static/img/4S.png" },
    { id: 5, name: "5 of Spades", value: 5, image: "https://deckofcardsapi.com/static/img/5S.png" },
    { id: 6, name: "6 of Spades", value: 6, image: "https://deckofcardsapi.com/static/img/6S.png" },
    { id: 7, name: "7 of Spades", value: 7, image: "https://deckofcardsapi.com/static/img/7S.png" },
    { id: 8, name: "8 of Spades", value: 8, image: "https://deckofcardsapi.com/static/img/8S.png" },
    { id: 9, name: "9 of Spades", value: 9, image: "https://deckofcardsapi.com/static/img/9S.png" },
    { id: 10, name: "10 of Spades", value: 10, image: "https://deckofcardsapi.com/static/img/0S.png" },
    { id: 11, name: "Jack of Spades", value: 11, image: "https://deckofcardsapi.com/static/img/JS.png" },
    { id: 12, name: "Queen of Spades", value: 12, image: "https://deckofcardsapi.com/static/img/QS.png" },
    { id: 13, name: "King of Spades", value: 13, image: "https://deckofcardsapi.com/static/img/KS.png" },
    { id: 14, name: "Ace of Hearts", value: 1, image: "https://deckofcardsapi.com/static/img/AH.png" },
    { id: 15, name: "2 of Hearts", value: 2, image: "https://deckofcardsapi.com/static/img/2H.png" },
    { id: 16, name: "3 of Hearts", value: 3, image: "https://deckofcardsapi.com/static/img/3H.png" },
    { id: 17, name: "4 of Hearts", value: 4, image: "https://deckofcardsapi.com/static/img/4H.png" },
    { id: 18, name: "5 of Hearts", value: 5, image: "https://deckofcardsapi.com/static/img/5H.png" },
    { id: 19, name: "6 of Hearts", value: 6, image: "https://deckofcardsapi.com/static/img/6H.png" },
    { id: 20, name: "7 of Hearts", value: 7, image: "https://deckofcardsapi.com/static/img/7H.png" },
    { id: 21, name: "8 of Hearts", value: 8, image: "https://deckofcardsapi.com/static/img/8H.png" },
    { id: 22, name: "9 of Hearts", value: 9, image: "https://deckofcardsapi.com/static/img/9H.png" },
    { id: 23, name: "10 of Hearts", value: 10, image: "https://deckofcardsapi.com/static/img/0H.png" },
    { id: 24, name: "Jack of Hearts", value: 11, image: "https://deckofcardsapi.com/static/img/JH.png" },
    { id: 25, name: "Queen of Hearts", value: 12, image: "https://deckofcardsapi.com/static/img/QH.png" },
    { id: 26, name: "King of Hearts", value: 13, image: "https://deckofcardsapi.com/static/img/KH.png" },
    { id: 27, name: "Ace of Diamonds", value: 1, image: "https://deckofcardsapi.com/static/img/AD.png" },
    { id: 28, name: "2 of Diamonds", value: 2, image: "https://deckofcardsapi.com/static/img/2D.png" },
    { id: 29, name: "3 of Diamonds", value: 3, image: "https://deckofcardsapi.com/static/img/3D.png" },
    { id: 30, name: "4 of Diamonds", value: 4, image: "https://deckofcardsapi.com/static/img/4D.png" },
    { id: 31, name: "5 of Diamonds", value: 5, image: "https://deckofcardsapi.com/static/img/5D.png" },
    { id: 32, name: "6 of Diamonds", value: 6, image: "https://deckofcardsapi.com/static/img/6D.png" },
    { id: 33, name: "7 of Diamonds", value: 7, image: "https://deckofcardsapi.com/static/img/7D.png" },
    { id: 34, name: "8 of Diamonds", value: 8, image: "https://deckofcardsapi.com/static/img/8D.png" },
    { id: 35, name: "9 of Diamonds", value: 9, image: "https://deckofcardsapi.com/static/img/9D.png" },
    { id: 36, name: "10 of Diamonds", value: 10, image: "https://deckofcardsapi.com/static/img/0D.png" },
    { id: 37, name: "Jack of Diamonds", value: 11, image: "https://deckofcardsapi.com/static/img/JD.png" },
    { id: 38, name: "Queen of Diamonds", value: 12, image: "https://deckofcardsapi.com/static/img/QD.png" },
    { id: 39, name: "King of Diamonds", value: 13, image: "https://deckofcardsapi.com/static/img/KD.png" },
    { id: 40, name: "Ace of Clubs", value: 1, image: "https://deckofcardsapi.com/static/img/AC.png" },
    { id: 41, name: "2 of Clubs", value: 2, image: "https://deckofcardsapi.com/static/img/2C.png" },
    { id: 42, name: "3 of Clubs", value: 3, image: "https://deckofcardsapi.com/static/img/3C.png" },
    { id: 43, name: "4 of Clubs", value: 4, image: "https://deckofcardsapi.com/static/img/4C.png" },
    { id: 44, name: "5 of Clubs", value: 5, image: "https://deckofcardsapi.com/static/img/5C.png" },
    { id: 45, name: "6 of Clubs", value: 6, image: "https://deckofcardsapi.com/static/img/6C.png" },
    { id: 46, name: "7 of Clubs", value: 7, image: "https://deckofcardsapi.com/static/img/7C.png" },
    { id: 47, name: "8 of Clubs", value: 8, image: "https://deckofcardsapi.com/static/img/8C.png" },
    { id: 48, name: "9 of Clubs", value: 9, image: "https://deckofcardsapi.com/static/img/9C.png" },
    { id: 49, name: "10 of Clubs", value: 10, image: "https://deckofcardsapi.com/static/img/0C.png" },
    { id: 50, name: "Jack of Clubs", value: 11, image: "https://deckofcardsapi.com/static/img/JC.png" },
    { id: 51, name: "Queen of Clubs", value: 12, image: "https://deckofcardsapi.com/static/img/QC.png" },
    { id: 52, name: "King of Clubs", value: 13, image: "https://deckofcardsapi.com/static/img/KC.png" },
  ];


  export function shuffleCards(){
    for (let i = cards.length-1; i> 0; i--){
        const randomIndex = Math.floor(Math.random()*(i+1));
        [cards[i], cards[randomIndex]] = [cards[randomIndex],cards[i]]
    }
    return cards;
  }
  
  export function getBackofCard(){
    return  {
        id: 0, // ID can be set to 0 or any identifier you prefer
        name: "Card Back",
        value: null, // No value since it's the back of the card
        image: "https://deckofcardsapi.com/static/img/back.png", // Example back image URL
      };
  }