let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function checkForWin(winningCombination, playerSelection){
    //translate pseudocode to javascript here
}

// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll('.grid-cell');



// Loop over each element in our cellElementArray: 
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {

    // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
    const currentCellElement = cellElementArray[elementIndex]

    // Add an event listener to the currentCellElement:
    currentCellElement.addEventListener('click', function (event) {

        // event.target tells us which element the user clicked (see Resources links below):
        const clickedCellElement = event.target;

        // Log the ID of the cell which was just clicked:
        console.log("You clicked on cell number: " + clickedCellElement.id)
        //innerHtml to each cell

       if (x = currentCellElement){

       }else{ o = currentCellElement }

        

    });

}