function checkCredential(email, password) {
    var admin1 = {
        profilo: "admin",
        name: "admin1",
        email: "admin1@123.it",
        password: "Password"
    }

    var admin2 = {
        profilo: "admin",
        name: "admin2",
        email: "admin2@123.it",
        password: "PassworD"
    }

    var user1 = {
        profilo: "user",
        name: "user1",
        email: "user1@123.it",
        password: "passworD"
    }

    var user2 = {
        profilo: "user",
        name: "user2",
        email: "user2@123.it",
        password: "passworD"
    }


    var users = [admin1, admin2, user1, user2];
    var correctCredential = false;
    var profileTipology;
    var profileName;


    for (i = 0; i < users.length; i++) {
        if (users[i].email == email.value && users[i].password == password.value) {
            correctCredential = true;
            profileName = users[i].name
            profileTipology = users[i].profilo;
        }
    }

    if (correctCredential == true) {
        if (profileTipology == "user") {
            // window.open("../pages/user.html")
            // alert("prova2")
            const testoDaPassare = profileName;
            // Codifica il testo per l'URL
            const testoCodificato = encodeURIComponent(testoDaPassare);
            // Crea l'URL con il parametro "testo" e passa il testo codificato
            const urlDestinazione = "anagrafica.html?testo=" + testoCodificato;
            // Reindirizza alla pagina di destinazione
            window.open(urlDestinazione)

        } else {
            // alert("prova2")
            const testoDaPassare = profileName;
            // Codifica il testo per l'URL
            const testoCodificato = encodeURIComponent(testoDaPassare);
            // Crea l'URL con il parametro "testo" e passa il testo codificato
            const urlDestinazione = "service.html?testo=" + testoCodificato;
            // Reindirizza alla pagina di destinazione
            // window.location.href = urlDestinazione;
            window.open(urlDestinazione)
            // alert("prova")
        }
    } else {
        alert("Credenziali errate");
    }
}

const itaButton = document.getElementById("ita");
const engButton = document.getElementById("eng");

function ita () {
    // barra
    document.getElementById("servizi").innerHTML = "Servizi"
    document.getElementById("chiSiamo").innerHTML = "Chi siamo"
    document.getElementById("contatti").innerHTML = "Contatti"

    document.getElementById("emailHelp").innerHTML = "Non divulgheremo la tua email con nessuno."
    document.getElementById("backToTopBtn").innerHTML = "Torna in cima"
    localStorage.setItem("lingua", "italiano")

};

function eng () {
    document.getElementById("servizi").innerHTML = "Services"
    document.getElementById("chiSiamo").innerHTML = "About us"
    document.getElementById("contatti").innerHTML = "Links"

    document.getElementById("emailHelp").innerHTML = "We'll never share your email with anyone else.";
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

const backToTopButton = document.getElementById("backToTopBtn");
backToTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

