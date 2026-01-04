
let container = document.querySelector(".container");

let infoBox = document.createElement("span");
infoBox.classList.add("infoBox");
infoBox.innerHTML = "Press <i><bold> Create New Grid </bold></i> to create a custom grid and <i><bold> Reset Grid </bold></i> to revert the color and opacity.";
document.body.insertBefore(infoBox, container); 

for (let i = 1; i <= 256; i++) { 
    let div = document.createElement("div");
    div.classList.add("initialSqare"); 
    container.appendChild(div); 
}
   
let initialSqares = document.querySelectorAll(".initialSqare");

initialSqares.forEach( (sqare) => {
    sqare.style.opacity = Number(1);
    sqare.addEventListener("mouseenter", () => {
        sqare.style.backgroundColor = `rgb${createRandomColor()}`;
        if (sqare.style.opacity > 0) {
            sqare.style.opacity = sqare.style.opacity - 0.1;
        }
        else{}; 
    } );
} );  
  
let resetGrid = document.querySelector(".resetGrid");
resetGrid.textContent = "Reset Grid"; 
resetGrid.addEventListener("click", () => {
    initialSqares.forEach( (sqare) => {
        sqare.style.backgroundColor = "red";
        sqare.style.opacity = Number(1); 
    } ); 
} );   

function createRandomColor () {
    let randomColor = Math.floor(Math.random() * 100 +1);
    let randomColor2 = Math.floor(Math.random() * 100 +1);
    let randomColor3 = Math.floor(Math.random() * 100 +1);
    return `(${randomColor},${randomColor2},${randomColor3})`;
} 

function getNewGrid () { 
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
    
    let nrSqareSide = Number(prompt("Insert the number of sqares that you want on all sides of the grid!")); 
    let nrSqareTotal = nrSqareSide * nrSqareSide;
    let sqareSize = 900 / nrSqareSide;   

    if (nrSqareSide === "" || nrSqareSide === null ||
        nrSqareSide % 1 !== 0 || nrSqareSide <= 0 ||
        nrSqareSide > 100
    ) {
        infoBox.textContent = "Invalid number, please insert a number between 1-100.";
        let infoChange = setTimeout( () => {
            infoBox.innerHTML = "Press <i><bold> Create New Grid </bold></i> to create a custom grid and <i><bold> Reset Grid </bold></i> to revert the color and opacity.";
        }, 5000);
        return nrSqareSide = 0; 
    }   
    else {
        infoBox.textContent = `You created a ${nrSqareSide} x ${nrSqareSide} grid!`;
    };  
   
    for (let i = 1; i <= nrSqareTotal; i++) {
        let div = document.createElement("div");
        div.classList.add("sqare"); 
        div.style.width = `${sqareSize}px`; 
        div.style.height = `${sqareSize}px`; 
        container.appendChild(div);   
    };    

    let sqares = document.querySelectorAll(".sqare"); 
 
    sqares.forEach( (sqare) => {
        sqare.style.opacity = Number(1);
        sqare.addEventListener("mouseenter", () => {
            sqare.style.backgroundColor = `rgb${createRandomColor()}`;
            if (sqare.style.opacity > 0) {
                sqare.style.opacity = sqare.style.opacity - 0.1;
            }
            else{};  
        } );
    } );  

    resetGrid.addEventListener("click", () => {
        sqares.forEach( (sqare) => {
            sqare.style.backgroundColor = "red";
            sqare.style.opacity = Number(1); 
        } ); 
    } );  

}; //function getNewGrid END. 

let newGrid = document.querySelector(".newGrid"); 
newGrid.textContent = "Create New Grid";
newGrid.addEventListener("click", getNewGrid);    


  
 