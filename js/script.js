/*
	Milestone 1
		- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) 
			e dall’interlocutore (bianco) assegnando due classi CSS diverse;
		- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, 
			visualizzare nome e immagine di ogni contatto.
	
	Milestone 2
		- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare 
			tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione;
		- Click sul contatto mostra la conversazione del contatto cliccato.

	Milestone 3
		- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” 
			il testo viene aggiunto al thread sopra, come messaggio verde;
		- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà 
			un “ok” come risposta, che apparirà dopo 1 secondo.

	Milestone 4
		- Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo 
			i contatti il cui nome contiene le lettere inserite 
			(es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina).
	
	Milestone 5 (opzionale)
		- Cancella messaggio: cliccando sul messaggio appare un menu a tendina 
			che permette di cancellare il messaggio selezionato;
		- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti.
*/

const boolZapp = new Vue({
	el: "#root",

	data: {
		userInput: "",
		search: "",
		contactIndex: 0,

		contacts: [
			//	Alessandro
			{
				name: 'Alessandro',
				avatar: 'img/avatar_2.jpg',
				visible: true,
				isActive: "",
				messages: [
					{
						date: '22/04/2021 15:30:07',
						text: "Ciao Ale, hai seguito l'ultimo lancio della Space X?",
						status: 'sent'
					},
					{
						date: '22/04/2021 15:30:23',
						text: 'Ti consiglio la live su YouTube',
						status: 'sent'
					},
					{
						date: '22/04/2021 15:31:54',
						text: 'Corro!',
						status: 'received'
					}
				],
			},

			//	Fabio
			{
				name: 'Fabio',
				avatar: 'img/avatar_3.jpg',
				visible: true,
				messages: [
					{
						date: '20/01/2021 10:42:32',
						text: 'Buongiorno Fabio, vorrei iscrivermi al vostro corso.',
						status: 'sent'
					},
					{
						date: '20/01/2021 17:12:22',
						text: 'Grazie per averci scelto. Consulta il nostro sito Web.',
						status: 'received'
					},
					{
						date: '21/01/2021 08:54:36',
						text: "Ok, grazie mille, non vedo l'ora di iniziare!",
						status: 'sent'
					}
				],
			},

			//	Donato
			{
				name: 'Donato',
				avatar: 'img/avatar_5.jpg',
				visible: true,
				messages: [
					{
						date: '22/04/2021 16:23:39',
						text: 'Ciao, ricordati di pushare!',
						status: 'received'
					},
					{
						date: '22/04/2021 16:25:19',
						text: 'Ok Donato, me ne dimentico SEMPRE!',
						status: 'sent'
					},
					{
						date: '22/04/2021 16:26:36',
						text: 'Bene.',
						status: 'received'
					}
				],
			},

			//	Simone
			{
				name: 'Simone',
				avatar: 'img/avatar_7.jpg',
				visible: true,
				messages: [
					{
						date: '22/04/2021 17:31:22',
						text: "Ciao Simone, saresti così gentile da farmi l'esercizio?",
						status: 'sent'
					},
					{
						date: '22/04/2021 17:35:07',
						text: 'Direi proprio di no. Studia!',
						status: 'received'
					}
				],
			}
		],
	},

	//	METHODS
	methods: {
		changeContact(index) {
			this.contactIndex = index;
		},
		//  Per vedere se una porzione di stringa è compresa
		filterUsers() {
			this.contacts.forEach( (element) => {
				//  Se la stringa è compresa, la visibilità è true - viceversa
				if(element.name.toLowerCase().includes(this.search.toLowerCase())) {
					element.visible = true;
				} else {
					element.visible = false;
				}
			});
		},

		//	Messaggio inviato al click-enter rilasciato
		sendMessage() {
			if (this.userInput != "") {
				this.contacts[this.contactIndex].messages.push(
					{
						date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
						text: this.userInput,
						status: 'sent'
					});
				this.userInput = '';
			}
			this.reciveMessage();
		},
		
		//	Messaggio ricevuto che appare dopo 1 sec, richiamato dalla funz. sopra
		reciveMessage() {
			setTimeout(() => {
				this.contacts[this.contactIndex].messages.push(
					{
						date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
						text: 'Ok',
						status: 'received'
					});
			}, 1000);
		}
	}
});