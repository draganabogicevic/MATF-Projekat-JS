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
    {
    name: "kobac",
    img: "kobac.png",
    },
    {
    name: "dusko2",
    img: "dusko2.png",
    },
    {
    name: "lesinar",
    img: "lesinar.png",
    },
    {
    name: "lt",
    img: "lt.png",
    },
    {
    name: "prase",
    img: "prase.png",
    },
    {
    name: "vestica",
    img: "vestica.png",
    },
    {
    name: "vesticad",
    img: "vesticad.png",
    },
    {
    name: "lesinard",
    img: "lesinard.png",
    },
    {
    name: "dusko2l",
    img: "dusko2l.png",
    },
    {
    name: "twiti2l",
    img: "twiti2l.png",
    },
    {
    name: "marsovacl",
    img: "marsovacl.png",
    },
    {
    name: "pepeletvorl",
    img: "pepeletvorl.png",
    },
    {
    name: "silvi2d",
    img: "silvi2d.png",
    },
    {
    name: "dusko1d",
    img: "dusko1d.png",
    },
    {
    name: "dacad",
    img: "dacad.png",
    },
    {
    name: "gonzalesl",
    img: "gonzalesl.png",
    },
]

const igra = document.getElementById("igraPamcenja");
const talon = document.createElement("section");
talon.setAttribute("class", "talon");
igra.appendChild(talon);


let duplikati = karteZaIgru.concat(karteZaIgru);


duplikati.sort(() => 0.5 - Math.random())


duplikati.forEach(item => {
    const karta = document.createElement("div");
    karta.classList.add("karta");
    karta.dataset.name = item.name;
    

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

talon.addEventListener("click", function(event){
    let kliknute = event.target;
    


    if(
    kliknute.nodeName === "SECTION" || 
    kliknute === prethodnaOdabrana || kliknute.parentNode.classList.contains("uparene")
    ){
        return
    }

    if(brojac < 2){
        brojac++

        if(brojac === 1) {
            prvaOtvorena = kliknute.parentNode.dataset.name;
            console.log(prvaOtvorena);
            kliknute.parentNode.classList.add("odabrane");
        }
        else {
            drugaOtvorena = kliknute.parentNode.dataset.name;
            console.log(drugaOtvorena);
            kliknute.parentNode.classList.add("odabrane");
        }

       
        
       if(prvaOtvorena !== "" && drugaOtvorena !== ""){

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


const uparene = () => {
    var odabrane = document.querySelectorAll(".odabrane");
    odabrane.forEach(karta => {
    karta.classList.add("uparene");
    if(upareneKarte.length == 36){
    document.querySelector("#sledeciNivo").disabled = false;
    }
    })
}

const noviPotez = () => {
    prethodnaOdabrana = "";
    drugaOtvorena = "";
    brojac = 0;

    var odabrane = document.querySelectorAll(".odabrane");
    odabrane.forEach(karte => {
    karte.classList.remove("odabrane");
    })
}


reset.onclick = () => {
    window.location.reload(true);
}