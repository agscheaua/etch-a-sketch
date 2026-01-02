
let container = document.querySelector(".container");

function getNewGrid () { 
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
    
    let nrSqareSide = prompt("Insert the number of sqares that you want on all sildes of the grid!"); 
    if (nrSqareSide === "" || nrSqareSide === null) {
        console.log("insert a valid number");
    } 
    else if (nrSqareSide % nrSqareSide !== 0) {
        console.log("insert a valid nr."); 
    } 
    else {}; 

    let nrSqareTotal = nrSqareSide * nrSqareSide;
    let sqareSize = 900 / nrSqareSide;  
 
    for (let i = 1; i <= nrSqareTotal; i++) {
        let div = document.createElement("div");
        div.classList.add("sqare"); 
        div.style.width = `${sqareSize}px`; 
        div.style.height = `${sqareSize}px`; 
        container.appendChild(div);   
    };
 
    let sqares = document.querySelectorAll(".sqare"); 
 
    sqares.forEach( (sqare) => {
        if ( sqare.offsetWidth !== sqareSize ) {
            sqare.remove();     
        }    
        else {};
    } ); 
   
    sqares.forEach( (sqare) => {
        sqare.addEventListener("mouseenter", () => {
            sqare.style.backgroundColor = "purple";
        } );
    } );  
 
    let resetGrid = document.querySelector(".resetGrid");
    resetGrid.addEventListener("click", () => {
        sqares.forEach( (sqare) => {
            sqare.style.backgroundColor = "red";
        } ); 
    } );    
    
}; //function getNewGrid END. 

let newGrid = document.querySelector(".newGrid"); 
newGrid.addEventListener("click", getNewGrid);  


 
