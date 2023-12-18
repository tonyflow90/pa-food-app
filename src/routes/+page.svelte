<script>
  import Card from "$lib/components/Card.svelte";
  import Globe from "$lib/components/Globe.svelte";
  import Page from "$lib/components/app/Page.svelte";
  import { onMount } from "svelte";

  import { fruits } from "$lib/db/data";

  onMount(() => {});
  let w, h;
</script>

<Page class="items-center">
  <h1 class="text-2xl pt-6 pb-6">Welcome to SvelteKit</h1>

  <div class="flex" bind:clientWidth={w} bind:clientHeight={h}>
    <div class="grid grid-cols-2 gap-14 w-64 h-64 md:w-96 md:h-96 p-2">
      <div class="bg-red-500">01</div>
      <div class="bg-blue-500 text-end">02</div>
      <div class="bg-green-500">03</div>
      <div class="bg-yellow-500">04</div>
    </div>
    <div
      class="grid absolute w-64 h-64 md:w-96 md:h-96 place-items-center justify-items-center"
    >
      <Globe width={w * 0.66} height={h * 0.66}></Globe>
    </div>
  </div>

  <div
    class="grid grid-cols-3 gap-1 w-64 md:w-96"
  >
    {#each fruits as f, i}
      <Card class={`flex flex-row items-center justify-center h-24 md:h-32`}>
        <svelte:component this={f.icon} class="w-12 h-12 text-gray-500" />
        <i data-lucide={f.icon}></i>
      </Card>
    {/each}
  </div>
</Page>

<style>
</style>
