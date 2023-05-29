const previousButton = document.querySelector('.previous-button');

const nextButton = document.querySelector('.next-button');

const card = document.querySelector('.card');

//the cards to be displayed have been stored in an array
let cards = [{
  name: 'First Card',
  'background-color': 'Brown',
  color: 'White'
},{
  name: 'Second Card',
  'background-color': 'Black',
  color: 'White'
}, {
  name: 'Third Card',
  'background-color': 'Green',
  color: 'Black'
}, {
  name: 'Fourth Card',
  'background-color': '#008080',
  color: 'Black'
}, {
  name: 'Fifth Card',
  'background-color': 'Blue',
  color: 'White'
}, {
  name: 'Sixth Card',
  'background-color': 'darkorange',
  color: 'Black'
}];

//display the first card when the page first loads
let i = 0;
let currentCard = `
    <div class="card" style="background-color: ${cards[i]["background-color"]}; color: ${cards[i].color}">
       ${cards[i].name}
    </div>
    `;
    card.innerHTML = currentCard;

//fucntion to handle either to display the next card or the previous card
function updateFunction(){
  let counter = cards[i];
      let nextCard = `
      <div class="card" style="background-color: ${counter["background-color"]}; color: ${counter.color};">
        ${counter.name}
      </div>
      `;
      card.innerHTML = nextCard;
}

//display the next card when the next-button is clicked
nextButton.addEventListener('click', () => {
  previousButton.style.visibility = 'visible';
    i ++;
    if(i === 5){
      updateFunction();
      nextButton.style.visibility = 'collapse';
    }
    else{
      updateFunction();
    }
});

//set the visibility of previous-button to collapse when the page first loads
if(i === 0){
  previousButton.style.visibility = 'collapse';
}

//display the previous card when the previous-button is clicked
previousButton.addEventListener('click', () => {
    nextButton.style.visibility = 'visible';
    i --;
    if(i === 0){
      updateFunction();
      previousButton.style.visibility = 'collapse';
    }
    else if(i >= 0){
      updateFunction();
    }
});