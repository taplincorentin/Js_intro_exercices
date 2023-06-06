const exRate = 6.55957;
const francs = document.getElementById('nbFrancs');
const euros = document.getElementById('nbEuros');
const error = document.getElementById('error');

francs.addEventListener('keyup', function(){
        var franc = document.getElementById('nbFrancs').value
        if(isNaN(franc)){
            error.innerHTML = "!NEED A NUMBER!"
        }
        else { 
            var euro = (franc/exRate).toFixed(2)
            document.getElementById('nbEuros').value = euro+' euros'
            error.innerHTML = ""
        } 
});

euros.addEventListener('keyup', function(){
        var euro = document.getElementById('nbEuros').value
        if(isNaN(euro)) {
            error.innerHTML = "!NEED A NUMBER!"
        }
        else {
            var franc = (euro*exRate).toFixed(2)
            document.getElementById('nbFrancs').value = franc+" francs"
            error.innerHTML = ""
        }
});