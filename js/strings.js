// Dichiarazione di una stringa
const myString = "Ciao, mondo!";

// Concatenazione di due stringhe
const stringaConcatenata = myString + " Buongiorno!";

// Verifica se la stringa contiene "Ciao"
const contieneCiao = myString.includes("Ciao");

// Estrai una sottostringa dalla posizione 7 alla 12
const sottostringaEstratta = myString.substring(7, 12);

// Rimuovi gli spazi vuoti all'inizio e alla fine della stringa
const stringaSenzaSpazi = "   Ciao, mondo!   ".trim();

// Sostituisci "mondo" con "universo"
const stringaSostituita = myString.replace("mondo", "universo");

// Converti la stringa in maiuscolo
const maiuscolo = myString.toUpperCase();

// Converti la stringa in minuscolo
const minuscolo = myString.toLowerCase();

// Calcola la lunghezza della stringa
const lunghezza = myString.length;

// Esempi di utilizzo
console.log("Stringa concatenata:", stringaConcatenata);
console.log("Contiene 'Ciao':", contieneCiao);
console.log("Sottostringa estratta:", sottostringaEstratta);
console.log("Stringa senza spazi vuoti:", stringaSenzaSpazi);
console.log("Stringa sostituita:", stringaSostituita);
console.log("Maiuscolo:", maiuscolo);
console.log("Minuscolo:", minuscolo);
console.log("Lunghezza della stringa:", lunghezza);
