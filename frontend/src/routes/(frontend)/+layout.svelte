<script lang="ts">
  import '$lib/styles/app.css';
  import Navigation from '$lib/components/frontend/common/Navigation.svelte';
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<Navigation />

<slot />
