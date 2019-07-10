//promenljiva karteZaIgru sadrzi niz objekata koji sadrze ime i sliku

const karteZaIgru = [
    {
    name: "dusko1",
    img: "dusko1.png",
    },
    {
    name: "daca",
    img: "daca.png",
    },

    {
    name: "gonzales",
    img: "gonzales.png",
    },
    {
    name: "kojot",
    img: "kojot.png",
    },
    {
    name: "marsovac",
    img: "marsovac.png",
    },
    {
    name: "pepeletvor",
    img: "pepeletvor.png",
    },
    {
    name: "elmer",
    img: "elmer.png",
    },
    {
    name: "pticaTrkacica",
    img: "pticaTrkacica.png",
    },
    {
    name: "silvi2",
    img: "silvi2.png",
    },
    {
    name: "sofronije",
    img: "sofronije.png",
    },
    {
    name: "tasa2",
    img: "tasa2.png",
    },
    {
    name: "twiti2",
    img: "twiti2.png",
    },
    
]



//dodavanje elementa section sa klasom talon u koji ce biti smestene karte
const igra = document.getElementById("igraPamcenja");
const talon = document.createElement("section");
talon.setAttribute("class", "talon");
igra.appendChild(talon);


//dupliranje karata
let duplikati = karteZaIgru.concat(karteZaIgru);

//mesanje karata
duplikati.sort(() => 0.5 - Math.random());

//svaku kartu iz niza karteZaIgru smestamo u poseban div 
duplikati.forEach(item => {
    const karta = document.createElement("div");
    karta.classList.add("karta");
    karta.dataset.name = item.name;
    
//u svaki div sa klasom karta dodajemo dva div-a za prednju i zadnju stranu karte kako bismo omogucili okretanje
    const prednjaStrana = document.createElement("div");
    prednjaStrana.classList.add("prednjaStrana");

    const zadnjaStrana = document.createElement("div");
    zadnjaStrana.classList.add("zadnjaStrana");
    zadnjaStrana.style.backgroundImage = `url(${item.img})`

    talon.appendChild(karta);
    karta.appendChild(prednjaStrana);
    karta.appendChild(zadnjaStrana);
})


let prvaOtvorena = "";
let drugaOtvorena = "";
let brojac = 0;
let prethodnaOdabrana = null;
let odlaganje = 1200;
let reset = document.querySelector("#restart");
let upareneKarte = document.getElementsByClassName("uparene");




//dodavanje EventListener metoda celom talonu na klik
talon.addEventListener("click", function(event){
    let kliknute = event.target;
    
//sprecavanje selektovanja talona, otvaranja iste karte u prvom i drugom pokusaju i ponovnog otvaranja uparenih karata

    if(
    kliknute.nodeName === "SECTION" || 
    kliknute === prethodnaOdabrana || kliknute.parentNode.classList.contains("uparene")
    ){
        return
    }
    
//ogranicavanje otvaranja na samo dve karte
    if(brojac < 2){
        brojac++
//dodavanje klase odabrane na prvu i drugu otvorenu kartu
        if(brojac === 1) {
            prvaOtvorena = kliknute.parentNode.dataset.name;
            //console.log(prvaOtvorena);
            kliknute.parentNode.classList.add("odabrane");
        }
        else {
            drugaOtvorena = kliknute.parentNode.dataset.name;
            //console.log(drugaOtvorena);
            kliknute.parentNode.classList.add("odabrane");
        }

       
        
       if(prvaOtvorena !== "" && drugaOtvorena !== ""){
//provera jednakosti karata
           if(prvaOtvorena === drugaOtvorena && event.target !== prethodnaOdabrana) {
           setTimeout(uparene, odlaganje);
           setTimeout(noviPotez, odlaganje);

          
          
           }
           else {
           setTimeout(noviPotez, odlaganje);
           }
       }
        prethodnaOdabrana = kliknute; 
        
    }  
    
})

//dodavanje klase uparene za sve selektovane
const uparene = () => {
    var odabrane = document.querySelectorAll(".odabrane");
    odabrane.forEach(karta => {
    karta.classList.add("uparene");
//prelazak na sledeci nivo kada su sve karte uparene
    if(upareneKarte.length == 24){
    document.querySelector("#sledeciNivo").disabled = false;
    }
    })
}

//resetovanje poteza 
const noviPotez = () => {
    prethodnaOdabrana = "";
    drugaOtvorena = "";
    brojac = 0;

    var odabrane = document.querySelectorAll(".odabrane");
    odabrane.forEach(karte => {
    karte.classList.remove("odabrane");
    })
}


//zapocinjanje nove igre 

reset.onclick = () => {
    window.location.reload(true);
}



















