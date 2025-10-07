export const DOMANDE_INLINE = [
     {
            "id": 1,
            "question": "Un manager al suo braccio destro: \"Dentro di me so che è la scelta giusta. Se non seguiamo il protocollo alla lettera, il rischio è di ritrovarci con un fallimento totale tra le mani.\"",
            "answers": [
                {
                    "text": "Reference (Internal), Operation (Procedure), Motivation (Loss), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Quasi corretto, ma ridondante. La frase contiene sia la spinta ad agire per evitare un male (Motivation Loss) sia la descrizione dello scenario finale (Results Worst). L'analisi deve cogliere l'intento primario di ogni segmento. Qui la 'perdita' è la leva emotiva, il 'fallimento totale' è la sua conseguenza dipinta."
                },
                {
                    "text": "Arguments (Intuitions), Philosophy (How), Motivation (Loss), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Errato su due punti chiave. 'Dentro di me so' non è un'intuizione usata come prova (Arguments), ma la fonte stessa della validazione (Reference Internal). Inoltre, 'seguire il protocollo' non è un principio metodologico (Philosophy), ma una sequenza di passi concreti (Operation)."
                },
                {
                    "text": "Reference (Internal), Operation (Procedure), Motivation (Loss), Results (Worst)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase si apre con una validazione interna ('Dentro di me so'). Definisce un processo esecutivo rigido ('seguire il protocollo alla lettera'). Usa la leva della paura ('il rischio è di') per spingere all'azione. Infine, dipinge lo scenario negativo finale ('un fallimento totale')."
                },
                {
                    "text": "Reference (Internal), Operation (Procedure), Results (Worst), Arguments (Facts)",
                    "isCorrect": false,
                    "explanation": "Incompleto e impreciso. Manca la leva emotiva fondamentale (Motivation Loss) che giustifica l'azione. Inoltre, la frase non contiene alcun dato oggettivo o fatto (Arguments Facts); al contrario, si basa interamente su una valutazione soggettiva."
                }
            ]
        },
        {
            "id": 2,
            "question": "Durante un pitch: \"Le statistiche del settore confermano la tendenza. Adottando questa soluzione, diversa da ogni standard attuale, immagino otterremo un vantaggio competitivo enorme. Non aspettiamo oltre, partiamo.\"",
            "answers": [
                {
                    "text": "Reference (External), Changes (Innovator), Arguments (Intuitions), Overture (Act)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'incipit cita una fonte esterna ('Le statistiche'). La soluzione è presentata come una rottura con il passato ('diversa da ogni standard'). L'ipotesi sul vantaggio è un'interpretazione soggettiva ('immagino'). La chiusura è un chiaro invito all'azione immediata ('partiamo')."
                },
                {
                    "text": "Arguments (Facts), Criteria (Difference), Motivation (Gain), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. Citare 'le statistiche' è un atto di Reference (la fonte), non la presentazione del dato stesso (Arguments). Inoltre, 'otterremo un vantaggio' è il contenuto di un'intuizione, non la leva emotiva diretta del guadagno (Motivation Gain)."
                },
                {
                    "text": "Reference (External), Criteria (Difference), Arguments (Intuitions), Motivation (Gain)",
                    "isCorrect": false,
                    "explanation": "Incompleto. Sebbene il 'vantaggio' possa essere visto come Motivation Gain, l'elemento più forte e inequivocabile è la call to action finale ('partiamo'), che qualifica la frase come Overture (Act). L'analisi deve cogliere l'intento comunicativo finale."
                },
                {
                    "text": "Arguments (Facts), Changes (Innovator), Results (Best), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Errato su più fronti. Non è un dato (Arguments) ma una fonte (Reference). Il 'vantaggio competitivo' è presentato come un'intuizione, non come uno scenario futuro dettagliato (Results). L'invito finale è ad agire (Act), non a riflettere (Reflect)."
                }
            ]
        },
        {
            "id": 3,
            "question": "Un mentore a un allievo: \"La nostra filosofia è l'autonomia. Ti darò solo la visione d'insieme del progetto, perché entro un anno il tuo compito sarà aver trovato una strada. Valuta tu le opzioni.\"",
            "answers": [
                {
                    "text": "Philosophy (Why), Information (Generic), Moment (Future), Subordination (Commanders)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase stabilisce un principio guida ('La nostra filosofia'). Fornisce informazioni generali ('visione d'insieme'). Proietta l'obiettivo in un tempo futuro ('entro un anno'). Infine, delega pienamente l'esecuzione, attivando la modalità Commander."
                },
                {
                    "text": "Philosophy (Why), Information (Generic), Results (Best), Operation (Options)",
                    "isCorrect": false,
                    "explanation": "Molto plausibile ma errato. 'Valuta tu le opzioni' è una conseguenza della delega in stile Commander, non la presentazione diretta di un processo operativo (Operation). La distinzione è sottile: qui si sta definendo un ruolo, non istruendo su un compito."
                },
                {
                    "text": "Operation (Procedure), Information (Generic), Moment (Future), Subordination (Commanders)",
                    "isCorrect": false,
                    "explanation": "Errato. 'La nostra filosofia è l'autonomia' non è una procedura (Operation), ma un principio astratto e una regola di comportamento (Philosophy), ovvero il 'perché' si agisce in un certo modo."
                },
                {
                    "text": "Philosophy (Why), Information (Specific), Moment (Future), Operation (Options)",
                    "isCorrect": false,
                    "explanation": "Impreciso. L'informazione fornita è esplicitamente una 'visione d'insieme', quindi Generic, non Specific. Inoltre, la frase delega un ruolo (Subordination), non descrive semplicemente un'alternativa operativa (Operation)."
                }
            ]
        },
        {
            "id": 4,
            "question": "Un analista finanziario: \"Dobbiamo concentrarci solo su questo report. Procedere così è in netto conflitto con la nostra etica aziendale e, se non cambiamo rotta, ci farà perdere la fiducia degli investitori.\"",
            "answers": [
                {
                    "text": "Focus (Immersive), Criteria (Difference), Motivation (Loss), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Errato. 'In netto conflitto' non valuta una differenza tra due opzioni (Criteria), ma una discrepanza rispetto a uno standard interno, un valore (Consistency). È un giudizio di coerenza, non di comparazione."
                },
                {
                    "text": "Operation (Procedure), Consistency (Conflict), Motivation (Loss), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Inesatto. 'Concentrarci solo su questo' non è una procedura (Operation) ma un'istruzione a focalizzare l'attenzione su un singolo elemento, escludendo il resto (Focus Immersive)."
                },
                {
                    "text": "Focus (Immersive), Consistency (Alignment), Motivation (Loss), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "L'opposto. La frase evidenzia una discrepanza ('conflitto'), non un allineamento (Alignment) con i valori aziendali. Questo è un errore di decodifica fondamentale del messaggio."
                },
                {
                    "text": "Focus (Immersive), Consistency (Conflict), Motivation (Loss), Results (Worst)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase inizia con un comando a focalizzarsi ('Concentriamoci solo su questo'). Evidenzia poi un'incoerenza con i valori ('in netto conflitto'). Usa la paura ('ci farà perdere la fiducia') come leva per agire. Lo scenario finale è implicito ma chiaro."
                }
            ]
        },
        {
            "id": 5,
            "question": "Un imprenditore visionario: \"Il risultato finale sarà un mondo dove la tecnologia è al servizio di tutti. Per arrivarci, sento che la via migliore è simile a quella che già conosciamo, ma potete anche esplorare percorsi alternativi se lo ritenete opportuno.\"",
            "answers": [
                {
                    "text": "Motivation (Gain), Criteria (Similarity), Operation (Options), Subordination (Commanders)",
                    "isCorrect": false,
                    "explanation": "Incompleto e impreciso. La prima frase non è una leva emotiva immediata (Motivation), ma la descrizione di uno scenario futuro ideale e dettagliato (Results Best). La distinzione è cruciale: non è una spinta, ma una visione."
                },
                {
                    "text": "Results (Best), Criteria (Similarity), Subordination (Commanders), Philosophy (How)",
                    "isCorrect": false,
                    "explanation": "Errato. La frase finale non spiega un principio metodologico (Philosophy), ma concede esplicitamente la facoltà di scegliere tra diverse vie operative (Operation Options), che è una manifestazione diretta della delega in stile Commander."
                },
                {
                    "text": "Results (Best), Arguments (Intuitions), Criteria (Similarity), Operation (Options)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase dipinge lo scenario futuro ideale ('un mondo dove...'). Esprime una preferenza basata su una percezione soggettiva ('sento che la via migliore...'). Confronta la via suggerita con qualcosa di noto ('simile a quella che...'). Infine, lascia libertà di scelta sui percorsi pratici da seguire ('potete anche esplorare...')."
                },
                {
                    "text": "Results (Best), Reference (Internal), Changes (Traditional), Operation (Procedure)",
                    "isCorrect": false,
                    "explanation": "Errato su tre punti. 'Sento che' è un'intuizione (Arguments), non una fonte di validazione (Reference). Suggerire una via 'simile' non significa essere 'Traditional' (Changes), ma usare un paragone (Criteria). Infine, offrire alternative è l'opposto di una procedura fissa (Operation)."
                }
            ]
        },
        {
            "id": 6,
            "question": "Un negoziatore esperto alla controparte: \"Tutti i report di settore lo confermano. La nostra proposta è radicalmente diversa dalla vostra e, nel peggiore dei casi, se non la cogliete rimarrete isolati. Prenditi tutto il tempo per valutare le implicazioni.\"",
            "answers": [
                {
                    "text": "Arguments (Facts), Criteria (Difference), Motivation (Loss), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. Citare i 'report di settore' è un riferimento a una fonte di validazione (Reference), non la presentazione del dato stesso (Arguments). Inoltre, 'rimarrete isolati' è la pittura di uno scenario futuro (Results), non la leva emotiva che spinge ad agire (Motivation)."
                },
                {
                    "text": "Reference (External), Criteria (Difference), Results (Worst), Overture (Reflect)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase si appoggia a un'autorità esterna ('report di settore'). Enfatizza la novità attraverso il contrasto ('radicalmente diversa'). Dipinge lo scenario negativo finale ('rimarrete isolati'). Infine, invita a una ponderazione, non a un'azione immediata ('Prenditi tutto il tempo')."
                },
                {
                    "text": "Reference (External), Changes (Innovator), Results (Worst), Subordination (Commanders)",
                    "isCorrect": false,
                    "explanation": "Inesatto. La proposta è 'diversa' (Criteria), il che è un confronto, non necessariamente una spinta all'innovazione (Changes). Inoltre, concedere tempo per pensare (Overture) non equivale a delegare un ruolo o un compito (Subordination)."
                },
                {
                    "text": "Arguments (Facts), Criteria (Difference), Results (Worst), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Errato su due fronti. Si tratta di una fonte (Reference), non di un fatto (Arguments). L'invito finale è esplicitamente a prendersi tempo (Reflect), che è l'opposto di un'azione immediata (Act)."
                }
            ]
        },
        {
            "id": 7,
            "question": "Un life coach al suo cliente: \"Pensa a quante volte hai rimandato in passato. Questa è la tua occasione per ottenere finalmente quella promozione. Per riuscirci, puoi iscriverti al corso A o al B; la mia sensazione è che il B sia più adatto a te.\"",
            "answers": [
                {
                    "text": "Moment (Past), Results (Best), Operation (Options), Arguments (Intuitions)",
                    "isCorrect": false,
                    "explanation": "Molto vicino, ma la seconda frase non descrive lo scenario futuro (Results), bensì la leva emotiva del desiderio, la spinta ad agire ORA per ottenere qualcosa (Motivation Gain). La distinzione è tra la visione del traguardo e il carburante per partire."
                },
                {
                    "text": "Changes (Traditional), Motivation (Gain), Philosophy (How), Reference (Internal)",
                    "isCorrect": false,
                    "explanation": "Errato. Il riferimento al passato non è per mantenere una tradizione, ma per creare un contrasto (Moment). Offrire due corsi è una scelta operativa (Operation), non un principio metodologico (Philosophy). 'La mia sensazione' è un'opinione usata come prova (Arguments), non una fonte di auto-validazione del cliente (Reference)."
                },
                {
                    "text": "Moment (Past), Motivation (Gain), Operation (Options), Arguments (Intuitions)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase parte da un riferimento a esperienze passate ('quante volte hai rimandato'). Usa la promozione come leva emotiva per agire (Motivation Gain). Propone una scelta pratica tra due percorsi ('corso A o B'). Infine, offre un consiglio basato su una percezione soggettiva ('la mia sensazione')."
                },
                {
                    "text": "Moment (Past), Motivation (Gain), Subordination (Commanders), Arguments (Intuitions)",
                    "isCorrect": false,
                    "explanation": "Inesatto. La scelta tra 'corso A o B' è una chiara definizione di alternative operative (Operation Options), non una delega di ruolo o di responsabilità generale come implicherebbe lo stile Commander."
                }
            ]
        },
        {
            "id": 8,
            "question": "Un team leader in riunione: \"Ok, prima di cambiare argomento, torniamo un attimo qui. Il nostro principio è l'innovazione. Pertanto, ti dico esattamente cosa fare: progetta un prototipo totalmente nuovo entro domani.\"",
            "answers": [
                {
                    "text": "Focus (Immersive), Philosophy (Why), Changes (Innovator), Subordination (Workers)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato sul primo punto. La frase 'prima di cambiare argomento, torniamo qui' implica che la conversazione stava divagando, quindi è un tentativo di correggere un Focus Distracted, non la descrizione di uno stato Immersive."
                },
                {
                    "text": "Focus (Distracted), Motivation (Gain), Criteria (Difference), Operation (Procedure)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'Il nostro principio è l'innovazione' è una regola guida (Philosophy), non una leva emotiva (Motivation). 'Totalmente nuovo' è una conseguenza dell'essere innovatori (Changes), non un confronto diretto (Criteria). Infine, dare un ordine diretto è definire un ruolo (Subordination), non solo un processo (Operation)."
                },
                {
                    "text": "Focus (Distracted), Philosophy (Why), Changes (Innovator), Subordination (Workers)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'incipit rivela una tendenza alla divagazione (Distracted). Viene poi dichiarato un principio guida ('Il nostro principio è...'). L'azione richiesta è orientata alla novità ('prototipo nuovo'). Infine, l'istruzione è diretta e specifica, attivando la modalità Worker."
                },
                {
                    "text": "Focus (Immersive), Philosophy (Why), Changes (Innovator), Operation (Procedure)",
                    "isCorrect": false,
                    "explanation": "Errato su due fronti. Il contesto suggerisce un tentativo di correggere una distrazione, non uno stato di immersione. L'istruzione finale 'ti dico esattamente cosa fare' è una chiara definizione del rapporto gerarchico (Subordination), più che una semplice descrizione di una procedura (Operation)."
                }
            ]
        },
        {
            "id": 9,
            "question": "Un venditore di fiducia a un cliente storico: \"Questo nuovo modello è simile a quello che hai sempre amato. So che per te la qualità è tutto, e non vuoi rischiare di perdere questa affidabilità. Se sei d'accordo, procediamo subito.\"",
            "answers": [
                {
                    "text": "Criteria (Similarity), Reference (Internal), Motivation (Loss), Overture (Act)",
                    "isCorrect": true,
                    "explanation": "Corretto. Il venditore crea un ponte con il passato ('simile a quello che...'). Fa leva sulla conoscenza dei valori del cliente ('So che per te...'), attivando la sua validazione interna. Usa la paura di perdere un valore chiave ('rischiare di perdere l'affidabilità') come spinta. Chiude con una call to action immediata."
                },
                {
                    "text": "Changes (Traditional), Arguments (Intuitions), Results (Worst), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Errato. Usare una somiglianza (Criteria) per rassicurare non significa essere Traditional (Changes). 'So che per te' non è un'intuizione (Arguments), ma un riferimento diretto al sistema di valori del cliente (Reference). 'Rischiare di perdere' è la spinta emotiva (Motivation), non la descrizione dello scenario futuro (Results)."
                },
                {
                    "text": "Criteria (Similarity), Reference (Internal), Motivation (Loss), Subordination (Workers)",
                    "isCorrect": false,
                    "explanation": "Inesatto. 'Procediamo subito' non è un'istruzione data a un collaboratore (Subordination), ma un invito a chiudere un accordo, un trigger decisionale rivolto a un pari o a un cliente (Overture)."
                },
                {
                    "text": "Criteria (Similarity), Reference (External), Motivation (Gain), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "L'opposto su tre punti. Il riferimento è ai valori interni del cliente, non a fonti esterne. La leva è evitare una perdita (Loss), non ottenere un guadagno (Gain). L'invito è ad agire immediatamente (Act), non a riflettere."
                }
            ]
        },
        {
            "id": 10,
            "question": "Durante una presentazione del board: \"In sintesi, il piano è perfettamente coerente con la nostra visione. I dati mostrano un ROI del 300%, che ci garantirà la leadership indiscussa nel prossimo decennio.\"",
            "answers": [
                {
                    "text": "Information (Generic), Consistency (Alignment), Arguments (Facts), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Quasi perfetto, ma l'ultima frase non è solo la descrizione del miglior scenario (Results Best), ma è anche una proiezione temporale chiara ('nel prossimo decennio'), rendendo Moment (Future) l'analisi più precisa e specifica in questo contesto."
                },
                {
                    "text": "Philosophy (How), Consistency (Alignment), Reference (External), Moment (Future)",
                    "isCorrect": false,
                    "explanation": "Errato. 'In sintesi' introduce un riassunto (Information), non un principio metodologico (Philosophy). 'I dati mostrano' presenta un'evidenza diretta (Arguments), non cita semplicemente una fonte esterna (Reference)."
                },
                {
                    "text": "Information (Generic), Criteria (Similarity), Arguments (Facts), Moment (Future)",
                    "isCorrect": false,
                    "explanation": "Impreciso. Il piano non viene confrontato con qualcos'altro (Criteria Similarity), ma viene valutato in base alla sua coerenza con un valore interno preesistente, la 'visione' (Consistency Alignment)."
                },
                {
                    "text": "Information (Generic), Consistency (Alignment), Arguments (Facts), Moment (Future)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'incipit riassume ('In sintesi'). La frase successiva valuta la coerenza con i valori aziendali ('coerente con la nostra visione'). Viene poi presentato un dato oggettivo a supporto ('I dati mostrano un ROI...'). Infine, l'orizzonte temporale del risultato è proiettato nel futuro ('nel prossimo decennio')."
                }
            ]
        },
 {
            "id": 11,
            "question": "Un revisore dei conti durante un'ispezione: \"Analizziamo i dati specifici di questo bilancio. Come abbiamo sempre fatto, il nostro metodo consolidato di verifica incrociata ci ha mostrato una discrepanza del 5% rispetto all'anno precedente.\"",
            "answers": [
                {
                    "text": "Information (Specific), Changes (Traditional), Arguments (Facts), Moment (Past)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'analisi richiede dati puntuali ('dati specifici'). Si affida a una metodologia consolidata ('Come abbiamo sempre fatto'). Presenta un'evidenza numerica oggettiva ('discrepanza del 5%'). Infine, contestualizza il dato con un confronto temporale ('rispetto all'anno precedente')."
                },
                {
                    "text": "Focus (Immersive), Changes (Traditional), Reference (External), Moment (Past)",
                    "isCorrect": false,
                    "explanation": "Errato. Richiedere 'dati specifici' è una preferenza di Information, non un comando a concentrarsi (Focus). Presentare il dato del 5% è un'argomentazione (Arguments), non un semplice riferimento a una fonte esterna (Reference)."
                },
                {
                    "text": "Information (Specific), Criteria (Similarity), Arguments (Facts), Moment (Past)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. 'Come abbiamo sempre fatto' non è un paragone tra due entità (Criteria), ma l'espressione di una preferenza per la continuità e la stabilità dei metodi (Changes Traditional)."
                },
                {
                    "text": "Information (Specific), Philosophy (How), Arguments (Facts), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Inesatto. Il 'metodo consolidato' è una preferenza per la tradizione (Changes), non la spiegazione di un principio metodologico (Philosophy). La discrepanza è un dato passato (Moment), non la proiezione di uno scenario futuro (Results)."
                }
            ]
        },
        {
            "id": 12,
            "question": "Un senior partner a un giovane associato: \"Rimaniamo focalizzati solo su questo caso. Francamente, a mio avviso, la tua strategia è in palese conflitto con i principi dello studio. Vedi tu come sistemare la cosa, ma sistemala.\"",
            "answers": [
                {
                    "text": "Focus (Immersive), Reference (Internal), Consistency (Conflict), Subordination (Commanders)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase impone una concentrazione esclusiva ('Rimaniamo focalizzati solo su questo'). La valutazione si basa su un giudizio personale ('a mio avviso'). Viene evidenziata un'incoerenza con i valori ('in palese conflitto'). Infine, la soluzione è delegata con piena autonomia ('Vedi tu come...')."
                },
                {
                    "text": "Focus (Immersive), Arguments (Intuitions), Criteria (Difference), Operation (Options)",
                    "isCorrect": false,
                    "explanation": "Errato su tre punti. 'A mio avviso' qui funge da fonte di validazione (Reference), non da semplice intuizione (Arguments). 'Conflitto' si riferisce a una violazione di standard (Consistency), non a una semplice differenza (Criteria). La delega è un'attribuzione di ruolo (Subordination), non una proposta di alternative operative (Operation)."
                },
                {
                    "text": "Information (Specific), Reference (Internal), Consistency (Conflict), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Inesatto. Non si richiedono dettagli (Information), si impone concentrazione (Focus). L'istruzione finale non è una chiamata all'azione per tutti (Overture), ma un ordine diretto che definisce un ruolo e una responsabilità (Subordination)."
                },
                {
                    "text": "Focus (Immersive), Reference (Internal), Consistency (Conflict), Subordination (Workers)",
                    "isCorrect": false,
                    "explanation": "Quasi giusto, ma l'errore è cruciale. L'ordine 'Vedi tu come sistemare' è l'opposto dello stile Worker, in quanto non fornisce alcuna istruzione specifica ma lascia totale libertà decisionale, caratteristica dello stile Commander."
                }
            ]
        },
        {
            "id": 13,
            "question": "Un coach prima della finale: \"Il nostro metodo è la difesa aggressiva. Ora immaginate la coppa, sentite il sapore della vittoria! Questo desiderio deve essere la vostra unica benzina. Andate là fuori e prendetevela!\"",
            "answers": [
                {
                    "text": "Philosophy (How), Results (Best), Motivation (Gain), Overture (Act)",
                    "isCorrect": true,
                    "explanation": "Corretto. Viene dichiarato un principio tattico ('Il nostro metodo...'). Si dipinge lo scenario futuro ideale per creare desiderio ('immaginate la coppa...'). Si trasforma quella visione in carburante emotivo immediato ('Questo desiderio deve essere...'). Si chiude con una potente chiamata all'azione."
                },
                {
                    "text": "Operation (Procedure), Results (Best), Motivation (Gain), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Errato. 'Difesa aggressiva' è un principio guida, una filosofia (Philosophy), non una sequenza di passi concreti (Operation Procedure). La distinzione è tra il 'cosa' strategico e il 'come' tattico."
                },
                {
                    "text": "Philosophy (How), Motivation (Gain), Arguments (Intuitions), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Incompleto. La frase che descrive la coppa e la vittoria è troppo vivida e dettagliata per essere solo la leva emotiva (Motivation); è la pittura dello scenario finale (Results Best) che, a sua volta, alimenta la motivazione."
                },
                {
                    "text": "Philosophy (How), Results (Best), Motivation (Gain), Subordination (Workers)",
                    "isCorrect": false,
                    "explanation": "'Andate e prendetevela' non è un'istruzione a un subordinato (Subordination), ma un'esortazione collettiva e potente, un trigger per iniziare l'azione (Overture Act)."
                }
            ]
        },
        {
            "id": 14,
            "question": "Un CEO durante un consiglio di amministrazione: \"Guardando al prossimo quinquennio, la nostra direzione generale è l'espansione. A mio parere, il successo arriverà solo seguendo la roadmap passo dopo passo, senza alcuna deviazione.\"",
            "answers": [
                {
                    "text": "Moment (Future), Information (Generic), Arguments (Intuitions), Operation (Procedure)",
                    "isCorrect": true,
                    "explanation": "Corretto. La visione è proiettata nel futuro ('prossimo quinquennio'). L'informazione è di alto livello, una visione d'insieme ('direzione generale'). La strategia è supportata da una convinzione personale ('A mio parere...'). L'esecuzione richiesta è una sequenza rigida e predefinita ('passo dopo passo')."
                },
                {
                    "text": "Results (Best), Information (Generic), Reference (Internal), Changes (Traditional)",
                    "isCorrect": false,
                    "explanation": "Errato. Seguire una roadmap non implica una preferenza per la tradizione (Changes), ma per un processo strutturato (Operation). 'A mio parere' è un'argomentazione intuitiva (Arguments), non la fonte di validazione stessa (Reference)."
                },
                {
                    "text": "Moment (Future), Philosophy (Why), Arguments (Intuitions), Operation (Procedure)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'La nostra direzione è l'espansione' è un'informazione generale (Information) su cosa fare, non la spiegazione del perché (Philosophy) lo si fa."
                },
                {
                    "text": "Moment (Future), Information (Generic), Arguments (Intuitions), Operation (Options)",
                    "isCorrect": false,
                    "explanation": "L'opposto. La richiesta di seguire la roadmap 'senza alcuna deviazione' è la quintessenza della modalità Procedure, escludendo esplicitamente la possibilità di scegliere tra alternative (Options)."
                }
            ]
        },
        {
            "id": 15,
            "question": "Un responsabile HR a un dipendente in fase di colloquio interno: \"Questo nuovo ruolo è totalmente diverso dal tuo precedente. Valuta bene se è in linea con i tuoi valori, perché non vuoi rischiare di sentirti fuori posto. Pensaci su con calma.\"",
            "answers": [
                {
                    "text": "Criteria (Difference), Consistency (Alignment), Results (Worst), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Molto vicino, ma 'non vuoi rischiare di sentirti fuori posto' non è la descrizione di uno scenario futuro (Results), ma la leva emotiva immediata per evitare una sensazione negativa (Motivation Loss). È la spinta a riflettere, non il risultato della riflessione."
                },
                {
                    "text": "Changes (Innovator), Consistency (Alignment), Motivation (Loss), Subordination (Commanders)",
                    "isCorrect": false,
                    "explanation": "Errato. Descrivere un ruolo come 'diverso' (Criteria) non implica una preferenza per l'innovazione (Changes). L'invito a pensare (Overture) non è una delega di un compito (Subordination)."
                },
                {
                    "text": "Criteria (Difference), Consistency (Alignment), Motivation (Loss), Overture (Reflect)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase stabilisce un confronto per differenza ('totalmente diverso'). Invita a una verifica di coerenza con il sistema di valori personali ('in linea con i tuoi valori'). Usa la paura di una conseguenza emotiva negativa come spinta alla valutazione ('non vuoi rischiare...'). Infine, invita esplicitamente a una decisione ponderata ('Pensaci su')."
                },
                {
                    "text": "Criteria (Difference), Philosophy (Why), Motivation (Loss), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Impreciso. La richiesta di valutare l'allineamento con i valori personali è una questione di coerenza interna (Consistency), non la spiegazione di un principio guida o di una logica astratta (Philosophy)."
                }
            ]
        },
 {
            "id": 16,
            "question": "Leggendo tra le righe del report di mercato, il nostro attuale posizionamento non è più sostenibile secondo i nostri principi fondanti e, se non agiamo, l'erosione della quota di mercato diventerà inevitabile.",
            "answers": [
                {
                    "text": "Reference (External), Consistency (Conflict), Motivation (Loss), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Quasi perfetto, ma la frase non contiene la leva emotiva (Motivation) per agire 'ora'. Descrive lo scenario negativo futuro (Results) in modo analitico e quasi distaccato ('l'erosione... diventerà inevitabile'), rendendolo una conseguenza logica, non una spinta emotiva immediata."
                },
                {
                    "text": "Arguments (Facts), Consistency (Conflict), Philosophy (Why), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Errato. 'Leggere tra le righe di un report' è un riferimento a una fonte (Reference), non la presentazione di un dato oggettivo (Arguments). Inoltre, i 'principi fondanti' non spiegano il perché strategico (Philosophy), ma fungono da metro di paragone per la coerenza (Consistency)."
                },
                {
                    "text": "Reference (External), Consistency (Conflict), Philosophy (Why), Results (Worst)",
                    "isCorrect": true,
                    "explanation": "Corretto. La fonte dell'informazione è esterna e interpretata ('report di mercato'). La situazione attuale è giudicata incoerente con i valori ('non sostenibile secondo i principi'). Questi principi rappresentano la logica fondante (Philosophy) dell'azienda. Infine, viene descritto lo scenario negativo a lungo termine (Results)."
                },
                {
                    "text": "Reference (External), Criteria (Difference), Philosophy (Why), Motivation (Loss)",
                    "isCorrect": false,
                    "explanation": "Impreciso. La situazione non viene confrontata con un'alternativa (Criteria), ma giudicata rispetto a uno standard interno (Consistency). Come in altre opzioni, la frase delinea una conseguenza (Results), non una leva emotiva immediata (Motivation)."
                }
            ]
        },
        {
            "id": 17,
            "question": "Un leader a un team in stallo: \"Basta con le vecchie abitudini. Questa nuova via è totalmente diversa, ma se non la imbocchiamo subito perdiamo il treno. Muoviamoci.\"",
            "answers": [
                {
                    "text": "Changes (Traditional), Criteria (Difference), Motivation (Loss), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. La frase non esprime una preferenza per la tradizione (Changes Traditional), ma un rifiuto di essa per abbracciare l'innovazione (Changes Innovator). È un errore di polarità."
                },
                {
                    "text": "Changes (Innovator), Criteria (Difference), Results (Worst), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Molto plausibile, ma l'espressione 'perdiamo il treno' è una metafora classica per la paura di perdere un'opportunità irripetibile. È la leva emotiva (Motivation Loss) che spinge all'azione immediata, non la descrizione analitica di uno scenario futuro (Results Worst)."
                },
                {
                    "text": "Changes (Innovator), Criteria (Difference), Motivation (Loss), Overture (Act)",
                    "isCorrect": true,
                    "explanation": "Corretto. C'è un chiaro rifiuto del passato per il nuovo (Changes Innovator). La novità è sottolineata dal confronto ('totalmente diversa'). La spinta ad agire è la paura di perdere un'opportunità (Motivation Loss). La chiusura è un inequivocabile invito all'azione immediata (Overture Act)."
                },
                {
                    "text": "Changes (Innovator), Philosophy (How), Motivation (Loss), Subordination (Workers)",
                    "isCorrect": false,
                    "explanation": "Errato. 'Questa nuova via' non è descritta nel suo funzionamento (Philosophy), ma solo in opposizione alla vecchia (Criteria). 'Muoviamoci' è un'esortazione collettiva (Overture), non un ordine specifico a un subordinato (Subordination)."
                }
            ]
        },
        {
            "id": 18,
            "question": "Un project manager riporta al suo capo: \"Mi ha dato solo le linee guida, ricordando che in passato avevamo già gestito crisi simili e che, a suo dire, la cosa fondamentale era che fossi io a trovare la via d'uscita.\"",
            "answers": [
                {
                    "text": "Information (Generic), Moment (Past), Arguments (Intuitions), Subordination (Commanders)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'A suo dire' non riporta un'intuizione usata come prova (Arguments), ma identifica la fonte dell'autorità e del giudizio (Reference External, dal punto di vista di chi parla), che a sua volta attiva la modalità Commander."
                },
                {
                    "text": "Information (Generic), Moment (Past), Reference (External), Operation (Options)",
                    "isCorrect": false,
                    "explanation": "Molto vicino, ma l'istruzione 'che fossi io a trovare la via d'uscita' è più profonda di una semplice scelta tra opzioni (Operation). Definisce il ruolo, la responsabilità e l'autonomia della persona. È una chiara manifestazione di Subordination (Commanders)."
                },
                {
                    "text": "Information (Generic), Moment (Past), Reference (External), Subordination (Commanders)",
                    "isCorrect": true,
                    "explanation": "Corretto. Le informazioni ricevute sono generali ('linee guida'). Il contesto è ancorato a esperienze precedenti ('in passato... crisi simili'). L'opinione è attribuita a una fonte esterna ('a suo dire'). L'istruzione finale è una piena delega di autonomia e responsabilità (Subordination Commanders)."
                },
                {
                    "text": "Philosophy (How), Moment (Past), Reference (External), Subordination (Commanders)",
                    "isCorrect": false,
                    "explanation": "Errato. Fornire 'linee guida' è una modalità di trasferimento di informazioni (Information Generic), non la spiegazione di un intero principio metodologico (Philosophy)."
                }
            ]
        },
        {
            "id": 19,
            "question": "Un facilitatore a un workshop creativo: \"Per la prossima ora, non pensiamo ad altro. Per vincere la sfida, potete usare il tool A o il tool B, che è simile a quello che conoscete. Il premio per l'idea migliore sarà un bonus di produzione.\"",
            "answers": [
                {
                    "text": "Focus (Immersive), Operation (Options), Criteria (Similarity), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. Il 'bonus di produzione' non è la descrizione di uno scenario futuro ideale (Results), ma una ricompensa tangibile e immediata offerta come incentivo per agire in un certo modo. È una chiara leva di Motivation (Gain)."
                },
                {
                    "text": "Focus (Immersive), Operation (Options), Criteria (Similarity), Motivation (Gain)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'istruzione iniziale impone una concentrazione totale (Focus Immersive). Viene offerta una scelta tra strumenti operativi (Operation Options). Uno degli strumenti viene reso più accessibile tramite un paragone (Criteria Similarity). Infine, viene usata una ricompensa diretta come incentivo (Motivation Gain)."
                },
                {
                    "text": "Focus (Immersive), Philosophy (How), Changes (Traditional), Motivation (Gain)",
                    "isCorrect": false,
                    "explanation": "Errato. Offrire una scelta tra due tool è Operation, non Philosophy. Menzionare uno strumento 'simile a quello che conoscete' è un paragone (Criteria) per abbassare la resistenza, non un'espressione di preferenza per la tradizione (Changes)."
                },
                {
                    "text": "Operation (Procedure), Operation (Options), Criteria (Similarity), Motivation (Gain)",
                    "isCorrect": false,
                    "explanation": "Inesatto. 'Non pensiamo ad altro' non è una procedura (Operation), ma un'istruzione a mantenere la concentrazione mentale, che è precisamente la definizione di Focus (Immersive)."
                }
            ]
        },
        {
            "id": 20,
            "question": "L'architetto capo presenta il progetto finale: \"La nostra visione è un ecosistema urbano autosufficiente che, ne sono intimamente convinto, realizzerà la nostra missione solo se il metodo di costruzione sarà perfettamente coerente con i principi di sostenibilità che ci siamo imposti.\"",
            "answers": [
                {
                    "text": "Results (Best), Reference (Internal), Consistency (Alignment), Philosophy (How)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase si apre con la descrizione di uno scenario futuro ideale ('ecosistema... autosufficiente'). La credibilità è ancorata a una forte convinzione personale ('ne sono intimamente convinto'). Il successo è vincolato alla coerenza con i valori ('coerente con i principi...'). Infine, il 'metodo di costruzione' è il 'come' realizzativo, il principio operativo (Philosophy)."
                },
                {
                    "text": "Results (Best), Arguments (Intuitions), Consistency (Alignment), Operation (Procedure)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'Ne sono convinto' agisce qui come fonte della validazione (Reference Internal), non come un'intuizione usata per argomentare. Inoltre, il 'metodo di costruzione' è descritto come un principio generale (Philosophy), non come una sequenza specifica di passi (Operation)."
                },
                {
                    "text": "Motivation (Gain), Reference (Internal), Consistency (Alignment), Philosophy (How)",
                    "isCorrect": false,
                    "explanation": "Errato. La visione dell'ecosistema non è una leva emotiva per agire ora (Motivation), ma la descrizione del traguardo finale, lo scopo dell'intero progetto (Results Best)."
                },
                {
                    "text": "Results (Best), Reference (Internal), Criteria (Similarity), Philosophy (How)",
                    "isCorrect": false,
                    "explanation": "Inesatto. La frase non confronta il metodo con altri (Criteria), ma ne valuta la coerenza (Consistency) rispetto a uno standard interno ('i principi di sostenibilità')."
                }
            ]
        },
{
            "id": 21,
            "question": "Un direttore senior a un nuovo analista: \"Il nostro modo di operare si è sempre basato sulla prudenza. I dati confermano che questo approccio è sicuro, quindi ti chiedo di seguire la procedura standard alla lettera.\"",
            "answers": [
                {
                    "text": "Philosophy (How), Changes (Traditional), Arguments (Facts), Subordination (Workers)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase definisce un principio guida, un 'come' operativo ('modo di operare basato sulla prudenza'). Afferma una preferenza per la stabilità e la continuità ('sempre basato su...'). Supporta la tesi con un'evidenza oggettiva ('I dati confermano'). Infine, impartisce un ordine diretto e non negoziabile, attivando la modalità Worker."
                },
                {
                    "text": "Operation (Procedure), Changes (Traditional), Arguments (Facts), Operation (Procedure)",
                    "isCorrect": false,
                    "explanation": "Errato e ridondante. 'Il nostro modo di operare' in questo contesto non è la descrizione di una procedura, ma l'enunciazione di un principio astratto (Philosophy). L'istruzione finale è più di una semplice procedura; è un comando che definisce il rapporto gerarchico (Subordination)."
                },
                {
                    "text": "Philosophy (How), Criteria (Similarity), Reference (External), Subordination (Workers)",
                    "isCorrect": false,
                    "explanation": "Impreciso. La preferenza per la prudenza è una scelta di stabilità (Changes), non un paragone (Criteria). 'I dati confermano' è la presentazione di una prova (Arguments), non un semplice rimando a una fonte esterna (Reference)."
                },
                {
                    "text": "Philosophy (How), Changes (Traditional), Arguments (Facts), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Sbagliato sull'ultimo punto. 'Ti chiedo di seguire...' non è un invito all'azione o una decisione da prendere (Overture), ma un comando diretto all'interno di un task operativo, che è la quintessenza della Subordination (Workers)."
                }
            ]
        },
        {
            "id": 22,
            "question": "In una discussione personale intensa: \"So dentro di me che questa tua scelta tradisce tutto ciò in cui abbiamo creduto. Se vai avanti, non solo mi perderai, ma ti ritroverai completamente solo.\"",
            "answers": [
                {
                    "text": "Reference (Internal), Consistency (Conflict), Motivation (Loss), Results (Worst)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'affermazione si basa su una validazione puramente soggettiva ('So dentro di me'). La scelta viene etichettata come un'incoerenza con i valori condivisi ('tradisce tutto ciò...'). La minaccia di perdita affettiva ('mi perderai') agisce come leva emotiva immediata. Infine, viene dipinto lo scenario futuro desolante ('ti ritroverai solo')."
                },
                {
                    "text": "Arguments (Intuitions), Consistency (Conflict), Motivation (Loss), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. 'So dentro di me' è così forte da agire come fonte di autorità (Reference Internal), non solo come un'intuizione usata per argomentare. È un'affermazione di verità personale, non un'ipotesi."
                },
                {
                    "text": "Reference (Internal), Consistency (Conflict), Results (Worst), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Incompleto e inesatto. La frase manca di un invito esplicito a riflettere (Overture); al contrario, è un ultimatum. Inoltre, omette la cruciale leva emotiva della perdita imminente (Motivation Loss) che è il vero motore della manipolazione."
                },
                {
                    "text": "Reference (Internal), Criteria (Difference), Motivation (Loss), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Errato. La scelta non viene confrontata con un'altra (Criteria), ma giudicata in base a uno standard etico/valoriale preesistente ('tutto ciò in cui abbiamo creduto'), che è la definizione di Consistency (Conflict)."
                }
            ]
        },
        {
            "id": 23,
            "question": "Comunicato stampa aziendale: \"In linea di massima, per il prossimo esercizio fiscale è prevista una revisione strategica. A differenza degli approcci passati, saranno valutate opzioni operative alternative per il raggiungimento dei target.\"",
            "answers": [
                {
                    "text": "Information (Generic), Moment (Future), Criteria (Difference), Operation (Options)",
                    "isCorrect": true,
                    "explanation": "Corretto. Il comunicato fornisce una visione d'insieme ('In linea di massima'). L'orizzonte temporale è il futuro ('prossimo esercizio'). La nuova strategia è definita in opposizione alla precedente ('A differenza di...'). Infine, si dichiara l'intenzione di esplorare percorsi multipli ('opzioni operative alternative')."
                },
                {
                    "text": "Information (Generic), Moment (Future), Changes (Innovator), Operation (Options)",
                    "isCorrect": false,
                    "explanation": "Impreciso. L'affermazione 'A differenza degli approcci passati' è un confronto diretto (Criteria), non necessariamente un'espressione di una preferenza intrinseca per l'innovazione (Changes). Si sta descrivendo un cambiamento, non l'attitudine che lo guida."
                },
                {
                    "text": "Philosophy (Why), Moment (Future), Criteria (Difference), Operation (Procedure)",
                    "isCorrect": false,
                    "explanation": "Errato. Non viene spiegato il perché della revisione (Philosophy), ma solo che ci sarà (Information). Inoltre, si parla di 'opzioni alternative', che è l'esatto opposto di una procedura fissa (Operation Procedure)."
                },
                {
                    "text": "Information (Generic), Results (Best), Criteria (Difference), Operation (Options)",
                    "isCorrect": false,
                    "explanation": "Incompleto. La frase è una proiezione temporale (Moment Future), non la descrizione di uno scenario futuro ideale (Results Best). L'enfasi è sul 'quando' avverrà il cambiamento, non sul 'come' sarà il mondo dopo."
                }
            ]
        },
        {
            "id": 24,
            "question": "Un commesso abile a un cliente indeciso: \"Sento che è quello giusto per lei. È come quello che cercava, ma le darà molto di più. Lo prenda.\"",
            "answers": [
                {
                    "text": "Arguments (Intuitions), Criteria (Similarity), Motivation (Gain), Overture (Act)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase si apre con una percezione soggettiva usata come prova ('Sento che...'). Crea un ponte rassicurante con le esigenze del cliente ('È come quello che...'). Introduce un beneficio aggiuntivo come leva emotiva ('le darà molto di più'). Si chiude con un comando diretto e persuasivo all'azione."
                },
                {
                    "text": "Reference (Internal), Criteria (Similarity), Results (Best), Subordination (Workers)",
                    "isCorrect": false,
                    "explanation": "Errato su tre fronti. 'Sento che' è l'intuizione del commesso (Arguments), non un riferimento ai valori interni del cliente. 'Le darà di più' è una promessa di guadagno (Motivation), non uno scenario dettagliato (Results). 'Lo prenda' è un trigger decisionale (Overture), non un ordine a un subordinato."
                },
                {
                    "text": "Arguments (Intuitions), Changes (Traditional), Motivation (Gain), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'È come quello che cercava' è un paragone per creare familiarità (Criteria), non un'espressione di preferenza per la stabilità o la tradizione (Changes)."
                },
                {
                    "text": "Arguments (Intuitions), Criteria (Similarity), Motivation (Gain), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "L'opposto. 'Lo prenda' è un invito all'azione immediata (Act), progettato per chiudere la vendita e prevenire un'ulteriore riflessione (Reflect)."
                }
            ]
        },
        {
            "id": 25,
            "question": "Un giovane CEO riporta il consiglio del suo mentore: \"Mi ha detto: 'Voglio che tu ti dedichi anima e corpo a trovare una soluzione rivoluzionaria, perché il nostro unico scopo, in fondo, è non smettere mai di evolverci'.\"",
            "answers": [
                {
                    "text": "Subordination (Workers), Focus (Immersive), Changes (Innovator), Philosophy (Why)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato sul primo punto. Sebbene l'ordine sia diretto, il contenuto ('trovare una soluzione') è aperto e non procedurale, mescolando elementi di entrambi gli stili. Tuttavia, la combinazione di un ordine diretto con un obiettivo non definito pende leggermente di più verso lo stile Commander, che delega il 'come'."
                },
                {
                    "text": "Subordination (Commanders), Focus (Immersive), Changes (Innovator), Philosophy (Why)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'istruzione è un ordine che delega piena autonomia creativa ('trovare una soluzione'). Richiede una dedizione totale e assoluta ('anima e corpo'). L'obiettivo è la rottura con il passato ('soluzione rivoluzionaria'). La giustificazione finale è un principio guida, lo scopo ultimo dell'organizzazione ('il nostro unico scopo è...')."
                },
                {
                    "text": "Overture (Act), Focus (Immersive), Criteria (Difference), Motivation (Gain)",
                    "isCorrect": false,
                    "explanation": "Errato. La frase non è un trigger decisionale (Overture), ma riporta un ordine impartito (Subordination). La 'soluzione rivoluzionaria' è più una spinta al cambiamento (Changes) che un semplice confronto (Criteria). L'ultima parte è una ragione d'essere (Philosophy), non una leva di guadagno (Motivation)."
                },
                {
                    "text": "Subordination (Commanders), Focus (Immersive), Changes (Innovator), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Incompleto. La frase finale non descrive uno scenario futuro ('come sarà il mondo quando ci evolveremo'), ma spiega il 'perché' fondamentale dell'agire, la missione, che è la definizione esatta di Philosophy (Why)."
                }
            ]
        },
{
            "id": 26,
            "question": "Un CEO in un momento di crisi: \"La paura di diventare irrilevanti ci impone di avere come unico principio l'eccellenza per il cliente. Per questo, seguiremo il protocollo di feedback a ogni fase, fino a diventare il benchmark indiscusso del settore.\"",
            "answers": [
                {
                    "text": "Motivation (Loss), Philosophy (Why), Operation (Procedure), Results (Best)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase delinea una catena di causalità perfetta: la spinta emotiva è la paura di perdere rilevanza (Motivation). Questa paura genera un principio guida (Philosophy). Il principio si traduce in un'azione concreta e sequenziale (Operation). L'azione porta a uno scenario futuro ideale (Results)."
                },
                {
                    "text": "Motivation (Loss), Philosophy (Why), Operation (Procedure), Motivation (Gain)",
                    "isCorrect": false,
                    "explanation": "Errato sull'ultimo punto. 'Diventare il benchmark' non è la leva emotiva (Motivation Gain), ma la descrizione dettagliata dello stato finale desiderato, lo scenario di successo (Results Best). È la destinazione, non il carburante."
                },
                {
                    "text": "Results (Worst), Philosophy (Why), Subordination (Workers), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'La paura di...' è la leva emotiva (Motivation), non la descrizione dello scenario peggiore. 'Seguiremo il protocollo' è la descrizione di un processo (Operation), non un comando diretto che definisce un ruolo (Subordination)."
                },
                {
                    "text": "Motivation (Loss), Information (Generic), Operation (Procedure), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Inesatto. 'Avere come unico principio...' non è una semplice informazione (Information), ma la dichiarazione di una regola fondamentale, una ragione d'essere strategica (Philosophy Why)."
                }
            ]
        },
        {
            "id": 27,
            "question": "Un manager che delega un progetto: \"So di darti solo la visione d'insieme, ma lo faccio perché la mia sensazione è che nel prossimo futuro sarai tu a dover guidare l'intero processo.\"",
            "answers": [
                {
                    "text": "Information (Generic), Subordination (Commanders), Arguments (Intuitions), Moment (Future)",
                    "isCorrect": true,
                    "explanation": "Corretto. Il manager fa meta-comunicazione, nominando la sua stessa strategia ('So di darti solo la visione d'insieme'). Giustifica questa scelta con una delega di ruolo futura ('sarai tu a dover guidare'). Questa delega è motivata da una percezione soggettiva ('la mia sensazione') proiettata nel tempo ('nel prossimo futuro'). È un esempio magistrale di strategie nidificate."
                },
                {
                    "text": "Information (Generic), Philosophy (Why), Arguments (Intuitions), Moment (Future)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. La ragione per cui dà una visione d'insieme non è un principio astratto (Philosophy), ma una specifica azione di delega e responsabilizzazione (Subordination). Sta definendo un ruolo, non spiegando una regola."
                },
                {
                    "text": "Information (Generic), Subordination (Commanders), Reference (Internal), Moment (Future)",
                    "isCorrect": false,
                    "explanation": "Molto plausibile, ma 'la mia sensazione' è presentata come un'ipotesi a supporto della decisione (Arguments Intuitions), non come una fonte di validazione interna e incontrovertibile (Reference Internal)."
                },
                {
                    "text": "Information (Generic), Overture (Reflect), Arguments (Intuitions), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Errato. Non c'è un invito a decidere o riflettere (Overture), ma una comunicazione di una decisione già presa. La proiezione è temporale (Moment), non la descrizione di uno scenario dettagliato (Results)."
                }
            ]
        },
        {
            "id": 28,
            "question": "Un giovane innovatore a un manager conservatore: \"Certo, continuare a fare come si è sempre fatto è palesemente in conflitto con i dati di mercato che tutti stanno leggendo. Un'idea geniale.\"",
            "answers": [
                {
                    "text": "Changes (Traditional), Consistency (Conflict), Arguments (Facts), Reference (External)",
                    "isCorrect": false,
                    "explanation": "L'analisi è corretta, ma non coglie il livello strategico più importante. L'oratore sta *descrivendo* le strategie altrui in modo sarcastico per criticarle. La domanda testa la capacità di leggere l'intento oltre le parole."
                },
                {
                    "text": "Changes (Traditional), Consistency (Conflict), Arguments (Facts), Reference (External) - usate in modo critico/sarcastico.",
                    "isCorrect": true,
                    "explanation": "Corretto. Questa è l'analisi più completa. L'oratore identifica la preferenza per la stabilità del manager (Changes Traditional). La mette in opposizione a uno standard di realtà oggettiva ('in conflitto'). Cita l'esistenza di prove concrete ('dati di mercato') da una fonte universalmente accessibile ('che tutti stanno leggendo'). La frase finale, 'Un'idea geniale', è la chiave che rivela l'intento sarcastico."
                },
                {
                    "text": "Changes (Traditional), Criteria (Difference), Arguments (Facts), Reference (External)",
                    "isCorrect": false,
                    "explanation": "Errato. La frase non stabilisce una differenza tra due opzioni (Criteria), ma evidenzia una discrepanza, un'incoerenza tra un comportamento e la realtà dei fatti (Consistency Conflict)."
                },
                {
                    "text": "Philosophy (How), Consistency (Conflict), Arguments (Facts), Reference (External)",
                    "isCorrect": false,
                    "explanation": "'Fare come si è sempre fatto' è una preferenza per la stabilità (Changes Traditional), non la descrizione di una metodologia operativa (Philosophy How)."
                }
            ]
        },
        {
            "id": 29,
            "question": "Un amico preoccupato: \"Aspetta, mi sto perdendo... prima di accettare quell'offerta, pensaci bene. Non vuoi fare lo stesso errore che ha fatto Marco, vero?\"",
            "answers": [
                {
                    "text": "Focus (Distracted), Overture (Reflect), Criteria (Similarity), Motivation (Loss)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'oratore manifesta una perdita di concentrazione ('mi sto perdendo'). Invita l'interlocutore a una decisione ponderata ('pensaci bene'). Usa un paragone con un'esperienza negativa altrui ('lo stesso errore di Marco'). Infine, fa leva sulla paura di subire la stessa conseguenza negativa (Motivation Loss)."
                },
                {
                    "text": "Focus (Distracted), Overture (Reflect), Criteria (Similarity), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. Non viene descritto nel dettaglio quale fu l'errore o lo scenario negativo di Marco (Results). L'enfasi è sulla spinta emotiva a EVITARE quella situazione, rendendola una leva di Motivation Loss."
                },
                {
                    "text": "Focus (Distracted), Subordination (Commanders), Reference (External), Motivation (Loss)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'Pensaci bene' è un invito a decidere (Overture), non una delega di un compito (Subordination). L'errore di Marco è usato come paragone (Criteria), non come una fonte di dati esterna (Reference)."
                },
                {
                    "text": "Arguments (Intuitions), Overture (Reflect), Criteria (Similarity), Motivation (Loss)",
                    "isCorrect": false,
                    "explanation": "'Mi sto perdendo' non è un'intuizione usata come prova (Arguments), ma una manifestazione diretta di uno stato di confusione mentale (Focus Distracted)."
                }
            ]
        },
        {
            "id": 30,
            "question": "Un maestro artigiano al suo apprendista: \"Il capolavoro finale sarà un oggetto che parla da sé. La via per arrivarci è la pazienza assoluta; puoi usare lo scalpello fine o quello grosso, sta a te sentire quale è giusto per questo pezzo di legno.\"",
            "answers": [
                {
                    "text": "Results (Best), Philosophy (How), Operation (Options), Reference (Internal)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase si apre con la visione poetica dello scenario ideale (Results Best). Dichiara poi il principio guida, il 'come' astratto ('la via è la pazienza...'). Offre una scelta tra strumenti concreti (Operation Options). Infine, la validazione della scelta è delegata alla percezione interna e soggettiva dell'apprendista ('sta a te sentire quale è giusto')."
                },
                {
                    "text": "Results (Best), Philosophy (How), Operation (Options), Arguments (Intuitions)",
                    "isCorrect": false,
                    "explanation": "Plausibile ma inesatto. 'Sentire quale è giusto' non è un'intuizione usata per convincere qualcuno (Arguments), ma è la fonte stessa della validazione per la scelta. L'autorità decisionale è l'istinto dell'apprendista (Reference Internal)."
                },
                {
                    "text": "Results (Best), Philosophy (How), Subordination (Commanders), Reference (Internal)",
                    "isCorrect": false,
                    "explanation": "Molto vicino. La delega in stile Commander è implicita, ma la frase esplicita la scelta tra strumenti, rendendo Operation (Options) un'analisi più precisa e letterale della comunicazione. La delega è la conseguenza, la scelta è l'azione descritta."
                },
                {
                    "text": "Motivation (Gain), Philosophy (How), Operation (Options), Reference (Internal)",
                    "isCorrect": false,
                    "explanation": "Errato. La descrizione del capolavoro non è una leva per agire (Motivation), ma la descrizione della destinazione finale, lo scopo dell'intero lavoro (Results Best)."
                }
            ]
        },
                {
            "id": 31,
            "question": "Un leader carismatico arringa il suo team con frasi secche: \"Il futuro è nostro. Agite. Il guadagno è certo. Fidatevi.\"",
            "answers": [
                {
                    "text": "Results (Best), Overture (Act), Motivation (Gain), Reference (Internal)",
                    "isCorrect": true,
                    "explanation": "Corretto. Questa è una decodifica di intenti puri, spogliati di ogni complessità sintattica. Ogni frase ha una funzione strategica precisa: dipingere lo scenario ideale ('Il futuro è nostro'), chiamare all'azione immediata ('Agite'), fornire la leva emotiva del desiderio ('Il guadagno è certo'), e chiedere un atto di fiducia che sposta la validazione all'interno del rapporto leader-team ('Fidatevi')."
                },
                {
                    "text": "Results (Best), Subordination (Workers), Motivation (Gain), Arguments (Intuitions)",
                    "isCorrect": false,
                    "explanation": "Errato. 'Agite' è un'esortazione collettiva (Overture), non un'istruzione operativa a un subordinato (Subordination). 'Fidatevi' non è un'argomentazione (Arguments), ma una richiesta di affidarsi alla sua autorità, che in questo contesto agisce come fonte di validazione (Reference)."
                },
                {
                    "text": "Motivation (Gain), Overture (Act), Results (Best), Reference (External)",
                    "isCorrect": false,
                    "explanation": "Analisi imprecisa e con ordine errato. 'Il futuro è nostro' è la visione (Results), non la spinta (Motivation). 'Fidatevi' in questo contesto è un appello alla fiducia interna al gruppo, non a una fonte esterna."
                },
                {
                    "text": "Results (Best), Overture (Act), Arguments (Facts), Reference (Internal)",
                    "isCorrect": false,
                    "explanation": "Inesatto. 'Il guadagno è certo' non è presentato come un dato di fatto (Arguments Facts), ma come una promessa usata per stimolare il desiderio, rendendola una chiara leva di Motivation (Gain)."
                }
            ]
        },
        {
            "id": 32,
            "question": "Un manager durante una riorganizzazione: \"La nostra nuova parola d'ordine è 'innovazione'! Per questo, seguiremo la stessa identica procedura del 1998, anche se i dati dimostrano che è in conflitto con le esigenze attuali.\"",
            "answers": [
                {
                    "text": "Changes (Innovator) - dichiarato, Changes (Traditional) - effettivo, Consistency (Conflict), Arguments (Facts)",
                    "isCorrect": true,
                    "explanation": "Corretto. Questa è una decodifica della contraddizione strategica. Il manager dichiara verbalmente una preferenza per l'innovazione, ma nei fatti descrive un comportamento diametralmente opposto (Changes Traditional). Evidenzia che questa scelta è incoerente con la realtà ('in conflitto'), supportando l'affermazione con prove oggettive ('i dati dimostrano')."
                },
                {
                    "text": "Changes (Innovator), Operation (Procedure), Consistency (Conflict), Reference (External)",
                    "isCorrect": false,
                    "explanation": "Incompleto e impreciso. Non coglie la contraddizione fondamentale tra l'innovazione dichiarata e la tradizione applicata. Inoltre, 'i dati dimostrano' è la presentazione di una prova (Arguments), non un semplice rinvio a una fonte (Reference)."
                },
                {
                    "text": "Philosophy (Why), Operation (Procedure), Consistency (Conflict), Arguments (Facts)",
                    "isCorrect": false,
                    "explanation": "'Innovazione' qui non è presentata come un principio guida (Philosophy), ma come un'etichetta, un'attitudine (Changes). L'analisi deve cogliere la natura contraddittoria dell'atteggiamento verso il cambiamento."
                },
                {
                    "text": "Changes (Innovator), Changes (Traditional), Criteria (Difference), Arguments (Facts)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. La frase non stabilisce un confronto tra due opzioni (Criteria), ma un giudizio di incoerenza tra un'azione (la procedura del '98) e uno standard (le esigenze attuali). È una questione di Consistency, non di Criteria."
                }
            ]
        },
        {
            "id": 33,
            "question": "Un membro del consiglio, con cautela: \"Coerentemente con il nostro valore primario di 'sicurezza', e per evitare i rischi che tutti gli analisti stanno segnalando, non dovremmo forse limitarci a seguire la checklist che già conosciamo?\"",
            "answers": [
                {
                    "text": "Consistency (Alignment), Motivation (Loss), Reference (External), Operation (Procedure)",
                    "isCorrect": true,
                    "explanation": "Corretto. La domanda è costruita su quattro pilastri strategici: fa appello a un valore condiviso (Consistency). Usa la paura di conseguenze negative come leva (Motivation). Cita fonti esterne autorevoli per validare la preoccupazione (Reference). Infine, propone un percorso operativo specifico, rigido e sicuro (Operation)."
                },
                {
                    "text": "Consistency (Alignment), Results (Worst), Reference (External), Changes (Traditional)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'Evitare i rischi' è la spinta ad agire (Motivation), non la descrizione dello scenario peggiore (Results). Proporre di 'seguire la checklist' è un suggerimento operativo (Operation), non necessariamente un'espressione di un'attitudine generale alla tradizione (Changes)."
                },
                {
                    "text": "Philosophy (Why), Motivation (Loss), Arguments (Facts), Operation (Procedure)",
                    "isCorrect": false,
                    "explanation": "Errato. 'Sicurezza' è un valore con cui allinearsi (Consistency), non un principio guida che spiega il perché strategico (Philosophy). Citare 'tutti gli analisti' è un riferimento a una fonte (Reference), non la presentazione di un dato (Arguments)."
                },
                {
                    "text": "Consistency (Alignment), Motivation (Loss), Reference (External), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Incompleto. La domanda non è un generico invito a riflettere (Overture), ma propone una soluzione operativa ben definita (Operation Procedure) come oggetto della riflessione."
                }
            ]
        },
        {
            "id": 34,
            "question": "Un CEO in pensione al suo successore: \"Noi abbiamo sempre navigato usando le stelle come guida. La vostra rotta sarà diversa, ma da oggi tocca a voi tenere il timone.\"",
            "answers": [
                {
                    "text": "Philosophy (How), Moment (Past), Criteria (Difference), Subordination (Commanders)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'intera frase è una metafora. 'Navigare usando le stelle' descrive il principio guida, il 'come' si prendevano le decisioni (Philosophy), contestualizzato nel passato (Moment). 'La vostra rotta sarà diversa' stabilisce un confronto tra il vecchio e il nuovo (Criteria). 'Tenere il timone' è una potente immagine che delega piena autonomia e responsabilità (Subordination Commanders)."
                },
                {
                    "text": "Changes (Traditional), Moment (Past), Criteria (Difference), Subordination (Commanders)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. 'Navigare usando le stelle' è più profondo di una semplice preferenza per la tradizione (Changes); descrive la metodologia, la logica dietro le scelte (Philosophy)."
                },
                {
                    "text": "Philosophy (How), Moment (Past), Changes (Innovator), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Impreciso. L'affermazione che la rotta sarà 'diversa' (Criteria) non implica che il successore debba essere un innovatore (Changes). 'Tenere il timone' non è una chiamata all'azione immediata (Overture), ma la definizione di un nuovo ruolo permanente (Subordination)."
                },
                {
                    "text": "Philosophy (How), Moment (Past), Criteria (Difference), Operation (Options)",
                    "isCorrect": false,
                    "explanation": "Incompleto. 'Tenere il timone' è molto più di una scelta tra opzioni operative. È il trasferimento del comando, del potere decisionale e della responsabilità ultima, che è l'essenza dello stile Commander."
                }
            ]
        },
        {
            "id": 35,
            "question": "Uno psicoterapeuta al paziente: \"Concentriamoci solo su questa paura. Prima di agire, ti chiedo di immaginare vividamente il peggio che potrebbe accadere, perché sento che non hai ancora considerato appieno le conseguenze.\"",
            "answers": [
                {
                    "text": "Focus (Immersive), Overture (Reflect), Results (Worst), Arguments (Intuitions)",
                    "isCorrect": true,
                    "explanation": "Corretto. Questo è un esempio di strategie annidate. L'istruzione principale è di concentrarsi su un singolo tema (Focus). All'interno di questo focus, c'è un invito a una riflessione strutturata (Overture). Il metodo di questa riflessione è visualizzare lo scenario peggiore (Results). La giustificazione per questa tecnica è basata su una percezione professionale del terapeuta (Arguments)."
                },
                {
                    "text": "Focus (Immersive), Operation (Procedure), Motivation (Loss), Arguments (Intuitions)",
                    "isCorrect": false,
                    "explanation": "Errato. 'Immaginare il peggio' non è una leva per evitare una perdita (Motivation), ma è la descrizione dello scenario stesso (Results). L'invito a farlo è un trigger per un processo mentale (Overture), non una procedura operativa."
                },
                {
                    "text": "Focus (Immersive), Overture (Reflect), Results (Worst), Reference (Internal)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'Sento che...' è l'intuizione del terapeuta usata come argomento per guidare la seduta (Arguments), non un riferimento alla validazione interna del paziente (Reference)."
                },
                {
                    "text": "Philosophy (How), Overture (Reflect), Results (Worst), Arguments (Intuitions)",
                    "isCorrect": false,
                    "explanation": "Inesatto. 'Concentriamoci solo su questa paura' non è la spiegazione di un metodo terapeutico (Philosophy), ma un'istruzione diretta a focalizzare l'attenzione in quel momento (Focus)."
                }
            ]
        },

        {
            "id": 36,
            "question": "Un designer descrive il suo processo creativo: \"Prima di tutto, ascolto il mio istinto. Poi, valuto le varie alternative per trovare quella che si distingue di più, fino a raggiungere la perfezione estetica.\"",
            "answers": [
                {
                    "text": "Reference (Internal), Operation (Options), Criteria (Difference), Results (Best)",
                    "isCorrect": true,
                    "explanation": "Corretto. Questa è una decodifica di un processo cognitivo narrato in sequenza. La fonte della direzione iniziale è puramente soggettiva (Reference). Il metodo di lavoro è l'esplorazione di percorsi multipli (Operation). Il criterio di selezione è l'unicità (Criteria). L'obiettivo finale è uno scenario ideale di successo (Results)."
                },
                {
                    "text": "Arguments (Intuitions), Operation (Options), Criteria (Difference), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'Ascolto il mio istinto' in questo contesto non è un'argomentazione per convincere altri, ma la fonte interna di validazione che guida le proprie scelte (Reference Internal). È una guida, non una prova."
                },
                {
                    "text": "Reference (Internal), Philosophy (How), Criteria (Difference), Motivation (Gain)",
                    "isCorrect": false,
                    "explanation": "Errato. Valutare alternative è un processo operativo (Operation), non un principio metodologico astratto (Philosophy). La 'perfezione estetica' è la descrizione dello scenario finale (Results), non la leva emotiva del guadagno (Motivation)."
                },
                {
                    "text": "Reference (Internal), Operation (Options), Changes (Innovator), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Inesatto. 'Trovare quella che si distingue di più' è un atto di comparazione (Criteria Difference), non necessariamente un'espressione di una preferenza intrinseca per l'innovazione in sé (Changes Innovator)."
                }
            ]
        },
        {
            "id": 37,
            "question": "Dialogo tra due manager. A: \"Dimmi esattamente cosa fare; usiamo il metodo collaudato.\" B: \"Ti do l'obiettivo finale, ma voglio che sia tu a inventare un modo completamente nuovo per arrivarci.\"",
            "answers": [
                {
                    "text": "A: Subordination (Workers), Changes (Traditional). B: Subordination (Commanders), Changes (Innovator).",
                    "isCorrect": true,
                    "explanation": "Corretto. Questa è una decodifica comparativa. Lo speaker A mostra una chiara preferenza per istruzioni dirette e per la stabilità dei metodi. Lo speaker B, al contrario, delega pienamente la responsabilità del 'come', chiedendo autonomia e un approccio orientato alla novità. Le due coppie di strategie sono in perfetta opposizione."
                },
                {
                    "text": "A: Operation (Procedure), Changes (Traditional). B: Operation (Options), Changes (Innovator).",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. La richiesta di A ('Dimmi cosa fare') e l'istruzione di B ('voglio che sia tu a inventare') non riguardano solo il processo (Operation), ma definiscono la natura stessa del rapporto gerarchico e della delega. È una questione di Subordination, che è strategicamente più profonda."
                },
                {
                    "text": "A: Subordination (Workers), Criteria (Similarity). B: Subordination (Commanders), Criteria (Difference).",
                    "isCorrect": false,
                    "explanation": "Incompleto. Sebbene il 'metodo collaudato' possa implicare similarità e il 'modo nuovo' una differenza, la strategia dominante che esprimono è l'attitudine generale verso il cambiamento e la stabilità (Changes), non il singolo atto di comparazione (Criteria)."
                },
                {
                    "text": "A: Subordination (Workers), Changes (Traditional). B: Subordination (Workers), Changes (Innovator).",
                    "isCorrect": false,
                    "explanation": "Errato su B. Dare un obiettivo e chiedere di inventare il metodo è la definizione stessa dello stile Commander, che si contrappone allo stile Worker che richiede istruzioni precise."
                }
            ]
        },
        {
            "id": 38,
            "question": "Un founder a un investitore: \"Raggiungeremo un futuro di profitti record solo se il nostro principio guida sarà l'etica assoluta, un valore che so condividete, perché è l'unico vero motore di crescita a lungo termine.\"",
            "answers": [
                {
                    "text": "Results (Best), Philosophy (Why), Consistency (Alignment), Motivation (Gain)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase è una complessa costruzione strategica. Si apre con la visione dello scenario ideale (Results). Il successo è condizionato da un principio fondante (Philosophy). Questo principio viene usato per creare un ponte di valori condivisi con l'interlocutore (Consistency). Infine, la crescita viene presentata come il beneficio e la leva motivazionale ultima (Motivation)."
                },
                {
                    "text": "Results (Best), Philosophy (Why), Reference (External), Motivation (Gain)",
                    "isCorrect": false,
                    "explanation": "Errato. 'Un valore che so condividete' non è un riferimento a una fonte esterna, ma un'affermazione di coerenza e allineamento valoriale con l'interlocutore (Consistency Alignment)."
                },
                {
                    "text": "Motivation (Gain), Philosophy (Why), Consistency (Alignment), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Ordine errato e analisi imprecisa. La frase inizia con la descrizione del risultato, non con la leva motivazionale. La 'crescita a lungo termine' è presentata come la spinta (Motivation), mentre i 'profitti record' sono la descrizione dello scenario finale (Results)."
                },
                {
                    "text": "Results (Best), Operation (Procedure), Consistency (Alignment), Motivation (Gain)",
                    "isCorrect": false,
                    "explanation": "Impreciso. L''etica assoluta' non è una procedura operativa (Operation), ma un principio guida astratto e una regola di condotta (Philosophy)."
                }
            ]
        },
        {
            "id": 39,
            "question": "Un trader senior a un novellino, indicando un grafico: \"I numeri di quella crisi sono inequivocabili. Non vuoi finire come loro, vero? Riflettici.\"",
            "answers": [
                {
                    "text": "Arguments (Facts), Moment (Past), Motivation (Loss), Overture (Reflect)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase si basa su un'evidenza oggettiva ('I numeri... sono inequivocabili'). Questa evidenza è contestualizzata in un evento passato ('quella crisi'). Viene usata una potente leva emotiva basata sulla paura di ripetere un fallimento altrui ('Non vuoi finire come loro'). La chiusura è un chiaro invito a una decisione ponderata."
                },
                {
                    "text": "Reference (External), Moment (Past), Results (Worst), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. Mostrare 'i numeri' è presentare un'argomentazione basata su fatti, non semplicemente citare una fonte. 'Non vuoi finire come loro' è la spinta ad agire per evitare il male (Motivation), non la descrizione dettagliata di quello scenario negativo (Results)."
                },
                {
                    "text": "Arguments (Facts), Moment (Past), Motivation (Loss), Subordination (Commanders)",
                    "isCorrect": false,
                    "explanation": "Errato. 'Riflettici' non è una delega di un compito (Subordination), ma un comando che avvia un processo decisionale interno (Overture Reflect)."
                },
                {
                    "text": "Arguments (Facts), Changes (Traditional), Motivation (Loss), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Incompleto. Manca l'elemento temporale cruciale. Il riferimento non è a una generica tradizione, ma a un evento storico specifico e concluso (Moment Past)."
                }
            ]
        },
        {
            "id": 40,
            "question": "Una scienziata descrive una scoperta: \"Per mesi, il nostro intero universo è stato questo singolo dato. Come ci ha insegnato il nostro mentore, la via per la verità è l'ossessione per il dettaglio.\"",
            "answers": [
                {
                    "text": "Focus (Immersive) e Information (Specific), annidati; Philosophy (How) e Reference (External), annidati.",
                    "isCorrect": true,
                    "explanation": "Corretto. Questa è l'analisi più profonda. La prima frase descrive metaforicamente uno stato di concentrazione totale (Focus) su un'informazione ultra-dettagliata (Information). Sono inseparabili. La seconda frase enuncia un principio metodologico ('la via è l'ossessione...'), che è la Philosophy, ma la sua autorità deriva da una fonte esterna ('Come ci ha insegnato...'), annidando il Reference."
                },
                {
                    "text": "Focus (Immersive), Information (Specific), Philosophy (How), Reference (External)",
                    "isCorrect": false,
                    "explanation": "Corretto, ma superficiale. Questa opzione elenca le strategie correttamente, ma non cattura la relazione di annidamento e sinergia tra di esse, che è la vera chiave di decodifica di una comunicazione così complessa. La prima opzione è strategicamente più accurata."
                },
                {
                    "text": "Focus (Immersive), Information (Specific), Operation (Procedure), Reference (External)",
                    "isCorrect": false,
                    "explanation": "Errato. 'L'ossessione per il dettaglio' non è una procedura con passi definiti (Operation), ma un principio guida, una mentalità (Philosophy)."
                },
                {
                    "text": "Moment (Past), Information (Specific), Philosophy (How), Reference (External)",
                    "isCorrect": false,
                    "explanation": "Impreciso. Sebbene i 'mesi' si riferiscano al passato (Moment), la strategia dominante descritta in quella frase è lo stato mentale di totale concentrazione (Focus Immersive), che è un'analisi più pertinente e profonda."
                }
            ]
        },

    {
            "id": 41,
            "question": "Un nuovo manager descrive il suo team: \"È frustrante. Dicono di volere i dati per decidere, ma se non fornisco loro una checklist esatta con i metodi che hanno sempre usato, semplicemente non si muovono.\"",
            "answers": [
                {
                    "text": "Le strategie del team sono: Arguments (Facts), Operation (Procedure), Changes (Traditional), Subordination (Workers).",
                    "isCorrect": true,
                    "explanation": "Corretto. Questa è una decodifica per procura. Il manager descrive un team che chiede dati (Arguments), ma che in realtà agisce solo se riceve istruzioni passo-passo (Operation/Subordination) basate sulla continuità con il passato (Changes). La richiesta di dati è una facciata per una profonda preferenza Worker/Traditional."
                },
                {
                    "text": "Le strategie del manager sono: Arguments (Facts), Operation (Procedure), Changes (Innovator), Subordination (Commanders).",
                    "isCorrect": false,
                    "explanation": "Errato. La frase non descrive le strategie del manager, ma quelle del suo team. Questo è un errore di prospettiva. L'analisi deve decodificare il soggetto della descrizione, non il narratore."
                },
                {
                    "text": "Le strategie del team sono: Reference (External), Operation (Procedure), Changes (Traditional), Overture (Reflect).",
                    "isCorrect": false,
                    "explanation": "Impreciso. Il team non chiede dati come fonte di validazione esterna (Reference), ma li vuole come prova concreta per agire (Arguments). La loro immobilità non è una fase di riflessione (Overture), ma una richiesta implicita di istruzioni dirette (Subordination)."
                },
                {
                    "text": "Le strategie del team sono: Arguments (Facts), Philosophy (How), Changes (Traditional), Subordination (Workers).",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. La 'checklist' non è un principio metodologico (Philosophy), ma una sequenza di passi operativi concreti (Operation Procedure), che è ciò che lo stile Worker richiede."
                }
            ]
        },
        {
            "id": 42,
            "question": "Il fondatore di una ONG durante una raccolta fondi urgente: \"Il nostro principio è l'impatto immediato. Questa scelta è perfettamente in linea con la missione che ci siamo dati. Ogni euro donato ora si trasforma subito in un pasto caldo. Agite!\"",
            "answers": [
                {
                    "text": "Philosophy (Why), Consistency (Alignment), Results (Best), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Molto plausibile, ma strategicamente impreciso. La frase 'si trasforma subito in un pasto caldo' non descrive uno scenario futuro grandioso (Results), ma una ricompensa immediata e tangibile. È una leva emotiva studiata per innescare un'azione istantanea, rendendola una potentissima Motivation (Gain)."
                },
                {
                    "text": "Philosophy (Why), Consistency (Alignment), Motivation (Gain), Overture (Act)",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase stabilisce un principio guida ('impatto immediato'). Lo allinea ai valori dell'organizzazione (Consistency). Usa un beneficio immediato e concreto ('un pasto caldo') come leva emotiva per il guadagno (non per sé, ma per la causa). Chiude con un'inequivocabile chiamata all'azione."
                },
                {
                    "text": "Philosophy (Why), Criteria (Similarity), Motivation (Gain), Subordination (Workers)",
                    "isCorrect": false,
                    "explanation": "Errato. La scelta non viene confrontata con altre (Criteria), ma allineata a uno standard interno (Consistency). 'Agite!' è un'esortazione pubblica (Overture), non un ordine a un subordinato."
                },
                {
                    "text": "Operation (Procedure), Consistency (Alignment), Motivation (Gain), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "'Impatto immediato' è un principio, una filosofia (Philosophy), non una procedura operativa con dei passi definiti (Operation)."
                }
            ]
        },
        {
            "id": 43,
            "question": "Un primario in sala operatoria durante un'emergenza: \"Ignora tutto il resto, occhi solo su quel parametro. Prima 5cc di farmaco A, poi 10 di B, in quest'ordine esatto. Se lo perdiamo ora, è finita.\"",
            "answers": [
                {
                    "text": "Focus (Immersive), Information (Specific), Operation (Procedure), Motivation (Loss)",
                    "isCorrect": true,
                    "explanation": "Corretto. Il contesto di alta pressione richiede strategie dirette: un comando a escludere ogni distrazione (Focus) e a concentrarsi su un singolo dato (Information). L'azione richiesta è una sequenza rigida e non negoziabile (Operation). La leva per garantire l'esecuzione perfetta è la conseguenza catastrofica e immediata (Motivation)."
                },
                {
                    "text": "Focus (Immersive), Information (Specific), Subordination (Workers), Results (Worst)",
                    "isCorrect": false,
                    "explanation": "Sottilmente impreciso. Sebbene sia un ordine a un subordinato (stile Worker), la descrizione dei passaggi è così dettagliata da qualificarsi primariamente come Operation (Procedure). Inoltre, 'è finita' è la spinta emotiva per evitare il disastro ora (Motivation), non la descrizione dello scenario post-mortem (Results)."
                },
                {
                    "text": "Focus (Immersive), Information (Specific), Operation (Procedure), Arguments (Facts)",
                    "isCorrect": false,
                    "explanation": "Incompleto. Manca l'elemento più potente della frase: la leva emotiva della perdita imminente (Motivation Loss), che è il vero motore della comunicazione in un contesto di emergenza."
                },
                {
                    "text": "Subordination (Workers), Operation (Procedure), Philosophy (How), Motivation (Loss)",
                    "isCorrect": false,
                    "explanation": "Errato. La frase non contiene alcun principio metodologico astratto (Philosophy). È pura esecuzione tattica sotto pressione."
                }
            ]
        },
        {
            "id": 44,
            "question": "Un vecchio investigatore, ripensando a un caso irrisolto: \"Quel caso era diverso da qualunque altro avessi mai visto. Sentivo dentro di me che la soluzione era a un passo, ma dovevo solo prendermi un momento per fermarmi e pensare.\"",
            "answers": [
                {
                    "text": "Criteria (Difference), Moment (Past), Reference (Internal), Overture (Reflect)",
                    "isCorrect": true,
                    "explanation": "Corretto. L'analisi decodifica un processo di pensiero interiore. Il caso viene definito per la sua unicità (Criteria) in un contesto passato (Moment). La convinzione sulla soluzione si basa su una validazione puramente soggettiva (Reference). La consapevolezza finale è la necessità di attivare un processo di riflessione (Overture)."
                },
                {
                    "text": "Criteria (Difference), Moment (Past), Arguments (Intuitions), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Molto vicino, ma 'Sentivo dentro di me' in questo contesto non è un'ipotesi (Arguments), ma la fonte stessa della sua certezza, per quanto soggettiva. Agisce come la sua unica autorità sul caso in quel momento (Reference Internal)."
                },
                {
                    "text": "Changes (Innovator), Moment (Past), Reference (Internal), Operation (Procedure)",
                    "isCorrect": false,
                    "explanation": "Errato. Il caso era 'diverso' (Criteria), il che non implica che l'investigatore avesse un'attitudine all'innovazione (Changes). 'Fermarmi a pensare' è l'innesco di un processo mentale (Overture), non una procedura operativa."
                },
                {
                    "text": "Criteria (Difference), Moment (Past), Reference (Internal), Focus (Immersive)",
                    "isCorrect": false,
                    "explanation": "Incompleto. 'Prendermi un momento per fermarmi e pensare' descrive l'atto di iniziare a riflettere (Overture Reflect), non lo stato di concentrazione profonda che ne potrebbe conseguire (Focus Immersive)."
                }
            ]
        },
        {
            "id": 45,
            "question": "Un consulente strategico spiega il suo approccio: \"Il mio principio è che ogni mossa deve essere coerente con l'identità del cliente. La mia impressione è che solo così si possa costruire un'immagine di fiducia totale nel mercato.\"",
            "answers": [
                {
                    "text": "Philosophy (Why), Consistency (Alignment), Arguments (Intuitions), Results (Best)",
                    "isCorrect": true,
                    "explanation": "Corretto. Questa è una decodifica di un meta-discorso strategico. L'oratore enuncia il suo principio guida fondamentale (Philosophy). Specifica che il criterio di ogni azione è la coerenza con i valori (Consistency). Supporta questa tesi con una sua valutazione professionale soggettiva (Arguments). Infine, descrive lo scenario ideale che questa strategia permette di raggiungere (Results)."
                },
                {
                    "text": "Philosophy (Why), Consistency (Alignment), Arguments (Intuitions), Motivation (Gain)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. La 'fiducia totale nel mercato' è descritta come il risultato finale, lo stato ideale da raggiungere (Results Best), non come la leva emotiva o il guadagno immediato che spinge all'azione (Motivation Gain)."
                },
                {
                    "text": "Operation (Procedure), Consistency (Alignment), Arguments (Intuitions), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'Ogni mossa deve essere coerente' non è una procedura con dei passi, ma un principio astratto, una regola aurea (Philosophy) che governa tutte le procedure."
                },
                {
                    "text": "Philosophy (Why), Criteria (Similarity), Reference (Internal), Results (Best)",
                    "isCorrect": false,
                    "explanation": "Errato. Non si parla di similarità con altre mosse (Criteria), ma di coerenza con un'identità (Consistency). 'La mia impressione' è presentata come un'argomentazione (Arguments), non come la fonte di validazione per una decisione specifica (Reference)."
                }
            ]
        }, 
{
            "id": 46,
            "question": "Il monologo interiore di un informatore: \"Il nostro principio fondante dovrebbe essere la verità. Ma rivelare tutto è in conflitto con la lealtà che devo al mio team. Ho una paura terribile di distruggere le loro vite. Devo solo pensare a qual è la cosa giusta da fare.\"",
            "answers": [
                {
                    "text": "Philosophy (Why), Consistency (Conflict), Motivation (Loss), Overture (Reflect)",
                    "isCorrect": true,
                    "explanation": "Corretto. Questo è il ritratto di un dilemma etico. La base è un principio morale (Philosophy). Questo principio si scontra con un altro valore, creando un'incoerenza interna (Consistency). La spinta a non agire è la paura delle conseguenze negative (Motivation). La conclusione è la necessità di un processo decisionale ponderato (Overture)."
                },
                {
                    "text": "Philosophy (Why), Consistency (Conflict), Results (Worst), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. 'Ho una paura terribile di distruggere le loro vite' non è una descrizione analitica dello scenario futuro (Results), ma l'espressione della leva emotiva immediata che sta bloccando l'azione (Motivation Loss)."
                },
                {
                    "text": "Arguments (Intuitions), Consistency (Conflict), Motivation (Loss), Subordination (Commanders)",
                    "isCorrect": false,
                    "explanation": "Errato. Non si tratta di un'intuizione (Arguments), ma di un principio etico (Philosophy). La conclusione non è una delega di un compito (Subordination), ma l'avvio di un processo di riflessione personale (Overture)."
                },
                {
                    "text": "Philosophy (Why), Criteria (Difference), Motivation (Loss), Overture (Reflect)",
                    "isCorrect": false,
                    "explanation": "Impreciso. Il problema non è la differenza tra due opzioni (Criteria), ma il conflitto tra un'azione e un sistema di valori (Consistency)."
                }
            ]
        },
        {
            "id": 47,
            "question": "Un'artista d'avanguardia descrive la sua opera: \"La mia visione è un'esperienza che costringa lo spettatore a vedere il mondo in modo totalmente nuovo. Non mi interessa il giudizio della critica; l'unica mia bussola è stata la mia voce interiore.\"",
            "answers": [
                {
                    "text": "Results (Best), Criteria (Difference) e Changes (Innovator) combinati, Reference (Internal).",
                    "isCorrect": true,
                    "explanation": "Corretto. L'analisi più profonda riconosce che lo scenario ideale (Results) è intrinsecamente legato alla rottura con il passato (Changes) e definito attraverso la differenza (Criteria). Sono tre facce dello stesso intento rivoluzionario. Questa visione è validata esclusivamente da una fonte interna, rifiutando ogni riferimento esterno."
                },
                {
                    "text": "Results (Best), Criteria (Difference), Changes (Innovator), Arguments (Intuitions)",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'La mia voce interiore' non è presentata come un'argomentazione per convincere, ma come l'unica fonte di autorità e validazione del processo creativo. È una questione di Reference, non di Arguments."
                },
                {
                    "text": "Motivation (Gain), Criteria (Difference), Changes (Innovator), Reference (Internal)",
                    "isCorrect": false,
                    "explanation": "Errato. La frase non descrive la leva emotiva che ha spinto alla creazione (Motivation), ma la visione del risultato finale che l'opera deve incarnare (Results Best)."
                },
                {
                    "text": "Results (Best), Philosophy (Why), Changes (Innovator), Reference (Internal)",
                    "isCorrect": false,
                    "explanation": "Incompleto. Manca l'elemento cruciale del confronto e della rottura, che è la strategia del Criteria (Difference). La novità (Changes) è definita proprio dalla sua differenza con ciò che esiste."
                }
            ]
        },
        {
            "id": 48,
            "question": "Dibattito scientifico. Scienziato A: \"Tutti i dati raccolti finora supportano il modello attuale; non c'è motivo di cambiarlo.\" Scienziato B: \"Eppure, io intravedo una nuova correlazione, un paradigma che potrebbe cambiare tutto.\"",
            "answers": [
                {
                    "text": "A: Arguments (Facts), Changes (Traditional). B: Arguments (Intuitions), Changes (Innovator).",
                    "isCorrect": true,
                    "explanation": "Corretto. Questo è un classico conflitto di epistemologia. Lo scienziato A si basa su prove concrete e manifesta una preferenza per la stabilità del paradigma esistente. Lo scienziato B si basa su un'ipotesi, una percezione di un nuovo schema, e manifesta una chiara spinta verso l'innovazione e il cambiamento."
                },
                {
                    "text": "A: Reference (External), Changes (Traditional). B: Reference (Internal), Changes (Innovator).",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. Entrambi stanno presentando argomentazioni per sostenere le loro tesi, non semplicemente citando fonti. A usa i 'dati' come prova (Arguments), B usa la sua 'visione' come prova (Arguments). Non è una questione di chi ha l'autorità, ma di come provano il loro punto."
                },
                {
                    "text": "A: Arguments (Facts), Philosophy (Why). B: Arguments (Intuitions), Philosophy (Why).",
                    "isCorrect": false,
                    "explanation": "Incompleto. L'analisi non coglie la dimensione fondamentale del dibattito: l'atteggiamento opposto nei confronti del cambiamento e della stabilità (Changes), che è il vero cuore della divergenza."
                },
                {
                    "text": "A: Arguments (Facts), Changes (Traditional). B: Arguments (Facts), Changes (Innovator).",
                    "isCorrect": false,
                    "explanation": "Errato su B. 'Intravedo una nuova correlazione' non è la presentazione di un dato di fatto (Arguments Facts), ma di un'ipotesi, una sensazione intellettuale (Arguments Intuitions)."
                }
            ]
        },
        {
            "id": 49,
            "question": "Un maestro Zen a un allievo arciere: \"Per colpire il bersaglio domani, il tuo unico scopo è dimenticarlo e seguire la sequenza del respiro alla perfezione. Il come te l'ho dato; il quando lo deciderai tu.\"",
            "answers": [
                {
                    "text": "Moment (Future), Philosophy (Why), Operation (Procedure), Subordination (Commanders).",
                    "isCorrect": true,
                    "explanation": "Corretto. La frase è un paradosso strategico. L'obiettivo è temporale (Moment Future). Il principio guida ('lo scopo è dimenticare') è una profonda ragione d'essere (Philosophy). La via per raggiungerlo è una sequenza precisa ('la sequenza del respiro'). Infine, la responsabilità dell'esecuzione finale è pienamente delegata (Subordination Commanders)."
                },
                {
                    "text": "Moment (Future), Philosophy (Why), Operation (Procedure), Overture (Act)",
                    "isCorrect": false,
                    "explanation": "Inesatto. 'Il quando lo deciderai tu' non è un invito ad agire ora (Overture), ma la delega dell'autorità di decidere il momento giusto, che è una caratteristica distintiva dello stile Commander."
                },
                {
                    "text": "Results (Best), Philosophy (Why), Operation (Procedure), Subordination (Commanders).",
                    "isCorrect": false,
                    "explanation": "Impreciso. 'Colpire il bersaglio domani' non è la descrizione dello scenario ideale (Results), ma la definizione del momento in cui l'obiettivo deve essere raggiunto (Moment Future)."
                },
                {
                    "text": "Moment (Future), Philosophy (How), Operation (Procedure), Subordination (Commanders).",
                    "isCorrect": false,
                    "explanation": "Molto vicino, ma 'il tuo unico scopo è...' definisce il fine ultimo, il 'perché' si esegue la procedura del respiro (per dimenticare il bersaglio), rendendola una Philosophy (Why) più che una (How)."
                }
            ]
        },
        {
            "id": 50,
            "question": "Uno stratega della comunicazione: \"Per comprendere a fondo un'interazione, analizzo ogni singola parola per verificare che sia coerente con l'intento generale. Questo è l'unico modo per arrivare alla vera struttura del pensiero.\"",
            "answers": [
                {
                    "text": "Focus (Immersive), Information (Specific), Consistency (Alignment), Philosophy (How).",
                    "isCorrect": true,
                    "explanation": "Corretto. Questa è la decodifica del modello stesso. L'approccio richiede una concentrazione totale ('comprendere a fondo'). L'unità di analisi è il dettaglio minimo ('ogni singola parola'). Il criterio di valutazione è la coerenza con uno standard ('coerente con l'intento'). L'intera sequenza descrive la metodologia, il 'come' si ottiene il risultato ('Questo è l'unico modo')."
                },
                {
                    "text": "Focus (Immersive), Information (Specific), Consistency (Alignment), Philosophy (Why).",
                    "isCorrect": false,
                    "explanation": "Sottilmente errato. La frase finale non spiega il 'perché' si dovrebbe analizzare (es. 'perché è importante capire gli altri'), ma descrive la metodologia con cui 'si arriva alla struttura del pensiero'. È una descrizione di processo, quindi Philosophy (How)."
                },
                {
                    "text": "Focus (Immersive), Operation (Procedure), Consistency (Alignment), Philosophy (How).",
                    "isCorrect": false,
                    "explanation": "Inesatto. 'Analizzo ogni singola parola' non è una procedura con passi fissi, ma una descrizione del livello di dettaglio a cui si opera (Information Specific) all'interno di uno stato di concentrazione (Focus)."
                },
                {
                    "text": "Focus (Immersive), Information (Specific), Criteria (Similarity), Philosophy (How).",
                    "isCorrect": false,
                    "explanation": "Errato. La verifica non è un confronto per similarità con qualcos'altro (Criteria), ma un controllo di coerenza e allineamento con uno standard interno all'interazione stessa (Consistency)."
                }
            ]
        }       
        
    
 
];
