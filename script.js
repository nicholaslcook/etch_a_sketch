const container = document.querySelector('#container')
const box = document.createElement('div');
let numOfBoxes = 16;


function chooseYourSize(n) {
    for (let i = 0; i < n; i++) {
        for (let z = 0; z < n; z++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.border = "1px solid";
            box.addEventListener("mousedown", function(){
                box.style.background = "black";
            });
            container.appendChild(box);
        }
    }
    container.style.gridTemplateColumns = "repeat(" + n + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + n + ", 1fr)";
    
}
chooseYourSize(numOfBoxes);