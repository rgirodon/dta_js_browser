let divDamier = document.getElementById("damier");

for (var i = 1; i <= 16; i++) {
    
    var myDiv = document.createElement('div');
    
    myDiv.className = "elementDuDamier";
    
    divDamier.appendChild(myDiv);
}

function generateRandomNumber(number) {

    return Math.floor(Math.random()*number);
}

function generateRandomColor() {

    var rndCol = 'rgb(' + generateRandomNumber(255) + ',' + generateRandomNumber(255) + ',' + generateRandomNumber(255) + ')';

    return rndCol;
}

document.body.onclick = function(e) {

    e.target.style.backgroundColor = generateRandomColor();
}

/*
function activateChangeColor() {
    
    divDamier.onclick = function(e) {

        e.target.style.backgroundColor = generateRandomColor();
    }
}

var goButton = document.getElementById("go");

goButton.addEventListener("click", activateChangeColor);


function desactivateChangeColor() {
    
    divDamier.onclick = "";
}

var stopButton = document.getElementById("stop");

stopButton.addEventListener("click", desactivateChangeColor);
*/