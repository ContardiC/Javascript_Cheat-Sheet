function mostraVoce() {
    var menu = document.getElementById("menu");
    var indice = menu.selectedIndex;
    var valore = menu.options[indice].value;
    document.getElementById("risultato").innerHTML = "Hai selezionato la voce " + valore;
  }
  // Ottiene il bottone dal suo id
  var bottone = document.getElementById("bottone");
  // Aggiunge un gestore di eventi al bottone
  bottone.addEventListener("click", mostraVoce);