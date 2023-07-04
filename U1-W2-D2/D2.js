/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 10;
let num2 = 12;

if (num1 > num2) {
	console.log("Il primo numero è più grande del secondo numero");
} else {
	console.log("Il secondo numero è più grande del primo numero");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

if (7 !== 5) {
	console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

if (25 % 5 == 0) {
	console.log("divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

num1 = 15;
num2 = 7;

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
	console.log("è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let saldoTotale = 80;
let spedizione = 10;
let messaggio = "il suo saldo totale è:";

if (saldoTotale > 50) {
	saldoTotale -= spedizione;
	messaggio = "il suo saldo totale inclusa la spedizione grutuita è: ";
}

console.log(messaggio + saldoTotale);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

saldoTotale = saldoTotale - (20 / 100) * saldoTotale;
messaggio = "il suo saldo totale scontato del 20% è: ";

if (saldoTotale > 50) {
	messaggio = "il suo saldo totale scontato del 20% inclusa la spedizione gratuita è di: ";
}

console.log(messaggio + saldoTotale);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let var1 = 9;
let var2 = 13;
let var3 = 19;

if (var1 > var2 && var1 > var3) {
	console.log(var1);

	if (var2 > var3) {
		console.log(var2);
		console.log(var3);
	} else {
		console.log(var3);
		console.log(var2);
	}
} else if (var2 > var1 && var2 > var3) {
	console.log(var2);

	if (var1 > var3) {
		console.log(var1);
		console.log(var3);
	} else {
		console.log(var3);
		console.log(var1);
	}
} else if (var3 > var1 && var3 > var2) {
	console.log(var3);

	if (var1 > var2) {
		console.log(var1);
		console.log(var2);
	} else {
		console.log(var2);
		console.log(var1);
	}
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = "test ciao";

if (typeof valore === "number") {
	console.log("La variabile fornita è un numero");
} else {
	console.log("La variabile fornita non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num1 % 2 == 0) {
	console.log("Ll numero " + num1 + " è pari");
} else {
	console.log("Ll numero " + num1 + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 10 && val < 5) {
	console.log("Meno di 10");
	console.log("meno di 5");
} else {
	console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
	name: "John",
	lastName: "Doe",
	skills: ["javascript", "html", "css"],
	city: "Toronto",
};

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const array = [];

array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array[array.length - 1] = 100;

console.log(array);
