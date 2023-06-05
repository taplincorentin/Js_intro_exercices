function isGameOver(){
  let nbFilledCell = 0;
  for (let y=1; y <= 9; y++) {       
        if (document.getElementById(y.toString()).innerHTML === "X" ||document.getElementById(y.toString()).innerHTML === "O") { 
          nbFilledCell += 1;
        }
  }
  if (nbFilledCell==9){return true;}
  else {return false;}
}

let symbol = "X";

//for every cell in table get element id from html(toString)(i== cell id from html)
for (let i=1; i <= 9; i++) {       
    document.getElementById(i.toString()).addEventListener("click", function(){
        if (this.innerHTML === "") {    //check that cell is empty
            this.innerHTML = symbol;      //add symbol in cell
            this.classList.add(symbol);   //add symbol style

            if(isGameOver()){document.getElementById("turn").innerHTML = "Game is finished";  }
            if (symbol === "X"){symbol = "O"} //change symbol after every turn
            else{symbol = "X"}
            document.getElementById("turn").innerHTML = "Its "+symbol+" turn";  
        }
    }); 
}
