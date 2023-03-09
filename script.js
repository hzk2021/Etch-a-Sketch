let containerDiv = document.querySelector(".container");
let createButton = document.getElementById("create-button");
let eraserButton = document.getElementById("eraser-button");

createButton.addEventListener("click", (e) => {
    let askRow = parseInt(prompt("How many rows?"));
    let askCol = parseInt(prompt("How many columns?"));

    createCanvas(askRow, askCol);

});

eraserButton.addEventListener("click", (e) => {
    let drawingCols = document.getElementsByClassName("coloured");
    Array.from(drawingCols).forEach(col => {
        col.classList.remove("coloured");
    });
})


function createCanvas(rows, cols){
    containerDiv.innerHTML = '';

    for (let row = 0; row < rows; row++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        
        for (let col = 0; col < cols; col++){
            let newCol = document.createElement("div");
            newCol.classList.add("col");
            newCol.addEventListener("mouseover", (e) => {
                newCol.classList.add("coloured");
            });
    
            newRow.appendChild(newCol);
    
    
        }
    
        containerDiv.appendChild(newRow);
        
    }
}