/*************/
/* DE OPTIES */
/*************/
const bodyAchterArray = [
    "images/BodyAchter/IMG-BodyAchterWit.png", 
    "images/BodyAchter/IMG-BodyAchterCreme.png", 
    "images/BodyAchter/IMG-BodyAchterZwart.png", 
    "images/BodyAchter/IMG-BodyAchterGrijs.png", 
    "images/BodyAchter/IMG-BodyAchterBlauw.png", 
    "images/BodyAchter/IMG-BodyAchterGeel.png", 
    "images/BodyAchter/IMG-BodyAchterOranje.png", 
    "images/BodyAchter/IMG-BodyAchterRood.png", 
    "images/BodyAchter/IMG-BodyAchterGrijsSuede.png", 
    "images/BodyAchter/IMG-BodyAchterZwartSuede.png", 
    "images/BodyAchter/IMG-BodyAchterPaarsSuede.png"
];

const bovenZoolArray = [
    "images/ZoolBoven/IMG-ZoolBovenWit.png",
    "images/ZoolBoven/IMG-ZoolBovenCreme.png", 
    "images/ZoolBoven/IMG-ZoolBovenZwart.png", 
    "images/ZoolBoven/IMG-ZoolBovenGrijs.png"
];

const onderZoolArray = [
    "images/ZoolOnder/IMG-ZoolOnderWit.png", 
    "images/ZoolOnder/IMG-ZoolOnderCreme.png", 
    "images/ZoolOnder/IMG-ZoolOnderZwart.png", 
    "images/ZoolOnder/IMG-ZoolOnderGrijs.png", 
    "images/ZoolOnder/IMG-ZoolOnderGrijs.png"
];

const bodyMiddenArray = [
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
];

const bodyVoorArray = [
    "images/BodyVoor/IMG-BodyVoorWit.png", 
    "images/BodyVoor/IMG-BodyVoorCreme.png", 
    "images/BodyVoor/IMG-BodyVoorZwart.png", 
    "images/BodyVoor/IMG-BodyVoorGrijs.png", 
    "images/BodyVoor/IMG-BodyVoorBlauw.png", 
    "images/BodyVoor/IMG-BodyVoorGeel.png", 
    "images/BodyVoor/IMG-BodyVoorOranje.png", 
    "images/BodyVoor/IMG-BodyVoorRood.png", 
    "images/BodyVoor/IMG-BodyVoorGrijsSuede.png", 
    "images/BodyVoor/IMG-BodyVoorZwartSuede.png", 
    "images/BodyVoor/IMG-BodyVoorPaarsSuede.png"
];

const logoArray = [
    "images/Logo/IMG-LogoWit.png", 
    "images/Logo/IMG-LogoCreme.png", 
    "images/Logo/IMG-LogoZwart.png", 
    "images/Logo/IMG-LogoGrijs.png", 
    "images/Logo/IMG-LogoBlauw.png",
    "images/Logo/IMG-LogoGeel.png",
    "images/Logo/IMG-LogoOranje.png",
    "images/Logo/IMG-LogoRood.png",
    "images/Logo/IMG-LogoGrijsSuede.png",
    "images/Logo/IMG-LogoZwartSuede.png",
    "images/Logo/IMG-LogoPaarsSuede.png"
];

const neusArray = [
    "images/Neus/IMG-NeusWit.png", 
    "images/Neus/IMG-NeusCreme.png", 
    "images/Neus/IMG-NeusZwart.png", 
    "images/Neus/IMG-NeusGrijs.png", 
    "images/Neus/IMG-NeusBlauw.png",
    "images/Neus/IMG-NeusGeel.png",
    "images/Neus/IMG-NeusOranje.png",
    "images/Neus/IMG-NeusRood.png",
    "images/Neus/IMG-NeusGrijsSuede.png",
    "images/Neus/IMG-NeusZwartSuede.png",
    "images/Neus/IMG-NeusPaarsSuede.png"
];

const creatieOpties = { 
    bovenZool: bovenZoolArray,
    onderZool: onderZoolArray,
    bodyAchter: bodyAchterArray,
    bodyMidden: bodyMiddenArray,
    bodyVoor: bodyVoorArray,
    logo: logoArray,
    neus: neusArray
};





/*******************/
/* HUIDIGE CREATIE */
/*******************/
let huidigeCreatie = { 
    naam: "",
    bovenZool: 0,
    onderZool: 0,
    bodyAchter: 0,
    bodyMidden: 0,
    bodyVoor: 0,
    logo: 0,
    neus: 0
};

let huidigeCreatieOpBeeld = { 
    naam: document.querySelector("#naamInput"),
    bovenZool: document.querySelector("#bovenZool"),
    onderZool: document.querySelector("#onderZool"),
    bodyAchter: document.querySelector("#bodyAchter"),
    bodyMidden: document.querySelector("#bodyMidden"),
    bodyVoor: document.querySelector("#bodyVoor"),
    logo: document.querySelector("#logo"),
    neus: document.querySelector("#neus")
};

let setHuidigeCreatie = () => {
    huidigeCreatieOpBeeld.naam.value = huidigeCreatie.naam;
    huidigeCreatieOpBeeld.bovenZool.src = creatieOpties.bovenZool[huidigeCreatie.bovenZool];
    huidigeCreatieOpBeeld.onderZool.src = creatieOpties.onderZool[huidigeCreatie.onderZool];
    huidigeCreatieOpBeeld.bodyAchter.src = creatieOpties.bodyAchter[huidigeCreatie.bodyAchter];
    huidigeCreatieOpBeeld.bodyMidden.src = creatieOpties.bodyMidden[huidigeCreatie.bodyMidden];
    huidigeCreatieOpBeeld.bodyVoor.src = creatieOpties.bodyVoor[huidigeCreatie.bodyVoor];
    huidigeCreatieOpBeeld.logo.src = creatieOpties.logo[huidigeCreatie.logo];
    huidigeCreatieOpBeeld.neus.src = creatieOpties.neus[huidigeCreatie.neus];
}





/*********************/
/* OPTIES VERANDEREN */
/*********************/
const optieButtons = document.querySelectorAll("button.optie")

// geen nieuwe notatie zodat this te gebruiken is
function veranderOptie() {
    // de value van de button geeft aan om welke optie het gaat
    let deOptie = this.value;

    //huidige Foto start bij 0, plus 1 bij elke klik
    huidigeCreatie[deOptie]++;

    // als de foto groter is dan het aantal opties gaat het terug naar 0 bij de array
    if (huidigeCreatie[deOptie] == creatieOpties[deOptie].length) {
        huidigeCreatie[deOptie] = 0;
    }

    // vervolgens de bijbehordende afbeelding is
    let deVolgendeAfbeeldingVoorDeOptie = creatieOpties[deOptie][huidigeCreatie[deOptie]];
    // die afbeelding op het beeld tonen
    huidigeCreatieOpBeeld[deOptie].src = deVolgendeAfbeeldingVoorDeOptie;

    // check of het de Travis Scott Jordan! is
    schoenCheck();
};

optieButtons.forEach(optieButton => {
    optieButton.addEventListener("click", veranderOptie);
});



/* de naam veranderen */
var deNaam = document.querySelector("#naamInput");

let udpateNaam = () => {
    huidigeCreatie.naam = deNaam.value;
}

deNaam.addEventListener("input", udpateNaam);



// check of het de Travis Scott Jordan! is
let schoenCheck = () => {
    if (huidigeCreatie.bovenZool == 3 && huidigeCreatie.logo == 3) {
        // feedback richting gebruiker tonen 
        meldingTonen("Dit is de Travis Scott Jordan!");
    }
}



/*********/
/* RESET */
/*********/
let resetCreatie = () => {
    huidigeCreatie.naam = "";
    huidigeCreatie.bovenZool = 0;
    huidigeCreatie.onderZool = 0;
    huidigeCreatie.bodyAchter = 0;      
    huidigeCreatie.bodyMidden = 0;
    huidigeCreatie.bodyVoor = 0;
    huidigeCreatie.logo = 0;
    huidigeCreatie.neus = 0;
   
    setHuidigeCreatie();
}

document.querySelector("#resetButton").addEventListener("click", resetCreatie);





/**********************/
/* OPSLAAN EN OPHALEN */
/**********************/
let lijstMetCreaties = [];


// functie die de creatie opslaat in een lokale array
// en die array ook in localstorage opslaat om die voor later gebruik te onthouden
let creatieOpslaan = () => {
    // gebruiker attenderen dat er nog geen naam is ingevuld
    if (huidigeCreatie.naam == "") {
        // feedback richting gebruiker tonen 
        meldingTonen("Geef uw creatie een naam");
    }
    
    // anders de schoen opslaan
    // en de gebruiker laten weten dat dat gelukt is
    else {
        // maak een kloon van de huidige schoen
        // voeg die toe aan de array
        lijstMetCreaties.push(structuredClone(huidigeCreatie));
        
        // sla de array op in localstorage
        localStorage.setItem("lijstMetCreaties", JSON.stringify(lijstMetCreaties));

        // feedback richting gebruiker tonen 
        meldingTonen("Uw creatie is opgeslagen!");

        // de lijst met creaties op het scherm updaten
        updateCreaties();
    }
}

document.querySelector("#save").addEventListener("click", creatieOpslaan);



// functie op een opgeslagen creatie opnieuw te tonen
// de trigger is nu een button is de lijst met creaties
function creatieTonen() {
    // het data-index attribuut van de button
    // geeft de plek in de array aan van de creatie die bij de button hoort
    let creatieIndexInArray = this.dataset.index;
 
    // die creatie zoeken we op in de array
    let teTonenCreatie = lijstMetCreaties[creatieIndexInArray];

    // een kloon van daarvan wordt opgeslagen in de huidigeSchoen
    huidigeCreatie = structuredClone(teTonenCreatie);

    // vervolgens wordt adhv daarvan de zichtbare schoen geupdatet
    setHuidigeCreatie();

    // feedback richting gebruiker tonen 
    meldingTonen(`Hier is ${huidigeCreatie.naam} 's schoen`);
}


// functie om een creatie te verwijderen
// ook uit de loaclstorage - weg is weg weg
function creatieVerwijderen() {
    // het data-index attribuut van de button
    // geeft de plek in de array aan van de creatie die bij de button hoort
    let creatieIndexInArray = this.dataset.index;

    // die creatie zoeken we op in de array
    let teVerwijderenCreatie = lijstMetCreaties[creatieIndexInArray];

    // feedback richting gebruiker tonen 
    meldingTonen(`${teVerwijderenCreatie.naam}'s schoen is verwijderd`);

    // de creatie uit de array verwijderen
    lijstMetCreaties.splice(this.dataset.index, 1);

    // de aangepaste array opslaan in localstorage
    localStorage.setItem("lijstMetCreaties", JSON.stringify(lijstMetCreaties));

    // de lijst met creaties op het scherm updaten
    updateCreaties();
}


// functie die de lijst met creaties toont 
// elke creatie is een button waarmee de creatie weer bekeken kan worden
let updateCreaties = () => {
    // update aantal creaties
    let aantalCreaties = lijstMetCreaties.length;

    // het aantal op het scherm tonen
    document.querySelector("#aantalCreaties span").innerHTML = aantalCreaties;

    
    // de lijst voor de buttons opzoeken
    var deLijst = document.querySelector("#deLijst");
    // die eerst even leeg maken - beetje viezig
    deLijst.innerHTML = "";

    // en dan weer vullen met 2 button voor elke creatie
    // met data-index wordt een custom attribuut op de buttons gezet
    // de waarde (i) is de plek in de array van de bijbehorende creatie
    // die wordt elders gebruikt om de goede creatie te tonen of te verwijderen
    for (let i = 0; i < lijstMetCreaties.length; i++) {
        let creatieHtml = 
        `<li>
            <h4>${lijstMetCreaties[i].naam}</h4>
            <button data-index="${i}" aria-label="toon ${lijstMetCreaties[i].naam}" class="schoen">
                <img src="images/IMG-MainSchoen2.png" alt="Nike Schoen wit"/>
                <img src="${creatieOpties.bovenZool[lijstMetCreaties[i].bovenZool]}" alt="Boven zool wit"/>
                <img src="${creatieOpties.onderZool[lijstMetCreaties[i].onderZool]}" alt="Onder zool wit"/>
                <img src="${creatieOpties.bodyAchter[lijstMetCreaties[i].bodyAchter]}" alt="Body achter wit"/>
                <img src="${creatieOpties.bovenZool[lijstMetCreaties[i].bovenZool]}" alt="Body midden wit"/>
                <img src="${creatieOpties.bodyMidden[lijstMetCreaties[i].bodyMidden]}" alt="Body voor wit"/>
                <img src="${creatieOpties.logo[lijstMetCreaties[i].logo]}" alt="Logo wit"/>
                <img src="${creatieOpties.neus[lijstMetCreaties[i].neus]}" alt="Neus wit"/>
            </button>
            <button data-index="${i}" aria-label="verwijder ${lijstMetCreaties[i].naam}">x</button>
        <li>`;

        document.querySelector("#deLijst").insertAdjacentHTML('beforeend', creatieHtml);
    }


    // de net toegevoegde toon-buttons naar kliks laten luisteren
    const toonButtons = deLijst.querySelectorAll("button:first-of-type");

    toonButtons.forEach(toonButton => {
        toonButton.addEventListener("click", creatieTonen);
    });


    // de net toegevoegde verwijder-buttons naar kliks laten luisteren
    const verwijderButtons = deLijst.querySelectorAll("button:last-of-type");

    verwijderButtons.forEach(verwijderButton => {
        verwijderButton.addEventListener("click", creatieVerwijderen);
    });


}





/***********************************************************/
/* opgeslagen creaties ophalen uit localstorage bij onload */
/***********************************************************/
window.onload = () => {
    // als de lijst in localstorage is opgeslagen
    if( localStorage.getItem('lijstMetCreaties')) {
        // de opgeslagen ophalen en opslaan in de lijst met schoenen
        lijstMetCreaties = JSON.parse( localStorage.getItem('lijstMetCreaties') );
        // als er minstens 1 creatie in de lijst zit
        // de lijst met creaties tonen
        if(lijstMetCreaties.length > 0) {
            updateCreaties();
        }
    }
};





/*****************/
/* MELDING TONEN */
/*****************/
let meldingTonen = (melding) => {
    document.querySelector("#melding").innerHTML = melding;

    setTimeout(() => {
        document.querySelector("#melding").innerHTML = "";
    }, 3000);
};