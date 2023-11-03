function recuperaTesto() {
    // Recupera il parametro "testo" dall'URL
    const params = new URLSearchParams(window.location.search);
    const testoCodificato = params.get("testo");
    // Decodifica il testo dalla URL
    const testoDecodificato = decodeURIComponent(testoCodificato);
    // Utilizza il valore del testo nella pagina
    if (testoDecodificato) {
        document.getElementById("user").innerHTML = testoDecodificato;
        //  alert("Testo ricevuto: " + testoDecodificato);
    }
}
setInterval(recuperaTesto, 1000)

$(function () {
    $('#table').bootstrapTable()
})

const itaButton = document.getElementById("ita");
const engButton = document.getElementById("eng");

function ita () {
    // barra
    document.getElementById("servizi").innerHTML = "Servizi"
    document.getElementById("chiSiamo").innerHTML = "Chi siamo"
    document.getElementById("contatti").innerHTML = "Contatti"

    document.getElementById("welcome").innerHTML = "Benvenuto";

    document.getElementById("name").innerHTML = "Nome";
    document.getElementById("role").innerHTML = "Ruolo";
    document.getElementById("ass").innerHTML = "Data Assunzione";

    document.getElementById("description").innerHTML = "Descrizione";
    document.getElementById("model").innerHTML = "Modello";
    document.getElementById("estimate").innerHTML = "Preventivo";
    document.getElementById("ongoing").innerHTML = "In Corso?";
    document.getElementById("finishdate").innerHTML = "Data";

    document.getElementById("gestione").innerHTML = "Gestione prenotazioni";

    document.getElementById("backToTopBtn").innerHTML = "Torna in cima"
    localStorage.setItem("lingua", "italiano")
};

function eng() {
    document.getElementById("servizi").innerHTML = "Services";
    document.getElementById("chiSiamo").innerHTML = "About us";
    document.getElementById("contatti").innerHTML = "Links";

    document.getElementById("welcome").innerHTML = "Welcome";

    document.getElementById("name").innerHTML = "Name";
    document.getElementById("role").innerHTML = "Role";
    document.getElementById("ass").innerHTML = "Ass. Date";

    document.getElementById("description").innerHTML = "Description";
    document.getElementById("model").innerHTML = "Item Model";
    document.getElementById("estimate").innerHTML = "Estimate";
    document.getElementById("ongoing").innerHTML = "On Going?";
    document.getElementById("finishdate").innerHTML = "Date";
    document.getElementById("gestione").innerHTML = "Reservation management"


    document.getElementById("backToTopBtn").innerHTML = "Back to top"
    localStorage.setItem("lingua", "inglese")
};

itaButton.addEventListener("click", ita);
engButton.addEventListener("click", eng);
var linguaSel = localStorage.getItem("lingua");
if (linguaSel === "italiano") {
  ita();
} else if (linguaSel === "inglese") {
  eng();
}