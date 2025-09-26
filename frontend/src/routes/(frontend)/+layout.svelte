<script lang="ts">
  import '$lib/styles/app.css';
  import type { MenuItem } from '$lib/types/navigation';
  import Navigation from '$lib/components/frontend/common/Navigation.svelte';
  
  export let data: { menuItems: MenuItem[] };
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<Navigation menuItems={data.menuItems} />

<slot />
