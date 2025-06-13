/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log("Esercizio A");
console.log(sum);
/* ESERCIZIO B
Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log("Esercizio B");
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Federico",
  surname: "Pini",
  age: "26",
};
console.log("Esercizio C");
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("Esercizio D");
console.log(me);
/* ESERCIZIO E
Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS", "JS"];
console.log("Esercizio E");
console.log(me);
/* ESERCIZIO F
Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("C++");
console.log("Esercizio F");
console.log(me);
/* ESERCIZIO G
Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("Esercizio G");
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("Esercizio 1");
dice = () => {
  const dice = Math.ceil(Math.random() * 6);
  return dice;
};

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log(`Esercizio 2`);
const a = 13;
const b = 12;
whoIsBigger = (a, b) => {
  if (a > b) {
    console.log(`A : ${a} è maggiore di B : ${b}`);
    return a;
  } else if (b > a) {
    console.log(`B : ${b} è maggiore di A : ${a}`);
    return b;
  } else {
    console.log("I due numeri sono uguali");
    return a; // Ritorno A, visto che i due numeri sono uguali
  }
};
const c = whoIsBigger(a, b);
console.log(`Valore finale ${c}`);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log(`Esercizio 3`);
const stringa = "I love coding";
splitMe = (string) => {
  let temp = string.split(" ");
  return temp;
};
const stringaFinale = splitMe(stringa);
console.log(stringaFinale);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log(`Esercizio 4`);
const stringaEsercizio4 = "Epicode";
const BooleanoEsercizio4 = false;
deleteOne = (string, boolean) => {
  let temp;
  if (boolean === true) {
    temp = string.substring(1);
  } else if (boolean === false) {
    temp = string.slice(0, -1);
  }
  return temp;
};
const stringaFinaleEs4 = deleteOne(stringaEsercizio4, BooleanoEsercizio4);
console.log(stringaEsercizio4, BooleanoEsercizio4, stringaFinaleEs4);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log(`Esercizio 5`);
const stringaEsercizio5 = "I have 5 dogs and 5 cats";
onlyLetters = (string) => {
  let temp;
  temp = string.replace(/[0-9]/g, "").replace(/\s{2}/g, " "); // prima rimuovo i numeri e poi sostituisco gli spazi doppi lasciati dai numeri con il Regex /\s{2}/g
  return temp;
};
const stringaFinaleEs5 = onlyLetters(stringaEsercizio5);
console.log(`${stringaEsercizio5} => ${stringaFinaleEs5}`);
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const email1 = "info@epicode.school";
const email2 = "mariorossi@gmail.com";
const notEmail = "ciao";
isThisAnEmail = (string) => {
  const temp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return temp.test(string);
};
console.log(`Esercizio 6`);
console.log("Is", email1, "a valid email?", isThisAnEmail(email1));
console.log("Is", email2, "a valid email?", isThisAnEmail(email2));
console.log("Is", notEmail, "a valid email?", isThisAnEmail(notEmail));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log(`Esercizio 7`);
whatDayIsIt = () => {
  const temp = new Date();
  const day = temp.getDay();
  const week = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return week[day];
};
const date = whatDayIsIt();
console.log(`Oggi è ${date}`);
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log(`Esercizio 8`);
tuttiTiri = [];
const quanteVolte = 6;
rollTheDices = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let tiro = dice();
    tuttiTiri.push(tiro);
    sum = sum + tiro;
  }
  return sum;
};
const sommaTiri = rollTheDices(quanteVolte);
console.log(
  `Dopo ${quanteVolte} tiri di Dado il risultato finale è ${sommaTiri}`
);
console.log(`Ecco tutti i risultati dei tiri ${tuttiTiri}`);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const dataPassata = new Date(2025, 1, 8); // 8 Febbraio, notazione Americana
howManyDays = (date) => {
  const dataAttuale = new Date();
  const ms = dataAttuale - date;
  const differenza = Math.floor(ms / (1000 * 60 * 60 * 24)); // Il valore dei millisecondi di differenza / (Millisecondi in un secondo * Secondi in un minuto * Minuti in un'ora * Ore in un giorno)
  return differenza;
};
const tempoPassato = howManyDays(dataPassata);
console.log(`Esercizio 9`);
console.log(`Sono passati ${tempoPassato} giorni dal giorno ${dataPassata} `);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

normalizzaData = (date) => {
  const giorno = date.getDate();
  const mese = date.getMonth() + 1;
  return `${mese.toString().padStart(2, "0")}-${giorno
    .toString()
    .padStart(2, "0")}`; //padStart(2,0) per avere il formato a doppia cifra per mesi e giorni
};
const myBirthday = new Date(1999, 1, 8);
const myBirthdayNormalizzata = normalizzaData(myBirthday);
isTodayMyBirthday = (birthday) => {
  const oggi = new Date();
  const oggiNormalizzata = normalizzaData(oggi);
  if (birthday === oggiNormalizzata) {
    return true;
  } else {
    return false;
  }
};
console.log("Esercizio 10");
console.log("Il mio compleanno è", myBirthday);
console.log(
  "Il mio compleanno è oggi",
  isTodayMyBirthday(myBirthdayNormalizzata)
);
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log(`Esercizio 11`);
const persona = {
  nome: "Federico",
  cognome: "Pini",
  eta: "26",
};
console.log(persona);
deleteProp = (obj, string) => {
  delete obj[string];
  return obj;
};
deleteProp(persona, "eta");
console.log(persona);

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log(`Esercizio 12`);
newestMovie = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i].Year) > parseInt(array[counter].Year)) {
      counter = i;
    }
  }
  return counter;
};

const counterNuovo = newestMovie(movies);
console.log("Il film più nuovo è", movies[counterNuovo]);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

countMovies = (array) => {
  return array.length;
};
console.log("Esercizio 13");
console.log(movies);
console.log("Nell'array Movies ci sono", countMovies(movies), "film");

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log("Esercizio 14");
onlyTheYears = (array) => {
  const arrayAnni = [];
  for (let i = 0; i < array.length; i++) {
    arrayAnni.push(array[i].Year);
  }
  return arrayAnni;
};

const arrayYears = onlyTheYears(movies);
console.log(arrayYears);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log(`Esercizio 15`);
onlyInLastMillenium = (array) => {
  const arrayLastMillenium = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].Year >= 2000) {
      arrayLastMillenium.push(array[i]);
    }
  }
  return arrayLastMillenium;
};
const array2000 = onlyInLastMillenium(movies);
console.log(array2000);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

sumAllTheYears = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + parseInt(array[i].Year);
  }
  return sum;
};
const somma = sumAllTheYears(movies);
console.log(`Esercizio 16`);
console.log(`La somma degli anni di tutti i film è ${somma}`);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log(`Esercizio 17`);
searchByTitle = (string) => {
  const arrayNuovo = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(string)) {
      arrayNuovo.push(movies[i]);
    }
  }
  return arrayNuovo;
};

const arrayWithNames = searchByTitle("Avengers");
console.log(arrayWithNames);
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log(`Esercizio 18`);
searchAndDivide = (string) => {
  const arrayMatching = [];
  const arrayNotMatching = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(string)) {
      arrayMatching.push(movies[i]);
    } else {
      arrayNotMatching.push(movies[i]);
    }
  }
  const allMovies = {
    match: arrayMatching,
    notmatch: arrayNotMatching,
  };
  return allMovies;
};
const moviesFiltered = searchAndDivide("Lord");
console.log(moviesFiltered);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(`Esercizio 19`);
removeIndex = (n) => {
  movies.splice(n, 1);
};
removeIndex(1);
console.log(movies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log(`Esercizio 20`);
selectId = () => {
  const container = document.getElementById("container");
  return container;
};
console.log(selectId());
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log(`Esercizio 21`);
getTd = () => {
  const td = document.getElementsByTagName("td");
  return td;
};
console.log(getTd());
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log(`Esercizio 22`);
printTd = () => {
  const td = getTd();
  for (let i = 0; i < td.length; i++) {
    console.log(td[i]);
    console.log(td[i].innerText);
  }
};
printTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

addRedLinks = () => {
  const link = document.getElementsByTagName("a");

  for (let i = 0; i < link.length; i++) {
    link[i].style.backgroundColor = "red";
  }
};
addRedLinks();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
addElementToList = () => {
  const list = document.getElementById("myList");
  const li = document.createElement("li");
  li.innerText = "5";
  list.appendChild(li);
};

addElementToList();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

emptyList = () => {
  const list = document.getElementById("myList");
  const listelements = document.getElementsByTagName("li");
  list.innerHTML = "";
};
emptyList();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
addTest = () => {
  const tr = document.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
};
addTest();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
