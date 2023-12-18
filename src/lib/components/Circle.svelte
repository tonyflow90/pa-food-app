<script>
  import { menu } from "$lib/db/data";

  /** @type {string} */
  let clazz = "";
  export { clazz as class };

  let width = 0;
  let height = 0;
</script>

<ul
  class={`circle w-64 h-64 rounded-full ${clazz}`}
  bind:clientWidth={width}
  bind:clientHeight={height}
  style="--height:{height}px;--width:{width}px"
>
  {#each menu as f, i}
    <li class="circle-item btn btn-circle text-accent" style="--i:{i};--items:{menu.length}">
      <svelte:component this={f.icon} class="circle-item" />
    </li>
  {/each}
</ul>

<style>
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-item {
    position: absolute;
    list-style: none;
    transform: rotate(calc(360deg / var(--items) * var(--i))) translate(calc(var(--width)*.40));
  }
</style>
