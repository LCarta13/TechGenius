const itaButton = document.getElementById("ita");
const engButton = document.getElementById("eng");

function ita() {
  // barra
  document.getElementById("modifica").innerHTML = "Modifica Dati";
  document.getElementById("datiPers").innerHTML = "I tuoi Dati";
  document.getElementById("servizi").innerHTML = "Richiedi un servizio";

  document.getElementById("riparazione").innerHTML = "Riparazione";
  document.getElementById("assemblaggio").innerHTML = "Assemblaggio";
  document.getElementById("titolo1").innerHTML = "I tuoi dati personali";
  document.getElementById("titolo2").innerHTML = "Riparazioni";
  document.getElementById("titolo3").innerHTML = "Assemblaggio";
  document.getElementById("serviziSpeciali").innerHTML = "Servizi speciali";

  document.getElementById("nomeTit").textContent = "Nome: ";
  document.getElementById("cognomeTit").textContent = "Cognome: ";
  document.getElementById("telefonoTit").textContent = "Telefono: ";
  document.getElementById("indirizzoTit").textContent = "Indirizzo: ";
  document.getElementById("emailTit").textContent = "Indirizzo Email: ";
  document.getElementById("thRip").innerHTML = "Numero di serie";
  document.getElementById("thRip2").innerHTML = "Descrizione";
  document.getElementById("thAss").innerHTML = "Budget";
  document.getElementById("thAss2").innerHTML = "Descrizione";
  //document.getElementById("invia").innerHTML = "Cancella Dati";
  document.getElementById("backToTopBtn").innerHTML = "Torna in cima";
  localStorage.setItem("lingua", "italiano")

}
function eng() {
  document.getElementById("modifica").innerHTML = "Edit Data";
  document.getElementById("datiPers").innerHTML = "Your Data";
  document.getElementById("servizi").innerHTML = "Request a Service";

  document.getElementById("riparazione").innerHTML = "Repair";
  document.getElementById("assemblaggio").innerHTML = "Assembly";
  document.getElementById("titolo1").innerHTML = "Your Personal Data";
  document.getElementById("titolo2").innerHTML = "Repairs";
  document.getElementById("titolo3").innerHTML = "Assembly";
  document.getElementById("serviziSpeciali").innerHTML = "Special services";

  document.getElementById("nomeTit").textContent = "First Name: ";
  document.getElementById("cognomeTit").textContent = "Last Name: ";
  document.getElementById("telefonoTit").textContent = "Phone: ";
  document.getElementById("indirizzoTit").textContent = "Address: ";
  document.getElementById("emailTit").textContent = "Email Address: ";
  document.getElementById("thRip").innerHTML = "Serial Number";
  document.getElementById("thRip2").innerHTML = "Description";
  document.getElementById("thAss").innerHTML = "Budget";
  document.getElementById("thAss2").innerHTML = "Description";
  document.getElementById("backToTopBtn").innerHTML = "Back to Top";
  localStorage.setItem("lingua", "inglese")

}
itaButton.addEventListener("click", ita);
engButton.addEventListener("click", eng);
var linguaSel = localStorage.getItem("lingua");
if (linguaSel === "italiano") {
  ita();
} else if (linguaSel === "inglese") {
  eng();
}

function caricaDati() {
  var nome = localStorage.getItem("nome");
  var cognome = localStorage.getItem("cognome");
  var telefono = localStorage.getItem("telefono");
  var indirizzo = localStorage.getItem("indirizzo");
  var email = localStorage.getItem("email");

  document.getElementById("nome").innerHTML = nome;
  document.getElementById("cognome").innerHTML = cognome;
  document.getElementById("telefono").innerHTML = telefono;
  document.getElementById("indirizzo").innerHTML = indirizzo;
  document.getElementById("email").innerHTML = email;
}
//creazione colonne e compilazione dati riparazione

function caricaRiparazioni() {
  var datiMemorizzati1 = JSON.parse(localStorage.getItem("datiUtenteRip"));

  // Ora puoi iterare sui dati e stamparli
  if (datiMemorizzati1) {
    datiMemorizzati1.forEach(function (dato) {
      var riga = document.createElement("tr");

      var colonnaNum = document.createElement("td");
      var colonnaDesc = document.createElement("td");

      colonnaNum.innerText = dato.numSerie;
      colonnaDesc.innerText = dato.descrizione;

      riga.appendChild(colonnaNum);
      riga.appendChild(colonnaDesc);

      var tabella = document.getElementById("tabella1");
      tabella.appendChild(riga);



    });
  }

  /*var num = localStorage.getItem("num")
var descrizione = localStorage.getItem("descrizione")

var riga = document.createElement("tr");

var colonnaNum = document.createElement("td");
var colonnaDesc = document.createElement("td");

colonnaNum.innerText = num;
colonnaDesc.innerText = descrizione;

riga.appendChild(colonnaNum);
riga.appendChild(colonnaDesc);

var tabella = document.getElementById("tabella1");
tabella.appendChild(riga);
*/
}

//creazione colonne e compilazione dati assemblaggio
function caricaAssemblaggio() {
  var datiMemorizzati2 = JSON.parse(localStorage.getItem("datiUtenteAss"));


  if (datiMemorizzati2) {
    datiMemorizzati2.forEach(function (dato) {
      var riga = document.createElement("tr");

      var colonnaBudget = document.createElement("td");
      var colonnaDescPc = document.createElement("td");

      colonnaBudget.innerText = dato.num;
      colonnaDescPc.innerText = dato.descrizione;

      riga.appendChild(colonnaBudget);
      riga.appendChild(colonnaDescPc);

      var tabella = document.getElementById("tabella2");
      tabella.appendChild(riga);



    });
  }

  /*
var budget = localStorage.getItem("budget");
var descrizionePc = localStorage.getItem("descrizionePc");

var riga = document.createElement("tr");

var colonnaBudget = document.createElement("td");
var colonnaDescPc = document.createElement("td");

colonnaBudget.innerText = budget;
colonnaDescPc.innerText = descrizionePc;

riga.appendChild(colonnaBudget);
riga.appendChild(colonnaDescPc);

var tabella = document.getElementById("tabella2");
tabella.appendChild(riga);*/
}
window.addEventListener("load", caricaDati);
window.addEventListener("load", caricaRiparazioni);
window.addEventListener("load", caricaAssemblaggio);

function cancellaDati() {
  localStorage.clear();
  location.reload()

}

document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTopBtn");
  const main = document.getElementById("main");

  backToTopButton.addEventListener("click", function () {
    main.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
