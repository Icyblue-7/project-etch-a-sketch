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

let mouseDown = false // this variable will check if mouse is clicked
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function draw() {
    if (!mouseDown) return; //if it isn't clicked, function will not run

    this.style.backgroundColor = 'black' 
    // this will change the background color if mouse moves while clicked
}


/* 

- color input will pick a background color for boxes



*/