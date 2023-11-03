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
  document.getElementById("titolo1").innerHTML = "Ciao! Inserisci i tuoi dati";
 
  document.getElementById("nome").placeholder = "Nome";
  document.getElementById("cognome").placeholder = "Cognome";
  document.getElementById("telefono").placeholder = "Telefono";
  document.getElementById("indirizzo").placeholder = "Indirizzo";
  document.getElementById("email").placeholder = "Indrizzo Email";
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
  document.getElementById("titolo1").innerHTML = "Hello! Enter your data";
  document.getElementById("nome").placeholder = "First Name";
  document.getElementById("cognome").placeholder = "Last Name";
  document.getElementById("telefono").placeholder = "Phone";
  document.getElementById("indirizzo").placeholder = "Address";
  document.getElementById("email").placeholder = "Email Address";
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
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  var telefono = document.getElementById("telefono").value;
  var indirizzo = document.getElementById("indirizzo").value;
  var email = document.getElementById("email").value;

  if (
    nome == "" ||
    cognome == "" ||
    telefono == "" ||
    indirizzo == "" ||
    email == ""
  ) {
    alert("Attenzione! Dati mancanti, compilare tutti i campi.");
  } else {
    localStorage.setItem("nome", nome);
    localStorage.setItem("cognome", cognome);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("indirizzo", indirizzo);
    localStorage.setItem("email", email);
    
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

