//get all the buttons and the image by their class names
const previousButton = document.querySelector('.previous-button');

const nextButton = document.querySelector('.next-button');

const image = document.querySelector('.image');

//the images to be displayed have been stored in an array
let images = [{
image: 'images/image-1.jpg'
},{
  image: 'images/image-2.jpg'
}, {
  image: 'images/image-3.jpg'
}, {
  image: 'images/image-4.jpg'
}, {
  image: 'images/image-5.jpg'
}, {
  image: 'images/image-6.jpg'
}, {
  image: 'images/image-7.jpg'
}];

//display the first image when the page first loads
let i = 0;
let currentImage = `
    <div class="image" >
    <img src="${images[i].image}">
    </div>
    `;
    image.innerHTML = currentImage;

//fucntion to handle either to display the next image or the previous image
function updateFunction(){
  let counter = images[i];
      let nextImage = `
      <div class="image" >
      <img src="${images[i].image}">
      </div>
      `;
      image.innerHTML = nextImage;
}

//display the next image when the next-button is clicked
nextButton.addEventListener('click', () => {
  previousButton.disabled = false;
    i ++;
    if(i === images.length-1){
      updateFunction();
      nextButton.disabled = true;
    }
    else{
      updateFunction();
    }
});

//set the previous-button disability to true when the page first loads
if(i === 0){
  previousButton.disabled = true;
}

//display the previous image when the previous-button is clicked
previousButton.addEventListener('click', () => {
    nextButton.disabled = false;
    i --;
    if(i === 0){
      updateFunction();
      previousButton.disabled = true;
    }
    else if(i >= 0){
      updateFunction();
    }
});