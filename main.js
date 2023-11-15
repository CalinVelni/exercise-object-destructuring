// ---- Esercizio 1 ----


// const utente = {
//     nome: "Alice",
//     eta: 25,
//     hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
//     indirizzo: {
//         via: "123 Via degli Aceri",
//         citta: "Paese delle Meraviglie"
//     }
// };

// const stringaJSON = JSON.stringify(utente);





// ---- Esercizio 2 ----


// const stringaJson = '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}';

// const oggetto = JSON.parse(stringaJson);

// const {id, email} = oggetto;





// ---- Esercizio 3 ----


// const film = {
//     titolo: "Inception",
//     regista: "Christopher Nolan",
//     anno: 2010,
//     valutazione: 8.8
// };

// const {titolo, anno} = film;

// console.log(titolo, anno);





// ---- Esercizio 4 ----


// const utente = {
//     nome: "Alice",
//     indirizzo: {
//         via: "123 Via degli Aceri",
//         citta: "Paese delle Meraviglie",
//     }
// };

// // const {indirizzo} = utente;

// // const {via, citta} = indirizzo;

// console.log(via, citta);

// // Soluzione Extra
// // const {indirizzo:{via, citta}} = utente;





// ---- Esercizio 5 ----


// const persona = {
//     nome: "Bob",
// };

// const {nome, eta = 30} = persona;





// ---- Esercizio 6 ----


// const persona = {
//     nome: "Jane",
//     occupazione: "sviluppatrice"
// };

// const presentati = ({nome, occupazione}) => {

//     const messaggio = `Mi chiamo ${nome} e lavoro come ${occupazione}`

//     console.log(messaggio);
// } 





// ---- BONUS 1 ----


// const databaseJson = [
//     {
//         "title": "Il Grande Gatsby",
//         "author": {
//             "firstName": "F. Scott",
//             "lastName": "Fitzgerald"
//         },
//         "details": {
//             "pages": 180,
//             "language": "Inglese"
//         }
//     },
//     {
//         "title": "Guerra e Pace",
//         "author": {
//             "firstName": "Lev",
//             "lastName": "Tolstoj"
//         },
//         "details": {
//             "pages": 1225,
//             "language": "Russo"
//         }
//     },
//     {
//         "title": "1984",
//         "author": {
//             "firstName": "George",
//             "lastName": "Orwell"
//         },
//         "details": {
//             "pages": 328,
//             "language": "Inglese"
//         }
//     }
// ];

// for (let i = 0; i < databaseJson.length; i ++) {

//     const libro = databaseJson[i];

//     const {title, author, details} = libro;

//     const {firstName, lastName} = author;

//     const {pages} = details;

//     const message = 
//     `
//     ${title} 
//     ${firstName} ${lastName}
//     ${(pages > 300) ? pages : ''}`;

//     console.log(message);
// };





// ---- BONUS 2 ----


// const databaseJson =
// [
//     {
//         "name": "Alice",
//         "email": "alice@example.com",
//         "address": "123 Via Acero, Meraviglia"
//     },
//     {
//         "name": "Bob",
//         "email": "bob@example.com"
//     },
//     {
//         "name": "Charlie",
//         "email": "charlie@example.com",
//         "address": "456 Via Olmo, Sognilandia"
//     }
// ];

// const analizzaDatabase = (database) => {

//     for (let i = 0; i < database.length; i ++) {

//         const utente = database[i];

//         const {name, email, address = 'indirizzo non fornito'} = utente;

//         const message = `
//         ${name}
//         ${email}
//         ${address}`;

//         console.log(message);
//     }
// }

// analizzaDatabase(databaseJson);





// ---- BONUS 3 ----


// const stringaJson = `[
//     {
//         "product": "Laptop",
//         "price": 1200,
//         "quantity": 5
//     },
//     {
//         "product": "Telefono",
//         "price": 500,
//         "quantity": 10
//     },
//     {
//         "product": "Tablet",
//         "price": 750,
//         "quantity": 3
//     }
// ]`;

// const database = JSON.parse(stringaJson);

// const analizzaJson = (data) => {

//     for (let i = 0; i < data.length; i ++) {

//         const prodotto = data[i];

//         const {product, price, quantity} = prodotto;

//         const valTotale = price * quantity;

//         const message = `${product}: ${valTotale}`;

//         console.log(message);
//     }
// }

// analizzaJson(database);













