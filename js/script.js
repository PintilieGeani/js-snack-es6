// Ciao Ragazzi,
// Esercizio di oggi: Snack Array e Oggetti
// cartella/repo js-snack-es6


// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.


// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS



//********************************************************************
// Snack 1
// *******************************************************************
// Raccolta Dati:
// Creare array con 10 bici come oggetto dove usiamo come chiavi: nome e peso
// Creare variabile: biciLeggera

// Risoluzione logica:
// Creare funzione che accetta come argomento l'array e con ciclo for scorrere gli elementi dell'array, per ogni elemento preleviamo il peso. All'inizio del ciclo spingiamo dentro la variabile biciLeggera il  peso della prima bici e poi a ciclo con condizione if sostituiamo il valore solo se il successivo valore è minore.

// Output
// console.log(biciLeggera)

// Risoluzione codice
// Raccolta dati:
const bici = [
    {
        nome: "bici 1",
        peso: 7,
    },
    {
        nome: "bici 2",
        peso: 11,
    },
    {
        nome: "bici 3",
        peso: 12
    },
    {
        nome: "bici 4",
        peso: 18
    },
    {
        nome: "bici 5",
        peso: 19
    },
    {
        nome: "bici 6",
        peso: 6
    },
    {
        nome: "bici 7",
        peso: 14
    },
    {
        nome: "bici 8",
        peso: 23
    },
    {
        nome: "bici 9",
        peso: 25
    },
    {
        nome: "bici 10",
        peso: 3
    }
]

let biciLeggera = bici[0]

for(let i = 0; i < bici.length; i++){
    curBici = bici[i]
    if(curBici.peso < biciLeggera.peso){
        biciLeggera = curBici
    }
}

// Output
console.log("Sono la bici leggera", biciLeggera)


//********************************************************************
// Snack 2
// *******************************************************************
// Raccolta dati:
// Creare un arrai di oggetti con le squadre da calcio e le varie chiavi
// Creiamo array vuoto dove inseriamo solo il nome e i falli chiamato nomeFalli

// Risoluzione logica:
// Scorrere con coclo for l'array di oggetti e per ogni oggetto estrare solamente il nome e i falli subiti.

// Output
// console.log(nomeFalli)

// Risoluzione codice
// Raccolta dati:
let squadre = [
    
    {
        nome: "Roma",
        punti: Math.floor(Math.random()* 10 + 1),
        falliSubiti: Math.floor(Math.random()* 20 + 1),
    },
    {
        nome: "Lazio",
        punti: Math.floor(Math.random()* 10 + 1),
        falliSubiti: Math.floor(Math.random()* 20 + 1),
    },
    {
        nome: "Milan",
        punti: Math.floor(Math.random()* 10 + 1),
        falliSubiti: Math.floor(Math.random()* 20 + 1),
    },
    {
        nome: "Venezia",
        punti: Math.floor(Math.random()* 10 + 1),
        falliSubiti: Math.floor(Math.random()* 20 + 1),
    },
    {
        nome: "Padova",
        punti: Math.floor(Math.random()* 10 + 1),
        falliSubiti: Math.floor(Math.random()* 20 + 1),
    },
    {
        nome: "Torino",
        punti: Math.floor(Math.random()* 10 + 1),
        falliSubiti: Math.floor(Math.random()* 20 + 1),
    },
    {
        nome: "Napoli",
        punti: Math.floor(Math.random()* 10 + 1),
        falliSubiti: Math.floor(Math.random()* 20 + 1),
    },

]
let nomeFalli = []

// Risoluzione logica
for(let i = 0; i < squadre.length; i++){
    curSquadra = squadre[i]
    nomeFalli.push({nome: curSquadra.nome, falliSubiti: curSquadra.falliSubiti})
}

// Output
console.table(nomeFalli)


//********************************************************************
// Snack 3 BONUS
// *******************************************************************
// Raccolta dati:
// Creare l'array iniziale di numeri
// Creare varibile "min" per il numero più piccolo
// Creare variabile "max" per il valore più grande.
// Creare variabile "selezionati" per richiamare la funzione

// Risoluzione Logica:
// funzione: dato un array di numeri, scorri con un ciclo for dove la condizione di partenza è la variabile min e la condizione di uscita è la variabile max, per ogni elemento fare push in un nuovo array "result". Return: "result"

// Output
// console.log(selezionati)

// Risoluzione codice
// Raccolta dati:

function numeri(){
    let result = []
    for(let i = 1; i <= 10; i++){
        result.push(i)
    } 
    return result;
}

const numeriArray = numeri()

const minimo = 3
const massimo = 5

// Risoluzione logica
function selezionaIndici(numbersArr, min, max){
    let result = []
    for(let i = min; i <= max; i++){
        curElem = numbersArr[i]
        result.push(curElem)
    }
    return result
}

const selezionati = selezionaIndici(numeriArray, minimo, massimo)

// Output
console.log(selezionati)