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

  document.getElementById("titolo1").innerHTML = "Ciao! Richiedi un assemblaggio";
  document.getElementById("budget").placeholder = "Budget Massimo";
  document.getElementById("titolo2").innerHTML = "Indica il tuo budget e l'utilizzo che farai del PC";
  document.getElementById("invia").innerHTML = "Invia";
  document.getElementById("backToTopBtn").innerHTML = "Torna in cima";
  localStorage.setItem("lingua", "italiano")
}

function eng() {
  document.getElementById("modifica").innerHTML = "Edit Data";
  document.getElementById("datiPers").innerHTML = "Your Data";
  document.getElementById("servizi").innerHTML = "Request a Service";
  document.getElementById("serviziSpeciali").innerHTML = "Special services";
  document.getElementById("riparazione").innerHTML = "Repair";
  document.getElementById("assemblaggio").innerHTML = "Assembly";
  document.getElementById("titolo1").innerHTML = "Hello! Request an Assembly";
  document.getElementById("budget").placeholder = "Maximum Budget";
  document.getElementById("titolo2").innerHTML = "Specify your budget and the intended use of the PC";
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
    var budget = document.getElementById("budget").value;
    var descrizionePc = document.getElementById("descrizionePc").value;
  
    if (budget == "" || descrizionePc == "") {
      alert("Attenzione! Dati mancanti, compilare tutti i campi.");
    } else {
     
      var datiMemorizzati = JSON.parse(localStorage.getItem("datiUtenteAss")) || [];
  
      
      datiMemorizzati.push({ num: budget, descrizione: descrizionePc });
  
     
      localStorage.setItem("datiUtenteAss", JSON.stringify(datiMemorizzati));
  
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