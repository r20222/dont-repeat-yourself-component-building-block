<script>
	import Trashgraph from '/src/components/trashGraph.svelte';
	export let data;
</script>

<svelte:head>
	<title>Dashboard The Ocean Cleanup</title>
</svelte:head>

<section class="main">
		<!-- Grafiek: share swith icons -->
		<section class="panel grafiek">
			<Trashgraph {data} />
		</section>
</section>
  



	






<style>
	/* Roboto font */
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

	/* Proxima font */
	@font-face {
		font-family: 'Proxima';
		src: url('/ProximaNovaFont.otf') format('opentype') weight('normal');
		src: url('/Proxima-Nova-Bold.otf') format('opentype') weight('bold');
	}

	/* Base */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Proxima', sans-serif;
	}

    :root {
    --darkBlue: #143653;
    --trashRemovedBackground: white;
    --lightBlue: #5CC8DE;
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
        --trashRemovedBackground: #143653;
        --lightBlue: #5CC8DE;
        --whiteColor: #143653;
        --lightGray: #0D2437;
        --accentGray: rgb(228, 228, 228);
        --textColor: #ffffff;
        --boxShadow: rgba(128, 128, 128, 0.0);
        --color: rgb(212, 212, 212);
        --textSize: 1.2rem;
        --iconSize: 2rem;
        } 
  }

    :global(html) {
    /* font-size: 62.5%; */
    scroll-behavior: smooth;
    }

	:global(body) {
		background-color: var(--lightGray);
		color: var(--textColor);
		position: relative;
	}




    .panel {
    border-radius: .5rem;
    padding: 1.5rem;
    background-color: var(--whiteColor);
    box-shadow: var(--boxShadow) 0px 0px 8px;
    transition: .2s;
    }





    /* Breakpoints large screen */
    @media (min-width:1200px) {
		.panel {
			padding: 2rem;
		}
	}
</style>
