<script>
  import Card from "$lib/components/Card.svelte";
  import Page from "$lib/components/app/Page.svelte";
  import { onMount } from "svelte";

  import { fruits } from "$lib/db/data";

  import ThreeCanvas from "$lib/components/threejs/ThreeCanvas.svelte";
  import { earth } from "$lib/components/threejs/objects/earth";

  onMount(() => {});
  let w, h;
</script>

<Page class="items-center">
  <div class="hero h-full">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Welcome to SvelteKit</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</Page>
