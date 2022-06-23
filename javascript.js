const container = document.getElementById('grid-container');
const resetButton = document.getElementById('reset');
const colorToggleButton = document.getElementById('color-draw');
const resolutionSlider = document.getElementById('resolution-slider');
let divsPerSide = 16;
let gridArray = [];
let isDrawing = false;
let colorDraw = false;


createDivGrid();
resetButton.addEventListener('click', resetSketch);
colorToggleButton.addEventListener('click', toggleColorDraw);
resolutionSlider.addEventListener('change', (event) => { changeResolution(event) });

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
    addDrawingListeners();
}

function deleteDivGrid() {
    for (column of gridArray) {
        for (row of column) {
            container.removeChild(row).remove();
        }
    }
    gridArray = [];
}

function addDrawingListeners() {
    window.addEventListener('mousedown', () => { isDrawing = true; });
    window.addEventListener('mouseup', () => { if (isDrawing) { isDrawing = false; } });
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
    if (colorDraw) { 
        colorDraw = false;
        colorToggleButton.classList.remove('toggle');
    }
    else if (!colorDraw) { 
        colorDraw = true;
        colorToggleButton.classList.add('toggle');
    }
}

function changeResolution(event) {
    deleteDivGrid();
    divsPerSide = event.target.value;
    createDivGrid();
}

