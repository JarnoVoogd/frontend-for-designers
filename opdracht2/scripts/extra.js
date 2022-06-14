const bovenZoolArray = ["images/ZoolBoven/IMG-ZoolBovenWit.png",
                      "images/ZoolBoven/IMG-ZoolBovenCreme.png", 
                      "images/ZoolBoven/IMG-ZoolBovenZwart.png", 
                      "images/ZoolBoven/IMG-ZoolBovenGrijs.png"];

// dit is de bovenzoolfoto in de html
let bovenZoolFoto = document.querySelector("#bovenZool");

// dit is de huidige index van de array
let huidigeBovenZoolFoto = 0;

// als je op de knop klikt wordt de functie "bovenZoolVeranderen" geactiveerd
document.querySelector("#bovenZoolButton").addEventListener("click", veranderen(huidigeBovenZoolFoto,bovenZoolFoto,bovenZoolArray));




function veranderen(huidigeFoto,foto,array) {

    //huidigeBovenZoolFoto is 0, plus 1 bij elke klik
    huidigeFoto = huidigeFoto + 1;

    //als de foto groter is dan 4 gaat het terug naar 0 bij de array
    if (huidigeFoto > 3) {
        huidigeFoto = 0;
    } else {
        //niks
    }

    //het nummer van de array staat voor de titel van het bestand en dat wordt in html de src van de afbeelding
    foto.setAttribute("src", array[huidigeFoto]);
};


function bovenZoolVeranderen() {

    //huidigeBovenZoolFoto is 0, plus 1 bij elke klik
    huidigeBovenZoolFoto = huidigeBovenZoolFoto + 1;

    //als de foto groter is dan 4 gaat het terug naar 0 bij de array
    if (huidigeBovenZoolFoto > 3) {
        huidigeBovenZoolFoto = 0;
    } else {
        //niks
    }

    schoenCheck();
    //het nummer van de array staat voor de titel van het bestand en dat wordt in html de src van de afbeelding
    bovenZoolFoto.setAttribute("src", bovenZoolArray[huidigeBovenZoolFoto]);
};