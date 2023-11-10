<script lang="ts">
	import '../app.css';
	import TailwindIndicator from '$lib/components/TailwindIndicator.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { dev } from '$app/environment';
</script>

<Navbar />
<slot />
{#if dev}
	<TailwindIndicator />
{/if}
