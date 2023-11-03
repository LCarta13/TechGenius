const itaButton = document.getElementById("ita");
const engButton = document.getElementById("eng");

function ita() {
  // barra
  document.getElementById("modifica").innerHTML = "Modifica Dati";
  document.getElementById("datiPers").innerHTML = "I tuoi Dati";
  document.getElementById("servizi").innerHTML = "Richiedi un servizio";
  document.getElementById("riparazione").innerHTML = "Riparazione";
  document.getElementById("assemblaggio").innerHTML = "Assemblaggio";
  document.getElementById("serviziSpeciali").innerHTML = "Servizi speciali";


  document.getElementById("titolo1").innerHTML = "Ciao! Richiedi una riparazione";
  document.getElementById("numSerie").placeholder = "Numero di serie";
  document.getElementById("titolo2").innerHTML = "Descrivi il tuo problema:";
  document.getElementById("invia").innerHTML = "Invia";
  document.getElementById("backToTopBtn").innerHTML = "Torna in cima";
  localStorage.setItem("lingua", "italiano")
  
}
function eng() {
  document.getElementById("modifica").innerHTML = "Edit Data";
  document.getElementById("datiPers").innerHTML = "Your Data";
  document.getElementById("servizi").innerHTML = "Request a Service";
  document.getElementById("riparazione").innerHTML = "Repair";
  document.getElementById("assemblaggio").innerHTML = "Assembly";
  document.getElementById("serviziSpeciali").innerHTML = "Special services";
  document.getElementById("titolo1").innerHTML = "Hello! Request a Repair";
  document.getElementById("numSerie").placeholder = "Serial Number";
  document.getElementById("titolo2").innerHTML = "Describe your issue:";
  document.getElementById("invia").innerHTML = "Submit";
  document.getElementById("backToTopBtn").innerHTML = "Back to Top";
  localStorage.setItem("lingua", "inglese")

}
itaButton.addEventListener("click", ita);
engButton.addEventListener("click", eng);
var linguaSel = localStorage.getItem("lingua");
if (linguaSel === "italiano") {
  ita();
} else if (linguaSel === "inglese"){
  eng();
}


function inviaDati() {
    var num = document.getElementById("numSerie").value;
    var descrizione = document.getElementById("descrizioneProblema").value;
  
    if (num == "" || descrizione == "") {
      alert("Attenzione! Dati mancanti, compilare tutti i campi.");
    } else {
      
      var datiMemorizzati = JSON.parse(localStorage.getItem("datiUtenteRip")) || [];
  
      datiMemorizzati.push({ numSerie: num, descrizione: descrizione });
  
      localStorage.setItem("datiUtenteRip", JSON.stringify(datiMemorizzati));
  
      window.location.href = "dati_utente.html";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTopBtn");
    const main = document.getElementById("main");

    backToTopButton.addEventListener("click", function() {
        main.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
});