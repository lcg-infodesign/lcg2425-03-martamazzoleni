[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/rKbf-r4Q)
# **ASSIGNMENT 3**
This repository is the starting point of the assignments given in the course [Computergrafica per l'Information Design](https://www11.ceda.polimi.it/schedaincarico/schedaincarico/controller/scheda_pubblica/SchedaPublic.do?&evn_default=evento&c_classe=834257&lang=IT&__pj0=0&__pj1=9c10fe379e96db59d55d49b6b4252c5e).


## **Fiumi del mondo**
Questo progetto è una visualizzazione interattiva dei fiumi del mondo. Ogni linea rappresenta un fiume, caratterizzato da lunghezza e portata che influenzano il suo aspetto grafico. L'idea è di evocare l'immagine del flusso naturale dell'acqua, con linee che ricordano le onde di un fiume che scorre.

I dati dei fiumi sono caricati da un file CSV (`assets/rivers.csv`) contenente informazioni come il nome, la lunghezza (in km) e la portata (in m³/s).
Ogni fiume è rappresentato da una linea curva generata a partire dai dati:
  - **Spessore:** Proporzionale alla portata del fiume.
  - **Lunghezza:** Proporzionale alla lunghezza reale del fiume.
  - **Posizione e inclinazione:** Generati casualmente per creare una visualizzazione fluida e dinamica.
  - **Colore delle linee:** Ogni fiume ha un colore di base blu scuro semitrasparente.

## **Interazione con l'Utente**
L'utente esplora visivamente i fiumi spostando il mouse sulle linee per scoprire dettagli come il nome e le caratteristiche del fiume o cliccando per selezionare un fiume specifico e visualizzare le sue informazioni in modo persistente.

1. **Hover:** quando il mouse passa sopra una linea, il fiume "hoverato" viene evidenziato con uno spessore maggiore e un colore più intenso. Le informazioni del fiume (nome, lunghezza, portata) vengono mostrate in alto a destra.
2. **Click:** facendo clic su una linea, il fiume selezionato rimane evidenziato finché non viene selezionato un altro fiume o cliccato uno spazio vuoto. Le informazioni del fiume selezionato sono sempre visibili finché non viene deselezionato.

## **Struttura del Codice**
1. **`preload()`:** Carica il dataset dei fiumi.
2. **`setup()`:**
   - Imposta la canvas per la visualizzazione.
   - Genera le linee dei fiumi con proprietà basate sui dati del CSV.
3. **`draw()`:**
   - Ridisegna la canvas a ogni frame.
   - Gestisce l'evidenziazione e la visualizzazione delle informazioni dei fiumi in base all'interazione dell'utente.
4. **`mousePressed()`:** Gestisce la selezione di un fiume al clic del mouse.
5. **`generateLinePoints()`:** Crea i punti per disegnare le curve dei fiumi.
6. **`isMouseOverLine()`:** Controlla se il puntatore del mouse è sopra una linea.
7. **`showRiverInfo()`:** Mostra le informazioni dettagliate di un fiume selezionato o "hoverato".

