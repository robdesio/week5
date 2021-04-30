// Get a reference to the "click me" button 
let clickMeButton = document.querySelector(`.click-me`)

// Event Listener for the "click me" button
clickMeButton.addEventListener(`click`, async function(event) {
  // Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)

  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`
})

//get a reference to the "add a movie" link
let addMovieLink = document.querySelector(`.add-movie`)

//event listener for the "add a movie link"
addMovieLink.addEventListener(`click`, async function(event) {
  // Prevent link's default behavior
  event.preventDefault()

  // Get a reference to the bulleted list of movies
  let movieList = document.querySelector(`.movies-to-watch`)

  // Add an new list item to the bulleted list of movies
  movieList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
  `)
})

//Get a reference to the "zoom image" button
let zoomImageButton = document.querySelector(`.zoom-image`)

// Event listener for "zoom image" button
zoomImageButton.addEventListener(`click`, async function(event){
  // Get a reference to the image
  let image = document.querySelector(`img`)
  // Add the `border-pink-500` class to the image element
  image.classList.add(`border-pink-500`)

  //Make the image larger
  image.classList.toggle(`w-96`)
  image.classList.toggle(`w-full`)

})

//Get a reference to the change image button
let changeImageButton = document.querySelector(`.change-image`)

// Event Listener
changeImageButton.addEventListener(`click`, async function(event) {
  // Get a reference to the image
  let image = document.querySelector(`img`)

  image.setAttribute(`src`, `../images/grogu2.jpg`)

})

// Get a reference to the "say hi" button
let sayHiButton = document.querySelector(`.say-hi`)

// Event Listener for "say hi" button
sayHiButton.addEventListener(`click`, async function(event) {
  // Stop the default event
    event.preventDefault()

  // Get a reference to the first name inpurt
  let firstNameInput = document.querySelector(`#first-name`)
  
  // Get the value that user entered in the first name input
  let firstName = firstNameInput.value

  // Get a reference to the "greet element"

  let greetElement = document.querySelector(`.greet`)

  // Check that first name has a value
  if (firstName.length > 0) {

  // Create a sentence to put in the "greet" element
  let sentence = `Hi, ${firstName}!`

  // Replace the greet element's content with sentence
  greetElement.innerHTML = sentence
  } else {
    greetElement.innerHTML = ``
  }
})