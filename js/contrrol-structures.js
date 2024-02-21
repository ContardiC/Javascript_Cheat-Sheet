// 1. Condizionali (if, else if, else):
const age = 18;

if (age >= 18) {
    console.log("Sei maggiorenne.");
} else {
    console.log("Sei minorenne.");
}

// 2. Switch:
const dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log("Lunedì");
        break;
    case 2:
        console.log("Martedì");
        break;
    case 3:
        console.log("Mercoledì");
        break;
    // ...
    default:
        console.log("Giorno non valido");
}

// 3. Cicli (for, while, do-while):
// Ciclo for
for (let i = 0; i < 5; i++) {
    console.log(`Iterazione ${i}`);
}

// Ciclo while
let counter = 0;
while (counter < 3) {
    console.log(`Contatore: ${counter}`);
    counter++;
}

// Ciclo do-while
let num = 10;
do {
    console.log(`Numero: ${num}`);
    num--;
} while (num > 5);

// 4. Iterazione sugli elementi di un array:
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(`Colore: ${color}`);
}

// 5. Gestione delle eccezioni (try, catch, finally):
try {
    // Codice che potrebbe generare un errore
    throw new Error("Errore personalizzato");
} catch (error) {
    console.error(`Errore catturato: ${error.message}`);
} finally {
    console.log("Esecuzione finale");
}

// 6. Ternary operator:
const isSunny = true;
const weatherMessage = isSunny ? "È soleggiato!" : "Non è soleggiato.";
console.log(weatherMessage);
