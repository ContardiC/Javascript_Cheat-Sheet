// Dichiarazione di una variabile
let message; // Creazione di uno "spazio di memoria con nome" per salvare dati

// Assegnazione di un valore alla variabile
message = 'Hello'; // Memorizzazione della stringa 'Hello'

// Possiamo anche dichiarare e assegnare in una singola riga
let user = 'John', age = 25, isAdmin = true;

// Tipi di dati comuni:
// 1. Stringhe: sequenze di caratteri
let name = 'Alice';

// 2. Numeri: interi o decimali
let pi = 3.14;

// 3. Booleani: true o false
let isLogged = true;

// 4. Valore speciale: null (variabile vuota)
let emptyValue = null;

// 5. Array: collezione ordinata di valori
let colors = ['red', 'green', 'blue'];

// 6. Oggetti: collezione di coppie chiave-valore
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// 7. Symbol (meno comune): identificatore univoco
const uniqueID = Symbol('description');

// Utilizzo di typeof per verificare il tipo di variabile
console.log(typeof name); // 'string'
console.log(typeof pi); // 'number'
console.log(typeof isLogged); // 'boolean'
console.log(typeof emptyValue); // 'object' (un errore di JavaScript)
console.log(typeof colors); // 'object' (array è un tipo di oggetto)
console.log(typeof person); // 'object'
console.log(typeof uniqueID); // 'symbol'

