# Creiamo una lista vuota per memorizzare gli studenti
studenti = []

# Inserimento dati per 3 studenti
for i in range(3):
    nome = input("Inserisci il nome dello studente: ")
    matricola = input("Inserisci la matricola dello studente: ")
    
    voti = []
    x = int(input("Quanti voti vuoi inserire per questo studente? "))
    
    for j in range(x):
        y = int(input(f"Inserisci il voto {j+1}: "))
        voti.append(y)
    
    # Creiamo un dizionario per ogni studente e lo aggiungiamo alla lista
    studente = {
        "nome": nome,
        "matricola": matricola,
        "voti": voti
    }
    studenti.append(studente)

# Aggiungere un voto extra ad uno studente specifico
indice = int(input("A quale studente (0-2) vuoi aggiungere un voto? "))
nuovo_voto = int(input("Inserisci il nuovo voto: "))
studenti[indice]["voti"].append(nuovo_voto)

# Stampa dei nomi e media dei voti di ciascuno studente
for studente in studenti:
    media = sum(studente["voti"]) / len(studente["voti"])
    print(f"Studente: {studente['nome']}")
    print(f"Media voti: {media:.2f}")
    print("-" * 30)
