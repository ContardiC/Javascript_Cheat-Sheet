// Selezionare un elemento nel DOM:
const myElement = document.getElementById('myId'); // Seleziona l'elemento con l'ID specificato

// Modificare il contenuto di un elemento:
myElement.textContent = 'Nuovo testo'; // Imposta il testo all'interno dell'elemento
myElement.innerHTML = '<strong>Testo in grassetto</strong>'; // Imposta l'HTML all'interno dell'elemento

// Modificare gli attributi di un elemento:
myElement.setAttribute('class', 'highlight'); // Imposta l'attributo 'class'
myElement.removeAttribute('data-info'); // Rimuove l'attributo 'data-info'

// Creare nuovi elementi e aggiungerli al DOM:
const newElement = document.createElement('div'); // Crea un nuovo elemento <div>
newElement.textContent = 'Nuovo elemento'; // Imposta il testo dell'elemento
document.body.appendChild(newElement); // Aggiunge l'elemento al body

// Rimuovere un elemento dal DOM:
myElement.remove(); // Rimuove l'elemento selezionato

// Gestire eventi:
myElement.addEventListener('click', () => {
    console.log('Hai cliccato su di me!');
});

// Iterare sugli elementi:
const allParagraphs = document.querySelectorAll('p'); // Seleziona tutti gli elementi <p>
allParagraphs.forEach((paragraph) => {
    console.log(paragraph.textContent);
});

// Cambiare lo stile di un elemento:
myElement.style.color = 'red'; // Imposta il colore del testo
myElement.style.fontSize = '16px'; // Imposta la dimensione del testo

// Ottenere informazioni sul DOM:
console.log(document.title); // Titolo della pagina
console.log(window.innerWidth); // Larghezza della finestra del browser

// Esempi di utilizzo delle API del DOM per manipolare la pagina web!
