// ------------------------------------------------------------------------------------------------------
// Boven zool
// ------------------------------------------------------------------------------------------------------

// array met 4 bovenzool afbeeldingen
const bovenZoolArray = ["images/ZoolBoven/IMG-ZoolBovenWit.png",
                    "images/ZoolBoven/IMG-ZoolBovenCreme.png", 
                    "images/ZoolBoven/IMG-ZoolBovenZwart.png", 
                    "images/ZoolBoven/IMG-ZoolBovenGrijs.png"];

// dit is de bovenzoolfoto in de html
let bovenZoolFoto = document.querySelector("#bovenZool");

// dit is de huidige index van de array
let huidigeBovenZoolFoto = 0;

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

const onderZoolArray = ["images/ZoolOnder/IMG-ZoolOnderWit.png", 
                    "images/ZoolOnder/IMG-ZoolOnderCreme.png", 
                    "images/ZoolOnder/IMG-ZoolOnderZwart.png", 
                    "images/ZoolOnder/IMG-ZoolOnderGrijs.png", 
                    "images/ZoolOnder/IMG-ZoolOnderGrijs.png"];

let onderZoolFoto = document.querySelector("#onderZool");
let huidigeOnderZoolFoto = 0;

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

const bodyAchterArray = ["images/BodyAchter/IMG-BodyAchterWit.png", 
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

let bodyAchterFoto = document.querySelector("#bodyAchter");
let huidigeBodyAchterFoto = 0;

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

const bodyMiddenArray = ["images/BodyMidden/IMG-BodyMiddenWit.png", 
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

let bodyMiddenFoto = document.querySelector("#bodyMidden");
let huidigeBodyMiddenFoto = 0;

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
// Body voor
// ------------------------------------------------------------------------------------------------------

const bodyVoorArray = ["images/BodyVoor/IMG-BodyVoorWit.png", 
                    "images/BodyVoor/IMG-BodyVoorCreme.png", 
                    "images/BodyVoor/IMG-BodyVoorZwart.png", 
                    "images/BodyVoor/IMG-BodyVoorGrijs.png", 
                    "images/BodyVoor/IMG-BodyVoorBlauw.png", 
                    "images/BodyVoor/IMG-BodyVoorGeel.png", 
                    "images/BodyVoor/IMG-BodyVoorOranje.png", 
                    "images/BodyVoor/IMG-BodyVoorRood.png", 
                    "images/BodyVoor/IMG-BodyVoorGrijsSuede.png", 
                    "images/BodyVoor/IMG-BodyVoorZwartSuede.png", 
                    "images/BodyVoor/IMG-BodyVoorPaarsSuede.png"];

let bodyVoorFoto = document.querySelector("#bodyVoor");
let huidigeBodyVoorFoto = 0;

document.querySelector("#bodyVoorButton").addEventListener("click", bodyVoorVeranderen);

function bodyVoorVeranderen() {

    huidigeBodyVoorFoto = huidigeBodyVoorFoto + 1;

    if (huidigeBodyVoorFoto > 10) {
        huidigeBodyVoorFoto = 0;
    } else {
        //niks
    }

    schoenCheck();
    //het nummer van de array staat voor de titel van het bestand en dat wordt in html de src van de afbeelding
    bodyVoorFoto.setAttribute("src", bodyVoorArray[huidigeBodyVoorFoto]);
};


// ------------------------------------------------------------------------------------------------------
// Logo
// ------------------------------------------------------------------------------------------------------

const logoArray = ["images/Logo/IMG-LogoWit.png", 
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
let logoFoto = document.querySelector("#logo");
let huidigeLogoFoto = 0;

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
// Neus
// ------------------------------------------------------------------------------------------------------

const neusArray = ["images/Neus/IMG-NeusWit.png", 
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
let neusFoto = document.querySelector("#neus");
let huidigeNeusFoto = 0;

document.querySelector("#neusButton").addEventListener("click", neusVeranderen);

function neusVeranderen() {

    huidigeNeusFoto = huidigeNeusFoto + 1;

    if (huidigeNeusFoto > 10) {
        huidigeNeusFoto = 0;
    } else {
        //niks
    }
    schoenCheck();
    neusFoto.setAttribute("src", neusArray[huidigeNeusFoto]);
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
    huidigeBodyVoorFoto = 0;
    huidigeLogoFoto = 0;
    huidigeNeusFoto = 0;
   
    bovenZoolFoto.setAttribute("src", bovenZoolArray[huidigeBovenZoolFoto]);
    onderZoolFoto.setAttribute("src", onderZoolArray[huidigeOnderZoolFoto]);
    bodyAchterFoto.setAttribute("src", bodyAchterArray[huidigeBodyAchterFoto]);
    bodyMiddenFoto.setAttribute("src", bodyMiddenArray[huidigeBodyMiddenFoto]);
    bodyVoorFoto.setAttribute("src", bodyVoorArray[huidigeBodyVoorFoto])
    logoFoto.setAttribute("src", logoArray[huidigeLogoFoto]);
    neusFoto.setAttribute("src", neusArray[huidigeNeusFoto]);
}


// ------------------------------------------------------------------------------------------------------
// Opslaan creatie en reproductie ervan
// ------------------------------------------------------------------------------------------------------

// let geselecteerdeBovenZool;
// let geselecteerdeOnderZool;
// let geselecteerdeBodyAchter;
// let geselecteerdeBodyMidden;
// let geselecteerdeBodyVoor;
// let geselecteerdeLogo;
// let geselecteerdeNeus;
let input;


// let voorbeeldObject = { 
//     naam: "schoenNaam",               
//     bovenZool : bovenZoolArray[0],
//     onderZool : onderZoolArray[0],
//     bodyAchter : bodyAchterArray[0],
//     bodyMidden : bodyMiddenArray[0],
//     bodyVoor : bodyVoorArray[0],
//     logo : logoArray[0],
//     neus : neusArray[0]
// };

function schoenObject(naam, bovenZool, onderZool) { 
    this.naam = naam;
    this.bovenZool = bovenZool;
    this.onderZool = onderZool;
    this.bodyAchter = bodyAchter;
    this.bodyMidden = bodyMidden;
    this.bodyVoor = bodyVoor;
    this.logo = logo; 
    this.neus = neus;
};
let opslaanArray = [];
// let schoen1 ={}

document.querySelector("#save").addEventListener("click", opslaan)


function opslaan() {
    input = document.getElementById("naamInput").value
    
    if (input.length < 1) {
        document.querySelector("#melding").innerHTML = "Geef uw creatie een naam";

        setTimeout(() => {
            document.querySelector("#melding").innerHTML = "";
        },3000);
    

    } else {
        var nieuweSchoen = 
            new schoenObject(
                input, 
                bovenZoolArray[huidigeBovenZoolFoto],
                onderZoolArray[huidigeOnderZoolFoto],
                bodyAchterArray[huidigeBodyAchterFoto],
                bodyMiddenArray[huidigeBodyMiddenFoto],
                bodyVoorArray[huidigeBodyVoorFoto],
                logoArray[huidigeLogoFoto],
                neusArray[huidigeNeusFoto])

        opslaanArray.push(nieuweSchoen);
        console.log(opslaanArray);
        // schoen1 = { naam : input,
        //             bovenZool : bovenZoolArray[huidigeBovenZoolFoto],
        //             onderZool : onderZoolArray[huidigeOnderZoolFoto],
        //             bodyAchter : bodyAchterArray[huidigeBodyAchterFoto],
        //             bodyMidden : bodyMiddenArray[huidigeBodyMiddenFoto],
        //             bodyVoor : bodyVoorArray[huidigeBodyVoorFoto],
        //             logo : logoArray[huidigeLogoFoto],
        //             neus : neusArray[huidigeNeusFoto]}
            

    window.localStorage.setItem("array", JSON.stringify(opslaanArray))


    // geselecteerdeBovenZool = window.localStorage.setItem("geselecteerdeBovenZool", bovenZoolArray[huidigeBovenZoolFoto]);
    // geselecteerdeOnderZool = window.localStorage.setItem("geselecteerdeOnderZool", onderZoolArray[huidigeOnderZoolFoto]);
    // geselecteerdeBodyAchter = window.localStorage.setItem("geselecteerdeBodyAchter", bodyAchterArray[huidigeBodyAchterFoto]);
    // geselecteerdeBodyMidden = window.localStorage.setItem("geselecteerdeBodyMidden", bodyMiddenArray[huidigeBodyMiddenFoto]);
    // geselecteerdeBodyVoor = window.localStorage.setItem("geselecteerdeBodyVoor", bodyVoorArray[huidigeBodyVoorFoto]);
    // geselecteerdeLogo = window.localStorage.setItem("geselecteerdeLogo", logoArray[huidigeLogoFoto]);
    // geselecteerdeNeus =  window.localStorage.setItem("geselecteerdeNeus", neusArray[huidigeNeusFoto]);

    document.querySelector("#melding").innerHTML = "Uw creatie is opgeslagen!";

    setTimeout(() => {
        document.querySelector("#melding").innerHTML = "";
    },3000);
        
   
    }
}

document.querySelector("#creatie").addEventListener("click", creatie)

function creatie() {
    let schoen1 = JSON.parse(window.localStorage.getItem("schoen1"));
    bovenZoolFoto.setAttribute("src", schoen1.bovenZool);
    onderZoolFoto.setAttribute("src", schoen1.onderZool);
    bodyAchterFoto.setAttribute("src", schoen1.bodyAchter);
    bodyMiddenFoto.setAttribute("src", schoen1.bodyMidden);
    bodyVoorFoto.setAttribute("src", schoen1.bodyVoor);
    logoFoto.setAttribute("src", schoen1.logo);
    neusFoto.setAttribute("src", schoen1.neus);

    document.querySelector("#melding").innerHTML = "Hier is uw creatie!";

    setTimeout(() => {
        document.querySelector("#melding").innerHTML = "";
    },3000);

}



function schoenCheck() {


    if (huidigeBovenZoolFoto == 3 && huidigeLogoFoto == 3){
    document.querySelector("#melding").innerHTML = "Dit is de Travis Scott Jordan!";
    console.log("test");
    } else{ 
        document.querySelector("#melding").innerHTML = "";
}
}

   
    
