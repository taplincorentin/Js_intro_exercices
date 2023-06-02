const box = document.createElement("div")
box.classList.add("box")

const container = document.querySelector("#container")
for(let i=1; i<=4; i++){
    const newbox = box.cloneNode()
    newbox.innerText = i
    container.appendChild(newbox)
    
    newbox.addEventListener("click",function(){
        if(newbox.classList.contains("box-clicked")){
            newbox.classList.remove("box-clicked")
        }
        else{newbox.classList.add("box-clicked")}
    })
}