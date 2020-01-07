const container = document.querySelector('#container')
const box = document.createElement('div');
let numOfBoxes = 16;


function chooseYourSize(n) {
    for (let i = 0; i < n; i++) {
        for (let z = 0; z < n; z++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.border = "1px solid";
            box.addEventListener("mouseover", function(){
                if(mouseDown){
                    box.style.background = "black";
                  }
                
            });
            container.appendChild(box);
        }
    }
    container.style.gridTemplateColumns = "repeat(" + n + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + n + ", 1fr)";
    
}

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}
chooseYourSize(numOfBoxes);