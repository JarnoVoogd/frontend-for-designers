// ------------------------------------------------------------------------------------------------------
// Neus
// ------------------------------------------------------------------------------------------------------

var neusArray = ["images/Neus/IMG-NeusWit.png", 
                 "images/Neus/IMG-NeusCreme.png", 
                 "images/Neus/IMG-NeusZwart.png", 
                 "images/Neus/IMG-NeusGrijs.png", 
                 "images/Neus/IMG-NeusBlauw.png",
                 "images/Neus/IMG-NeusGeel.png",
                 "images/Neus/IMG-NeusOranje.png",
                 "images/Neus/IMG-NeusRood.png",
                 "images/Neus/IMG-NeusGrijsSuede.png",
                 "images/Neus/IMG-NeusZwartSuede.png",
                 "images/Neus/IMG-NeusPaarsSuede.png"];
var neusFoto = document.querySelector("#schoenNeus");
var huidigeNeusFoto = 0;

document.querySelector("#NeusButton").addEventListener("click", neusVeranderen);

function neusVeranderen() {

    huidigeNeusFoto = huidigeNeusFoto + 1;

    if (huidigeneusFoto > 10) {
        huidigeNeusFoto = 0;
    } else {
        //niks
    }
    schoenCheck();
    neusFoto.setAttribute("src", neusArray[huidigeNeusFoto]);
};