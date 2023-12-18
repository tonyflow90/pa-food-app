<script>
  import Card from "$lib/components/Card.svelte";
  import Page from "$lib/components/app/Page.svelte";
  import { onMount } from "svelte";

  import { fruits } from "$lib/db/data";

  import ThreeCanvas from "$lib/components/threejs/ThreeCanvas.svelte";
  import { earth } from "$lib/components/threejs/objects/earth";
  import Circle from "$lib/components/Circle.svelte";

  onMount(() => {});
  let w, h;
</script>

<Page class="items-center">
  <div class="flex" bind:clientWidth={w} bind:clientHeight={h}>
    <div
      class={`absolute w-64 h-64 md:w-96 md:h-96 place-items-center justify-items-center rounded-full bg-base-300`}
    ></div>
    <div
      class="grid absolute w-64 h-64 md:w-96 md:h-96 place-items-center justify-items-center"
    >
      <ThreeCanvas width={w * 0.58} height={h * 0.58} objects={[earth]}
      ></ThreeCanvas>
    </div>
    <Circle
      class="w-64 h-64 md:w-96 md:h-96 place-items-center justify-items-center"
    ></Circle>
  </div>

  <div role="tablist" class="tabs tabs-boxed">
    <a role="tab" class="tab">Tab 1</a>
    <a role="tab" class="tab tab-active">Tab 2</a>
    <a role="tab" class="tab">Tab 3</a>
  </div>

  <div class="grid grid-rows-3 gap-4 w-64 md:w-96">
    {#each fruits as f, i}
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Total Page Views</div>
          <div class="stat-value">89,400</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex flex-col justify-center w-64 md:w-96 py-2 gap-2">
    {#each fruits as f, i}
      <h3>{f.name}</h3>
      <progress class="progress progress-primary" value={f.percent} max="100"
      ></progress>
    {/each}
  </div>
</Page>
