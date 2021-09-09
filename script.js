var dondeEstas;

if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}

var laHora = new Date().getHours();

var elSaludo;

if (5 < laHora && laHora < 12) {
    elSaludo = "Sugiero levantarse ";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "What up ";
} else {
    elSaludo = "Sugiero mimir ";
}

var elEncabezado = document.querySelector("header");

var loPrincipal = document.querySelector("main");

var lorenIpsum = ["♡( ◡‿◡ )","(◕‿◕)♡","	(￢‿￢ )","(´• ω •`)ﾉ","ʕ •ᴥ• ʔ"];

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "hola").parent("vinculos");
    createA("page.html", "chao").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan("( ͡• ͜ʖ ͡• )").parent("title");
    createElement('p','Kaomoji'+random(lorenIpsum)+' de hoy!').parent(loPrincipal);
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#66ff00");
}

function pagina() {
    createSpan("( ఠ ͟ʖ ఠ)").parent("title");
    createElement('p','Kaomoji'+random(lorenIpsum)+' de hoy!').parent(loPrincipal);
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#00c3ff");
}