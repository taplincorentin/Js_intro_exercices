function randomColor(){
    return Math.floor(Math.random()*256);
}

function createBox(){
    const newbox = box.cloneNode()
    let r = randomColor();
    let g = randomColor();
    let b =  randomColor();
    let color = `rgb(${r},${g},${b})`; //`` and ${} to put variables in String
    newbox.style.backgroundColor = color;
    container.appendChild(newbox)
}

function deleteBox(){
    container.removeChild(container.lastElementChild)
}


const container = document.querySelector("#container")
const box = document.createElement("div")
box.classList.add("box")


document.addEventListener("keydown", function(event) {
        if (event.key === 'ArrowDown') {
            createBox()
        } else if (event.key === 'ArrowUp') {
            deleteBox()
        }
});

