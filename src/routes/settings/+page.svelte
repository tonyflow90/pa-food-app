<script>
  import Page from "$lib/components/app/Page.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    currentTheme = getTheme();
    if (!("theme" in localStorage))
      document.documentElement.setAttribute("data-theme", currentTheme);
  });

  let currentTheme = undefined;
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const getTheme = () => {
    if ("theme" in localStorage) {
      return localStorage.theme;
    } else if (
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  };

  const changeTheme = (event) => {
    let theme = event.target.value;
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.theme = theme;
    }
  };
</script>

<Page>
  <h1>Settings</h1>

  <h2>Themes</h2>

  {#each themes as t}
    <div class="form-control">
      <label class="label cursor-pointer gap-4">
        <span class="label-text">{t}</span>
        <input
          type="radio"
          name="theme-radios"
          class="radio theme-controller"
          value={t}
          checked={t === currentTheme}
          on:click={changeTheme}
        />
      </label>
    </div>
  {/each}
</Page>
