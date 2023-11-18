<script>
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';
	export let data;
	let trashdata = data;
	
// controle of JS aanstaat in de browser
let isEnabled = false;
	

	// de slice -4 pakt de laatste vier months
	const laatsteVierMaanden = trashdata.dataApi.totals.months.slice(-4);


	// gebruik de Intl browser API om nummers om te zetten in maandnaam
	const monthNames = laatsteVierMaanden.map(item => {
		const date = new Date();
		date.setMonth(item.month - 1); // Maanden zijn zero-based in JavaScript

		return new Intl.DateTimeFormat('nl-NL', { month: 'long' }).format(date);
	});

	
	// Functie om de kleurinstelling voor Chart.js te configureren op basis van dark mode
	function configureChartColor() {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// Dark mode wordt gebruikt
			Chart.defaults.color = 'white';
		} else {
			// Dark mode wordt niet gebruikt
			Chart.defaults.color = '#143653';
		}
	}
	
	onMount(() => {

		console.log('onMount triggered');
    

		configureChartColor();
		// Voeg de js-enabled klasse toe wanneer isEnabled true is
		// if (isEnabled) {
		// 	document.querySelector('table').classList.add('js-enabled');
		// }

		isEnabled = true;
		console.log('isEnabled:', isEnabled);



		data = {
		labels: monthNames,
		datasets: [
			{
				label: 'Trash collected in kilogram',
				data: [
					laatsteVierMaanden[0].debris_extracted,
					laatsteVierMaanden[1].debris_extracted,
					laatsteVierMaanden[2].debris_extracted,
					laatsteVierMaanden[3].debris_extracted
				],
				fill: true,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			}
		]
	};


	// Gebruik een setTimeout om ervoor te zorgen dat er wat tijd is om de DOM op te zetten voordat de grafiek wordt geïnitialiseerd
	setTimeout(() => {
	const ctx = document.getElementById('uniqueCanvasId').getContext('2d');
		new Chart(ctx, {
			type: 'line',
			data: data
		});
	}, 100);
});
</script>

<h2>Trash collected over time</h2>
<p>In kilogram</p>



{#if isEnabled}
	<canvas id="uniqueCanvasId" width="400" height="200" />
{:else}
	<table >
		<tr>
			<th>{monthNames[0]}</th>
			<td>{laatsteVierMaanden[0].debris_extracted}</td>
		</tr>
		<tr>
			<th>{monthNames[1]}</th>
			<td>{laatsteVierMaanden[1].debris_extracted}</td>
		</tr>
		<tr>
			<th>{monthNames[2]}</th>
			<td>{laatsteVierMaanden[2].debris_extracted}</td>
		</tr>
		<tr>
			<th>{monthNames[3]}</th>
			<td>{laatsteVierMaanden[3].debris_extracted}</td>
		</tr>
	</table>
{/if}

<style>
	:root {
		--darkBlue: #143653;
		--lightBlue: #5cc8de;
		--whiteColor: #ffffff;
		--lightGray: #f7f7f7;
		--accentGray: rgb(228, 228, 228);
		--textColor: #143653;
		--boxShadow: rgba(128, 128, 128, 0.132);
		--color: rgb(212, 212, 212);
		--textSize: 1.2rem;
		--iconSize: 2rem;
	}

	/* Als darkmode de standaard instelling is */
	@media (prefers-color-scheme: dark) {
		:root {
			--darkBlue: #ffffff;
			--lightBlue: #5cc8de;
			--whiteColor: #143653;
			--lightGray: #0d2437;
			--accentGray: rgb(228, 228, 228);
			--textColor: #ffffff;
			--boxShadow: rgba(128, 128, 128, 0);
			--color: rgb(212, 212, 212);
			--textSize: 1.2rem;
			--iconSize: 2rem;
		}
	}
	table{
		color:green;
	}
	/* .js-enabled{
		color:yellow;
	} */
	
</style>
