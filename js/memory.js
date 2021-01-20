class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked;
    if (card1 !== card2) return false;
    this.pairsGuessed++;
    return true;
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) return true;
    return false;
  }
}
