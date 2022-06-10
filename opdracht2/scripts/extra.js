
var bodyMiddenArray = ["images/BodyMidden/IMG-BodyMiddenWit.png", "images/BodyMidden/IMG-BodyMiddenCreme.png", "images/BodyMidden/IMG-BodyMiddenZwart.png", "images/BodyMidden/IMG-BodyMiddenGrijs.png"];
var bodyMiddenFoto = document.querySelector("#bodyMidden");
var huidigebodyMiddenFoto = 0;

document.querySelector("#bodyMiddenButton").addEventListener("click", bodyMiddenVeranderen);

function bodyMiddenVeranderen() {

    huidigebodyMiddenFoto = huidigebodyMiddenFoto + 1;

    if (huidigebodyMiddenFoto > 3) {
        huidigebodyMiddenFoto = 0;
    } else {
        //niks
    }

    schoenCheck();
    //het nummer van de array staat voor de titel van het bestand en dat wordt in html de src van de afbeelding
    bodyMiddenFoto.setAttribute("src", bodyMiddenArray[huidigebodyMiddenFoto]);
};




"images/BodyMidden/IMG-BodyMiddenWit.png", 
                       "images/BodyMidden/IMG-BodyMiddenCreme.png", 
                       "images/BodyMidden/IMG-BodyMiddenZwart.png", 
                       "images/BodyMidden/IMG-BodyMiddenGrijs.png", 
                       "images/BodyMidden/IMG-BodyMiddenBlauw.png", 
                       "images/BodyMidden/IMG-BodyMiddenGeel.png", 
                       "images/BodyMidden/IMG-BodyMiddenOranje.png", 
                       "images/BodyMidden/IMG-BodyMiddenRood.png", 
                       "images/BodyMidden/IMG-BodyMiddenGrijsSuede.png", 
                       "images/BodyMidden/IMG-BodyMiddenZwartSuede.png", 
                       "images/BodyMidden/IMG-BodyMiddenPaarsSuede.png"