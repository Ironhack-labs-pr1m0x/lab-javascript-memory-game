const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
];

// •• CONNECT TO DOM •• //
const pairsClicked = document.getElementById('pairs-clicked');
const pairsGuessed = document.getElementById('pairs-guessed');

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  // ▼ Shuffe cards when starting game //
  memoryGame.shuffleCards();

  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (ev) => {
      // ▼ Only allow action, when  memoryGame.pickedCards.length !== 2 //
      if (memoryGame.pickedCards.length === 2) return;

      // ▼ Push the card (html) into [memoryGame.pickedCards] //
      memoryGame.pickedCards.push(ev.target.parentNode);

      // ▼ Toggle the clicked card via parentElement
      ev.target.parentNode.classList.toggle('turned');

      // ▼ If memoryGame.pickedCards.length === 2 start comparing cards
      if (memoryGame.pickedCards.length === 2) {
        // ▼ If user clicked 2 cards increase memoryGame.pairsClicked
        memoryGame.pairsClicked++;
        // ▼ Show memoryGame.pairsClicked in html
        pairsClicked.innerText = memoryGame.pairsClicked;

        // ▼ If comparison is true run if
        if (
          memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName)
        ) {
          // ▼ Show memoryGame.pairsClicked in html
          pairsGuessed.innerText = memoryGame.pairsGuessed;

          // ▼ Empty [memoryGame.pickedCards] to be able to click cards again
          memoryGame.pickedCards = [];

          // ▼ End game if isFinished() returnes true
          if (memoryGame.isFinished()) {
            setTimeout(() => {
              alert('YOU WON');
              location.reload();
            }, 500);
          }
        } else {
          // ▲ If comparison is false run else //
          // ▼ Turn cards with delay
          setTimeout(() => {
            // ▼ Turn both cards back
            memoryGame.pickedCards.forEach((el) => {
              el.classList.toggle('turned');
            });
            // ▼ Empty [memoryGame.pickedCards] to be able to click cards again
            memoryGame.pickedCards = [];
          }, 500);
        }
      }
    });
  });
});
