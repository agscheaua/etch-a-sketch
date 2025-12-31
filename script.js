
const container = document.querySelector(".container");

for (i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.classList.add("sqare");
    container.appendChild(div);
}

let sqares = document.querySelectorAll(".sqare");
sqares.forEach( (sqare) => {
    sqare.addEventListener("mouseenter", () => {
        sqare.style.backgroundColor = "purple";
    });
} ); 

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let nrSqareSide = Number(prompt("Insert the number of sqares you want: "));
    let sqareSize = 1600 / nrSqareSide;
    console.log(sqareSize);    
}); 
