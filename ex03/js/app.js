let symbol = "X";
let i=1; //initialize i (started cell id at 1 in html)

//for every cell in table get element id from html(toString)
for ( i; i <= 9; i++) {       
    document.getElementById(i.toString()).addEventListener("click", function(){
        if (this.innerHTML === "") {    //check that cell is empty
          this.innerHTML = symbol;      //add symbol in cell
          this.classList.add(symbol);   //add symbol style


        if (symbol === "X"){symbol = "O"} //change symbol after every turn
        else{symbol = "X"}
        }
    });

    
}