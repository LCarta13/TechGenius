function aggiungiOrdine() {

    const modulo = document.getElementById("moduloPrenotazione");
    const modelloSelect = modulo.querySelector("#modello").value;
    const tipoServizio = modulo.querySelector("#tipoServizio").value;
    const spiegazioneServizio = modulo.querySelector("#spiegazioneServizio").value;
    const tabellaOrdini = document.querySelector("#tabellaOrdini tbody");

    const nuovaRiga = tabellaOrdini.insertRow(-1);
    const cellaTipoServizio = nuovaRiga.insertCell(0);
    const cellaModello = nuovaRiga.insertCell(1);
    const cellaSpiegazioneServizio = nuovaRiga.insertCell(2);
    const cellaElimina = nuovaRiga.insertCell(3);

    cellaTipoServizio.innerHTML = `<P class="celle">${tipoServizio}</P>`;
    cellaModello.innerHTML = `<P class="celle">${modelloSelect}</P>`;
    cellaSpiegazioneServizio.innerHTML = `<P class="celle">${spiegazioneServizio}</P>`;
    cellaElimina.innerHTML = '<button class="bottone-elimina"onclick="eliminaOrdine(this)" id="elimina2"> X </button>';

    document.getElementById("tabellaOrdini").style.display = "table";
    document.getElementById("inviaOrdini").style.display = "block";

    modulo.reset();
}

function eliminaOrdine(bottone) {
    const riga = bottone.parentElement.parentElement;
    riga.parentNode.removeChild(riga);
}

function inviaOrdini() {
    alert('Ordini inviati con successo.');
}
const backToTopButton = document.getElementById("backToTopBtn");
const main = document.getElementById("main");
document.addEventListener("DOMContentLoaded", function () {
    backToTopButton.addEventListener("click", function () {
        main.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
const itaButton = document.getElementById("ita");
const engButton = document.getElementById("eng");

function ita () {
    // barra
    document.getElementById("modifica").innerHTML = "Modifica Dati";
    document.getElementById("datiPers").innerHTML = "I tuoi Dati";
    document.getElementById("servizi").innerHTML = "Richiedi un servizio";
    document.getElementById("riparazioneBarra").innerHTML = "Riparazione";
    document.getElementById("assemblaggioBarra").innerHTML = "Assemblaggio";
    document.getElementById("serviziSpeciali").innerHTML = "Servizi speciali";

    document.getElementById("tipodiservizio").innerHTML = "Tipo di servizio";
    document.getElementById("tipoDiServizio").innerHTML = "Tipo di servizio";

    document.getElementById("modellotab").innerHTML = "Modello";
    document.getElementById("Modello").innerHTML = "Modello";
    document.getElementById("spiegazione").innerHTML = "Spiegazione del servizio";
    document.getElementById("Spiegazione").innerHTML = "Spiegazione del servizio";


    document.getElementById("titolo").innerHTML = "Riparazioni e Assemblaggio PC";
    document.getElementById("elimina").innerHTML = "Elimina";
    document.getElementById("inviaOrdini").innerHTML = "Invia Ordini";
    document.getElementById("bottoneModulo").innerHTML = "Aggiungi Ordine";
    document.getElementById("pcGaming").value = "PC da Gaming";
    document.getElementById("pcLavoro").value = "PC da Lavoro";
    document.getElementById("telefono").value = "Telefono";
    document.getElementById("pcGaming").innerHTML = "PC da Gaming";
    document.getElementById("pcLavoro").innerHTML = "PC da Lavoro";
    document.getElementById("telefono").innerHTML = "Telefono";
    document.getElementById("Riparazione").value = "Riparazione";
    document.getElementById("Riparazione").innerHTML = "Riparazione";
    document.getElementById("Assemblaggio").value = "Assemblaggio";
    document.getElementById("Assemblaggio").innerHTML = "Assemblaggio";
    document.getElementById("spiegazioneServizio").placeholder = "Inserisci una spiegazione dettagliata del servizio richiesto o i componenti per l'assemblaggio";

    document.getElementById("backToTopBtn").innerHTML = "Torna in cima";
    localStorage.setItem("lingua", "italiano")

};

function eng () {

    document.getElementById("modifica").innerHTML = "Edit Data";
    document.getElementById("datiPers").innerHTML = "Your Data";
    document.getElementById("servizi").innerHTML = "Request a Service";
    document.getElementById("serviziSpeciali").innerHTML = "Special services";
    document.getElementById("riparazioneBarra").innerHTML = "Repair";
    document.getElementById("assemblaggioBarra").innerHTML = "Assembly";

    document.getElementById("tipoDiServizio").innerHTML = "Type of service";
    document.getElementById("tipodiservizio").innerHTML = "Type of service";
    document.getElementById("modellotab").innerHTML = "Model";
    document.getElementById("Modello").innerHTML = "Model";
    document.getElementById("spiegazione").innerHTML = "Explanation of the service";
    document.getElementById("Spiegazione").innerHTML = "Explanation of the service";

    document.getElementById("titolo").innerHTML = "PC Repairs and Assembly";
    document.getElementById("elimina").textContent = "Delete";
    document.getElementById("inviaOrdini").innerHTML = "Stend orders";
    document.getElementById("bottoneModulo").innerHTML = "Add order";
    document.getElementById("pcGaming").value = "Gaming PC";
    document.getElementById("pcLavoro").value = "Work PC";
    document.getElementById("telefono").innerHTML = "Phone";
    document.getElementById("telefono").value = "Phone";
    document.getElementById("pcGaming").innerHTML = "Gaming PC";
    document.getElementById("pcLavoro").innerHTML = "Work PC";
    document.getElementById("Riparazione").value = "Repair";
    document.getElementById("Riparazione").innerHTML = "Repair";
    document.getElementById("Assemblaggio").value = "Assembly";
    document.getElementById("Assemblaggio").innerHTML = "Assembly";
    document.getElementById("spiegazioneServizio").placeholder = "Enter a detailed explanation of the requested service or assembly components";

    document.getElementById("backToTopBtn").innerHTML = "Back to top";
    localStorage.setItem("lingua", "inglese")

};

itaButton.addEventListener("click", ita);
engButton.addEventListener("click", eng);
var linguaSel = localStorage.getItem("lingua");
if (linguaSel === "italiano") {
  ita();
} else if (linguaSel === "inglese"){
  eng();
}

