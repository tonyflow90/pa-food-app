<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  import "../app.css";
  import AppShell from "$lib/components/app/AppShell.svelte";
  import Header from "$lib/components/app/Header.svelte";
  import Drawer from "$lib/components/app/Drawer.svelte";
  import Logo from "$lib/components/logo/Logo.svelte";

  import {
    HomeIcon,
    InfoIcon,
    Menu,
    Settings,
    User,
  } from "lucide-svelte";
  import Navigation from "$lib/components/Navigation.svelte";

  import { routes } from "$lib/routes";

  /** @type {import('./$types').LayoutData} */
  export let data;

  /** @type {boolean} */
  let showDrawer = false;
</script>

<AppShell class="bg-gray-300" {showDrawer}>
  <svelte:fragment slot="header">
    <Header class="bg-red-300">
      <svelte:fragment slot="start">
        <button
          class="hover:bg-gray-700 hover:text-white p-2 mr-2 rounded-lg cursor-pointer md:hidden"
          on:click={() => (showDrawer = !showDrawer)}
        >
          <Menu />
          <span class="sr-only">Toggle sidebar</span>
        </button>

        <Logo size={'.5in'}></Logo>
      </svelte:fragment>
      <Navigation class="hidden md:flex space-x-3">
        {#each routes as { name, href }}
          <a
            {href}
            class={`hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
              href === $page.url.pathname ? "bg-gray-900 text-white" : ""
            }`}
            aria-current="page">{name}</a
          >
        {/each}
      </Navigation>
      <svelte:fragment slot="end">
        <div class="flex-row hidden md:flex">
          <a
            href={`${base}/profile`}
            class="flex self-end hover:bg-gray-700 hover:text-white p-2 mr-2 rounded-lg cursor-pointer"
          >
            <User></User>
          </a>
          <a
            href={`${base}/settings`}
            class="flex self-end hover:bg-gray-700 hover:text-white p-2 mr-2 rounded-lg cursor-pointer"
          >
            <Settings></Settings>
          </a>
        </div>
      </svelte:fragment>
    </Header>
  </svelte:fragment>
  <svelte:fragment slot="drawer">
    <Drawer class="bg-yellow-300">
      <Navigation class="flex flex-col">
        {#each routes as { name, href }}
          <a
            {href}
            class={`min-w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
              href === $page.url.pathname ? "bg-gray-900 text-white" : ""
            }`}
            aria-current="page">{name}</a
          >
        {/each}
      </Navigation>
      <svelte:fragment slot="bottom">
        <nav class="flex w-full">
          <div class="flex flex-none">
            <a
              href={`${base}/about`}
              class="flex self-start hover:bg-gray-700 hover:text-white p-2 mr-2 rounded-lg cursor-pointer"
            >
              <InfoIcon></InfoIcon>
            </a>
          </div>
          <div class="flex-1"></div>
          <div class="flex flex-row flex-none">
            <a
              href={`${base}/profile`}
              class="flex self-end hover:bg-gray-700 hover:text-white p-2 mr-2 rounded-lg cursor-pointer"
            >
              <User></User>
            </a>
            <a
              href={`${base}/settings`}
              class="flex self-end hover:bg-gray-700 hover:text-white p-2 mr-2 rounded-lg cursor-pointer"
            >
              <Settings></Settings>
            </a>
          </div>
        </nav>
      </svelte:fragment>
    </Drawer>
  </svelte:fragment>
  <slot />
  <svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
