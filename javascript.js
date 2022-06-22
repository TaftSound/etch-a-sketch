const container = document.getElementById('grid-container');
const resetButton = document.getElementById('reset');
const colorToggleButton = document.getElementById('color-draw');
let divsPerSide = 16;
let gridArray = [];
let isDrawing = false;
let colorDraw = false;



createDivGrid();
addDrawingListeners();
resetButton.addEventListener('click', resetSketch);
colorToggleButton.addEventListener('click', toggleColorDraw);



function createEtchDiv(columnNumber, rowNumber) {
    let div = document.createElement('div');
    div.classList.add('etch-div');
    div.style.gridColumn = columnNumber;
    div.style.gridRow = rowNumber;
    container.appendChild(div);
    div.style.backgroundColor = 'rgb(256, 256, 256)';
    div.style.opacity = 1.0;
    divPlacement = `${columnNumber} + ${rowNumber}`;
    return div;
};

function createDivGrid() {
    for (let columnNumber = 1; columnNumber <= divsPerSide; columnNumber++) {
        let columnArray = [];
        gridArray.push(columnArray);
        for (let rowNumber = 1; rowNumber <= divsPerSide; rowNumber++) {
            columnArray.push(createEtchDiv(columnNumber, rowNumber));
        }
    }
}

function addDrawingListeners() {
    window.addEventListener('mousedown', () => { isDrawing = true; });
    window.addEventListener('mouseup', () => {
        if (isDrawing) { isDrawing = false; }
    });
    for (column of gridArray) {
        for (row of column) {
            row.addEventListener('mouseover', (event) => { 
                if (isDrawing) { draw(event.target); }
            });
        }
    }
}

function draw(currentDiv) {
    let currentOpacity = currentDiv.style.opacity;
    if (colorDraw && currentOpacity == 1) {
        currentDiv.style.backgroundColor = randomRgbColor();
    }
    if (currentOpacity > 0) {
        currentOpacity = +currentOpacity - 0.1;
        currentDiv.style.opacity = currentOpacity;
    }
}

function randomColorValue() {
    let randomNumber = Math.floor(Math.random() * (66) + 190);
    return randomNumber;
}

function randomRgbColor() {
    return `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
}

function resetSketch() {
    for (column of gridArray) {
        for (row of column) {
            row.style.backgroundColor = 'rgb(256, 256, 256)';
            row.style.opacity = 1.0;
        }
    }
}

function toggleColorDraw() {
    resetSketch();
    if (colorDraw) { colorDraw = false; }
    else if (!colorDraw) { colorDraw = true; }
}



// Check "pen drag" idea <- have a button that switches to this mode in a single 1x1 grid
    // use mousemove event within grid container to call drawLine() function
        // isDrawing boolean state to see if should actually draw
    // use mousedown + mouseup listeners to only draw when holding clicked
    // on mousedown, set isDrawing variable to true, mouseup sets to false
    // get x and y on mousedown using .offsetX and .offsetY properties
    // create drawing function:
        // use getContext('2d') function to get drawing context in the div and store in variable
        // use beginPath() method of CanvasRenderingContext2D on context
        // set .strokeStyle property of context = 'black'
        // use .moveTo(x, y) function on context to begin a new path
        // use .lineTo(x, y) function on context to create a path from last point to current
        // use .stroke() method on context to actually draw the path made
        // use .closePath() method on context to finish out the stroke <- research if/why is necessary


// Add a button that will allow user to re-set state of divs
    // use a for loop to iterate through divs, setting opacity of each to 0.1
// Add a button that will allow user to replace grid with diff number divs
    // use a function to change divsPerSide value, set conditional limit at 100
    // use a function with for loop to delete all existing divs
    // re-run initial function that creates grid layout
// Implement increased darkening for each additional pass over a div
