const box = document.createElement("div")
box.classList.add("box")

const container = document.querySelector("#container")
for(let i=1; i<=4; i++){
    const newbox = box.cloneNode()
    newbox.innerText = i
    container.appendChild(newbox)
    
    newbox.addEventListener("click",function(){
        newbox.classList.add("box-clicked")
    })
}