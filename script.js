
let container = document.querySelector(".container");

function getNewGrid () { 

let nrSqareSide = Number(prompt("Insert the number of sqares that you want on all sildes of the grid!")); 
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
    else if ( (sqare.offsetWidth === sqareSize) &&
    (sqares.length !== nrSqareTotal) ) {
        for (let i = 0; i <= nrSqareTotal - 1; i++) {
            sqares[i].remove(); 
            console.log("removed");      
        };  
    }   
    else {  
        console.log("done");
    };
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

let startGrid = document.querySelector(".startGrid");
startGrid.addEventListener("click", getNewGrid);  


