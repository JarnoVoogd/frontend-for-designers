// ------------------------------------------------------------------------------------------------------
// Boven zool
// ------------------------------------------------------------------------------------------------------

// array met 4 bovenzool afbeeldingen
var bovenZoolArray = ["images/ZoolBoven/IMG-ZoolBovenWit.png",
                      "images/ZoolBoven/IMG-ZoolBovenCreme.png", 
                      "images/ZoolBoven/IMG-ZoolBovenZwart.png", 
                      "images/ZoolBoven/IMG-ZoolBovenGrijs.png"];

// dit is de bovenzoolfoto in de html
var bovenZoolFoto = document.querySelector("#bovenZool");

// dit is de huidige index van de array
var huidigeBovenZoolFoto = 0;

// als je op de knop klikt wordt de functie "bovenZoolVeranderen" geactiveerd
document.querySelector("#bovenZoolButton").addEventListener("click", bovenZoolVeranderen);

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


// ------------------------------------------------------------------------------------------------------
// Onder zool
// ------------------------------------------------------------------------------------------------------

var onderZoolArray = ["images/ZoolOnder/IMG-ZoolOnderWit.png", 
                      "images/ZoolOnder/IMG-ZoolOnderCreme.png", 
                      "images/ZoolOnder/IMG-ZoolOnderZwart.png", 
                      "images/ZoolOnder/IMG-ZoolOnderGrijs.png", 
                      "images/ZoolOnder/IMG-ZoolOnderGrijs.png"];

var onderZoolFoto = document.querySelector("#onderZool");
var huidigeOnderZoolFoto = 0;

document.querySelector("#onderZoolButton").addEventListener("click", onderZoolVeranderen);

function onderZoolVeranderen() {

    huidigeOnderZoolFoto = huidigeOnderZoolFoto + 1;

    if (huidigeOnderZoolFoto > 3) {
        huidigeOnderZoolFoto = 0;
    } else {
        //niks
    }

    schoenCheck();
    //het nummer van de array staat voor de titel van het bestand en dat wordt in html de src van de afbeelding
    onderZoolFoto.setAttribute("src", onderZoolArray[huidigeOnderZoolFoto]);
};


// ------------------------------------------------------------------------------------------------------
// Body achter
// ------------------------------------------------------------------------------------------------------

var bodyAchterArray = ["images/BodyAchter/IMG-BodyAchterWit.png", 
                       "images/BodyAchter/IMG-BodyAchterCreme.png", 
                       "images/BodyAchter/IMG-BodyAchterZwart.png", 
                       "images/BodyAchter/IMG-BodyAchterGrijs.png", 
                       "images/BodyAchter/IMG-BodyAchterBlauw.png", 
                       "images/BodyAchter/IMG-BodyAchterGeel.png", 
                       "images/BodyAchter/IMG-BodyAchterOranje.png", 
                       "images/BodyAchter/IMG-BodyAchterRood.png", 
                       "images/BodyAchter/IMG-BodyAchterGrijsSuede.png", 
                       "images/BodyAchter/IMG-BodyAchterZwartSuede.png", 
                       "images/BodyAchter/IMG-BodyAchterPaarsSuede.png"];

var bodyAchterFoto = document.querySelector("#bodyAchter");
var huidigeBodyAchterFoto = 0;

document.querySelector("#bodyAchterButton").addEventListener("click", bodyAchterVeranderen);

function bodyAchterVeranderen() {

    huidigeBodyAchterFoto = huidigeBodyAchterFoto + 1;

    if (huidigeBodyAchterFoto > 10) {
        huidigeBodyAchterFoto = 0;
    } else {
        //niks
    }

    schoenCheck();
    //het nummer van de array staat voor de titel van het bestand en dat wordt in html de src van de afbeelding
    bodyAchterFoto.setAttribute("src", bodyAchterArray[huidigeBodyAchterFoto]);
};


// ------------------------------------------------------------------------------------------------------
// Body midden
// ------------------------------------------------------------------------------------------------------

var bodyMiddenArray = ["images/BodyMidden/IMG-BodyMiddenWit.png", 
                       "images/BodyMidden/IMG-BodyMiddenCreme.png", 
                       "images/BodyMidden/IMG-BodyMiddenZwart.png", 
                       "images/BodyMidden/IMG-BodyMiddenGrijs.png", 
                       "images/BodyMidden/IMG-BodyMiddenBlauw.png", 
                       "images/BodyMidden/IMG-BodyMiddenGeel.png", 
                       "images/BodyMidden/IMG-BodyMiddenOranje.png", 
                       "images/BodyMidden/IMG-BodyMiddenRood.png", 
                       "images/BodyMidden/IMG-BodyMiddenGrijsSuede.png", 
                       "images/BodyMidden/IMG-BodyMiddenZwartSuede.png", 
                       "images/BodyMidden/IMG-BodyMiddenPaarsSuede.png"];

var bodyMiddenFoto = document.querySelector("#bodyMidden");
var huidigeBodyMiddenFoto = 0;

document.querySelector("#bodyMiddenButton").addEventListener("click", bodyMiddenVeranderen);

function bodyMiddenVeranderen() {

    huidigeBodyMiddenFoto = huidigeBodyMiddenFoto + 1;

    if (huidigeBodyMiddenFoto > 10) {
        huidigeBodyMiddenFoto = 0;
    } else {
        //niks
    }

    schoenCheck();
    //het nummer van de array staat voor de titel van het bestand en dat wordt in html de src van de afbeelding
    bodyMiddenFoto.setAttribute("src", bodyMiddenArray[huidigeBodyMiddenFoto]);
};


// ------------------------------------------------------------------------------------------------------
// Logo
// ------------------------------------------------------------------------------------------------------

var logoArray = ["images/Logo/IMG-LogoWit.png", 
                 "images/Logo/IMG-LogoCreme.png", 
                 "images/Logo/IMG-LogoZwart.png", 
                 "images/Logo/IMG-LogoGrijs.png", 
                 "images/Logo/IMG-LogoBlauw.png",
                 "images/Logo/IMG-LogoGeel.png",
                 "images/Logo/IMG-LogoOranje.png",
                 "images/Logo/IMG-LogoRood.png",
                 "images/Logo/IMG-LogoGrijsSuede.png",
                 "images/Logo/IMG-LogoZwartSuede.png",
                 "images/Logo/IMG-LogoPaarsSuede.png"];
var logoFoto = document.querySelector("#schoenLogo");
var huidigeLogoFoto = 0;

document.querySelector("#logoButton").addEventListener("click", logoVeranderen);

function logoVeranderen() {

    huidigeLogoFoto = huidigeLogoFoto + 1;

    if (huidigeLogoFoto > 10) {
        huidigeLogoFoto = 0;
    } else {
        //niks
    }
    schoenCheck();
    logoFoto.setAttribute("src", logoArray[huidigeLogoFoto]);
};


// ------------------------------------------------------------------------------------------------------
// Reset knop
// ------------------------------------------------------------------------------------------------------

document.querySelector("#resetButton").addEventListener("click", resetSchoen);

function resetSchoen() {
    huidigeBovenZoolFoto = 0;
    huidigeOnderZoolFoto = 0;
    huidigeBodyAchterFoto = 0;      
    huidigeBodyMiddenFoto = 0;
    huidigeLogoFoto = 0;
   
    bovenZoolFoto.setAttribute("src", bovenZoolArray[huidigeBovenZoolFoto]);
    onderZoolFoto.setAttribute("src", onderZoolArray[huidigeOnderZoolFoto]);
    bodyAchterFoto.setAttribute("src", bodyAchterArray[huidigeBodyAchterFoto]);
    bodyMiddenFoto.setAttribute("src", bodyMiddenArray[huidigeBodyMiddenFoto]);
    logoFoto.setAttribute("src", logoArray[huidigeLogoFoto]);
}






function schoenCheck() {


    if (huidigeBovenZoolFoto == 4 && huidigeLogoFoto == 3){
    document.querySelector("#schoennaam").innerHTML = "Dit is de Travis Scott Jordan!";
    console.log("test");
    } else{ 
        document.querySelector("#schoennaam").innerHTML = "";
}
}

   
    





