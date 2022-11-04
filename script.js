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

clearButton.addEventListener('click', 
                clearGrid); // this will clear the grid container upon clicking

function createGrid(e) {

    boxContainer.style.gridTemplateColumns = `repeat(${e}, 1fr)`
    boxContainer.style.gridTemplateRows = `repeat(${e}, 1fr)`
    // style to make boxes fit evenly

    for (let i = 0; i < (e*e); i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('box'); 
        boxContainer.appendChild(newBox);
        // this will add new boxes based on slider input
    }
}

sizeSlider.addEventListener('input', (e) => {
    // this will listen slider input for value
    clearGrid(); // clear fist
    createGrid(e.target.value); // add boxes based on slider value
    sizeUpdate(e); // update the size display
})






/* 
+ size input will pick a value between 2 and 64
+ function will take this value 
+ based on value*value it will create box divs
+ and will add boxes to sketch container
+ boxes will have a .box class
+ current size will display the box size
- color input will pick a background color for boxes
- clear button will remove the background color




*/