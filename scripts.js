console.log(document.title);

document.querySelector("h2#gen-1").innerHTML = "Generasión 1 Pokimon";

document.querySelector("body > main > div:nth-child(6)").style.backgroundColor = "#1976D2";


console.log(document.querySelector("body").baseURI)


console.log(document.querySelector("body").ownerDocument.domain)


let imagenes = document.querySelectorAll(".img-fixed")
for (let i = 0; i < imagenes.length; i++) {
    console.log(imagenes[i].src);
}


for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}


let flyingTypes = document.querySelectorAll("span.infocard-lg-data.text-muted > small > a.itype.flying")

for (let i = 0; i < flyingTypes.length; i++) {
    
    flyingTypes[i].parentElement.parentElement.style.backgroundColor = "#81C784"
}


