const sizeDisplay = document.getElementById('current-size');
const sizeSlider = document.getElementById('size-input');
const colorInput = document.getElementById('color-input');
const clearButton = document.getElementById('clear-button');
const boxContainer = document.getElementById('sketch-container');


function sizeUpdate(e) {
    sizeDisplay.innerHTML = `${e.target.value} x ${e.target.value}` 
    // size update function
}

function clearGrid() {
    boxContainer.innerHTML = ''; // to clear up grid container
}

clearButton.addEventListener('click', clearGrid); 
    // this will clear the grid container upon clicking


function createGrid(e) {

    boxContainer.style.gridTemplateColumns = `repeat(${e}, 1fr)`
    boxContainer.style.gridTemplateRows = `repeat(${e}, 1fr)`
    // style to make boxes fit evenly

    for (let i = 0; i < (e*e); i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('box'); 
        
        newBox.addEventListener('mouseover', draw)
        //this line will run draw function on mousemove

        boxContainer.appendChild(newBox);
        // this will add new boxes based on slider input
    }
}

sizeSlider.addEventListener('input', (e) => {
    // this will listen slider input for value
    clearGrid(); // clear the grid fist
    createGrid(e.target.value); // add boxes based on slider value
    sizeUpdate(e); // update the size display
})

let currentColor = '#000';

colorInput.addEventListener('change', (e) => {
        currentColor = e.target.value;
}) // this will change drawing color

const rainbowButton = document.getElementById('rainbow');

rainbowButton.addEventListener('click', (e) => {
    rainbowButton.classList.toggle('active')
}) // this will activate rainbow mode 


let mouseDown = false // this variable will check if mouse is clicked
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function draw() {
    if (!mouseDown) return; //if it isn't clicked, function will not run
    if (rainbowButton.classList.contains('active')) {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        currentColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        return this.style.backgroundColor = currentColor; 
        // if rainbow mode is active, color will be dynamic
    }
    if (!rainbowButton.classList.contains('active')) {
        this.style.backgroundColor = currentColor;
        // if rainbow isn't active, color will be static
    }
    // this will change the background color if mouse moves while clicked
}


window.onload = () => {
    createGrid(16);
}