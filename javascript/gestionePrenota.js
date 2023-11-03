const prenotazioni = [
    { tipoServizio: "Riparazione", modello: "PC da Gaming", spiegazione: "Sostituzione della scheda video difettosa" },
    { tipoServizio: "Assemblaggio", modello: "PC da Lavoro", spiegazione: "Assemblaggio di un PC da lavoro con prestazioni ottimizzate" },
    { tipoServizio: "Assemblaggio", modello: "Telefono", spiegazione: "Configurazione di un nuovo telefono aziendale" },
    { tipoServizio: "Riparazione", modello: "PC da Gaming", spiegazione: "Aggiornamento del sistema di raffreddamento" },
    { tipoServizio: "Assemblaggio", modello: "PC da Lavoro", spiegazione: "Installazione di software specializzato" },
    { tipoServizio: "Assemblaggio", modello: "Telefono", spiegazione: "Trasferimento dati da vecchio telefono a nuovo dispositivo" },
    { tipoServizio: "Riparazione", modello: "PC da Gaming", spiegazione: "Risoluzione di problemi di connettività di rete" },
    { tipoServizio: "Assemblaggio", modello: "PC da Lavoro", spiegazione: "Upgrade della memoria e dello storage" },
    { tipoServizio: "Assemblaggio", modello: "Telefono", spiegazione: "Installazione di app aziendali e configurazione email" },
    { tipoServizio: "Riparazione", modello: "PC da Gaming", spiegazione: "Sostituzione del disco rigido difettoso" },
    { tipoServizio: "Assemblaggio", modello: "PC da Lavoro", spiegazione: "Ottimizzazione delle prestazioni di sistema" },
    { tipoServizio: "Assemblaggio", modello: "Telefono", spiegazione: "Aggiornamento del sistema operativo e delle app" },
    { tipoServizio: "Riparazione", modello: "PC da Gaming", spiegazione: "Pulizia e manutenzione generale del PC" },
    { tipoServizio: "Assemblaggio", modello: "PC da Lavoro", spiegazione: "Configurazione di reti aziendali" },
    { tipoServizio: "Assemblaggio", modello: "PC da Lavoro", spiegazione: "Configurazione di reti aziendali" },
];


function popolaTabella(data) {
    const tabella = document.getElementById("tabellaPrenotazioni");

    while (tabella.rows.length > 1) {
        tabella.deleteRow(1);
    }

    data.forEach((prenotazione) => {
        const riga = tabella.insertRow();
        const [tipoServizio, modello, spiegazione] = [prenotazione.tipoServizio, prenotazione.modello, prenotazione.spiegazione];

        [tipoServizio, modello, spiegazione].forEach((valore) => {
            const cella = riga.insertCell();
            cella.textContent = valore;
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    popolaTabella(prenotazioni);
    const backToTopButton = document.getElementById("backToTopBtn");
    const main = document.getElementById("main");

    backToTopButton.addEventListener("click", function() {
        main.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
});

function cercaPrenotazione() {
    const input = document.getElementById("inputRicerca");
    const filtro = input.value.toLowerCase();

    const risultati = [];

    for (let i = 0; i < prenotazioni.length; i++) {
        const prenotazione = prenotazioni[i];
        if (
            prenotazione.tipoServizio.toLowerCase().includes(filtro) ||
            prenotazione.modello.toLowerCase().includes(filtro) ||
            prenotazione.spiegazione.toLowerCase().includes(filtro)
        ) {
            risultati.push(prenotazione);
        }
    }

    popolaTabella(risultati);
}
const itaButton = document.getElementById("ita");
const engButton = document.getElementById("eng");

function ita() {
    // barra
    document.getElementById("servizi").innerHTML = "Servizi";
    document.getElementById("chiSiamo").innerHTML = "Chi siamo";
    document.getElementById("contatti").innerHTML = "Contatti";
    document.getElementById("tipoDiServizio").innerHTML = "Tipo di servizio";
    document.getElementById("Modello").innerHTML = "Modello";
    document.getElementById("Spiegazione").innerHTML = "Spiegazione del servizio";
    document.getElementById("titolo").innerHTML = "Gestione delle Prenotazioni";
    document.getElementById("ricerca").innerHTML = "Filtra in base a: tipo, modello o spiegazione";
    document.getElementById("inputRicerca").placeholder = "Cerca per tipo di servizio o modello";
    document.getElementById("back").innerHTML = "Indietro";

    document.getElementById("backToTopBtn").innerHTML = "Torna in cima";
    localStorage.setItem("lingua", "italiano")

};

function eng () {
    document.getElementById("servizi").innerHTML = "Services";
    document.getElementById("chiSiamo").innerHTML = "About us";
    document.getElementById("contatti").innerHTML = "Links";
    document.getElementById("tipoDiServizio").innerHTML = "Type of service";
    document.getElementById("Modello").innerHTML = "Model";
    document.getElementById("Spiegazione").innerHTML = "Explanation of the service";
    document.getElementById("titolo").innerHTML = "Reservation Management";
    document.getElementById("ricerca").innerHTML = "Filter by: type, model, or explanation";
    document.getElementById("inputRicerca").placeholder = 'Search by service type or model';


    document.getElementById("back").innerHTML = "Back";

    document.getElementById("backToTopBtn").innerHTML = "Back to top";
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

