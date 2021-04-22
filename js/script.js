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
*/

const boolZapp = new Vue({
	contacts: [
		{
			name: 'Alessandro',
			avatar: '_1',
			visible: true,
			messages: [
				{
					date: '10/01/2020 15:30:55',
					text: "Ciao Ale, hai seguito l'ultimo lancio della Space X?",
					status: 'sent'
				},
				{
					date: '10/01/2020 15:50:00',
					text: 'Ti consiglio la live su YouTube',
					status: 'sent'
				},
				{
					date: '10/01/2020 16:15:22',
					text: 'Corro!',
					status: 'received'
				}
			],
		},
		{
			name: 'Fabio',
			avatar: '_2',
			visible: true,
			messages: [
				{
					date: '20/03/2020 16:30:00',
					text: 'Ciao Fabio, vorrei iscrivermi al vostro corso.',
					status: 'sent'
				},
				{
					date: '20/03/2020 16:30:55',
					text: 'Grazie per averci scelto. Consulta il nostro sito Web.',
					status: 'received'
				},
				{
					date: '20/03/2020 16:35:00',
					text: "Ok, grazie mille, non vedo l'ora di iniziare!",
					status: 'sent'
				}
			],
		},
		{
			name: 'Donato',
			avatar: '_3',
			visible: true,
			messages: [
				{
					date: '28/03/2020 10:10:40',
					text: 'Ciao, ricordati di pushare!',
					status: 'received'
				},
				{
					date: '28/03/2020 10:20:10',
					text: 'Ok Donato, me ne dimentico SEMPRE!',
					status: 'sent'
				},
				{
					date: '28/03/2020 16:15:22',
					text: 'Bene.',
					status: 'received'
				}
			],
		},
		{
			name: 'Simone',
			avatar: '_4',
			visible: true,
			messages: [
				{
					date: '10/01/2020 15:30:55',
					text: "Ciao Simone, saresti così gentile da farmi l'esercizio?",
					status: 'sent'
				},
				{
					date: '10/01/2020 15:50:00',
					text: 'Direi proprio di no. Studia!',
					status: 'received'
				}
			],
		}
	],
});