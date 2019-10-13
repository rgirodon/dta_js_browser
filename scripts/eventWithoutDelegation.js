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

var divs = document.getElementsByClassName("elementDuDamier");

for (var i = 0; i < divs.length; i++) {

    divs[i].onclick = function(e) {

        e.target.style.backgroundColor = generateRandomColor();
    };
}