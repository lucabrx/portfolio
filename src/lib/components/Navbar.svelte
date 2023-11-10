<script lang="ts">
	import { cn } from '$lib/utils';
	import { navigations } from '$lib/config/navbar';
	import Button from '$lib/components/ui/button/Button.svelte';
	let isOpen = false;

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<header
	class={cn(
		'fixed left-0 top-0 z-20 w-full',
		isOpen
			? 'bg-background'
			: 'border-b border-transparent-white bg-transparent backdrop-blur-[12px]'
	)}
>
	<div class="container flex items-center justify-between py-2">
		<div class="flex items-center justify-center gap-4">
			<button
				aria-label="Sending user to the top of the page"
				class="flex items-center"
				on:click={scrollToTop}
			>
				<img src="/logo.svg" alt="logo" class="aspect-square h-10 w-10" />
			</button>
			<nav class="hidden md:flex">
				{#each navigations as { name, section, offset }}
					<button
						aria-label={`Link to ${name}`}
						class="ml-3 text-md transition-colors hover:text-grey"
					>
						{name}
					</button>
				{/each}
			</nav>
		</div>

		<div class="flex items-center justify-center gap-2">
			<Button size="md" aria-label={'Link to contact section'} class="hidden md:block">
				Contact me
			</Button>
		</div>
	</div>
</header>
