const container = document.querySelector('#container')
const box = document.createElement('div');
let numOfBoxes = 40;


function chooseYourSize(n) {
    for (let i = 0; i < n; i++) {
        for (let z = 0; z < n; z++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.border = "1px solid";
            box.addEventListener("mouseover", function(){
                    box.style.background = "black";
            });
            container.appendChild(box);
        }
    }
    container.style.gridTemplateColumns = "repeat(" + n + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + n + ", 1fr)";
    
}

const clearBut = document.querySelector('#clearBut')
clearBut.addEventListener("click", function(){
    let backToWhite = document.getElementsByClassName("box");
    for(let i = backToWhite.length - 1; i >= 0; i--) {
      backToWhite[i].parentNode.removeChild(backToWhite[i]);
    }
    numOfBoxes = prompt("How many boxes per side?", "Max is 72 (number must be positive!)");
    
    if(numOfBoxes <= 0 || numOfBoxes > 72) {
      alert("Must be a positive number, 72 or below.");
      numOfBoxes = 6;
    }

    chooseYourSize(numOfBoxes);
});

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}
chooseYourSize(numOfBoxes);