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
    newbox.id = 'box'+count
    
    
    newbox.addEventListener("click",function(){

        if(container.childElementCount >225){ 

        newbox.style.backgroundColor = "black";

        }
    });
} 


function deleteBox(){
    container.removeChild(container.lastElementChild)
}


const container = document.getElementById("container")
const box = document.createElement("div")
box.classList.add("box")


var count = 0
document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowDown') {
        if (container.childElementCount<225){  //checking not at max number of cubes
            createBox()
            count++
        }
    } else if (event.key === 'ArrowUp') {
        if(container.childElementCount>0){      //checking at least one cube to delete
            deleteBox()
            count--
        }
    }   
});



