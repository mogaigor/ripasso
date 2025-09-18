// Creiamo un array vuoto per memorizzare gli studenti
const studenti = [];

// Inserimento dati per 3 studenti
for (let i = 0; i < 3; i++) {
  const nome = prompt("Inserisci il nome dello studente:");
  const matricola = prompt("Inserisci la matricola dello studente:");
  
  const voti = [];
  const x = parseInt(prompt("Quanti voti vuoi inserire per questo studente?"), 10);
  
  for (let j = 0; j < x; j++) {
    const y = parseInt(prompt(`Inserisci il voto ${j + 1}:`), 10);
    voti.push(y);
  }
  
  // Creiamo un oggetto per ogni studente e lo aggiungiamo all'array
  const studente = {
    nome: nome,
    matricola: matricola,
    voti: voti
  };
  studenti.push(studente);
}

// Aggiungere un voto extra a uno studente specifico
const indice = parseInt(prompt("A quale studente (0-2) vuoi aggiungere un voto?"), 10);
const nuovoVoto = parseInt(prompt("Inserisci il nuovo voto:"), 10);
studenti[indice].voti.push(nuovoVoto);

// Stampa dei nomi e media dei voti di ciascuno studente
for (const studente of studenti) {
  const media = studente.voti.reduce((a, b) => a + b, 0) / studente.voti.length;
  console.log(`Studente: ${studente.nome}`);
  console.log(`Media voti: ${media.toFixed(2)}`);
  console.log("------------------------------");
}
