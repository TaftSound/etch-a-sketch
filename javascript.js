const container = document.getElementById('grid-container');
let divsPerSide = 16;
let containerHeight = container.getAttribute('height');
let columnArray = [];

function createEtchDiv(columnNumber, rowNumber) {
    let div = document.createElement('div');
    div.classList.add('etch-div');
    div.style.gridColumn = columnNumber;
    div.style.gridRow = rowNumber;
    container.appendChild(div);
    div.style.backgroundColor = 'black';
    div.style.opacity = 0.1;
};

divTest = createEtchDiv(1, 1);
divTest = createEtchDiv(2, 2);

// function createDivGrid() {

// }

// function createDivColumn() {
//     for (let i = 0; i < divsPerSide; i++) {
//         columnArray.push()
//     }
// }
// Need to create 16 x 16 grid
    // For loop to create one column of divs for each divsPerSide,
        // Nested for loop to create divsPerSide number of divs in each
        // column, .createElement(), .appendChild(), .classList.add(),
        // need to add column number i, and row number j to each one.
// Need to set proportions to always be a square
    // height = 80vh, width = 80vh
// Need to set up hover function to change the color of the divs
    // use mousedown + mouseup listeners to only draw when holding clicked
    // on mousedown, set isDrawing variable to true, mouseup sets to false
    // set mousedown and mouseup to be activated on the global window
    // Do the following inside for loop:
        // set .mouseover listener on each individual div
        // set initial div opacity property to 0.1
        // when .mouseover is activated, if isDrawing === true set opacity += 0.1 
        // unless div opacity is already 1.0; use .style.opacity = ''
    // 

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
