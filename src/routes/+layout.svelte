<script>
  import { page } from "$app/stores";
  import { afterNavigate } from "$app/navigation";
  import { base } from "$app/paths";

  import "../app.css";
  import AppShell from "$lib/components/app/AppShell.svelte";
  import Header from "$lib/components/app/Header.svelte";
  import Drawer from "$lib/components/app/Drawer.svelte";
  import Navigation from "$lib/components/Navigation.svelte";

  import { InfoIcon, Menu, Settings, User, XIcon } from "lucide-svelte";

  import { routes } from "$lib/routes";

  /** @type {import('./$types').LayoutData} */
  export let data;

  /** @type {function} */
  afterNavigate(() => {
    showDrawer = false;
  });

  /** @type {boolean} */
  let showDrawer = false;
</script>

<AppShell class="bg-base" {showDrawer}>
  <svelte:fragment slot="header">
    <Header class="navbar text-primary-content">
      <svelte:fragment slot="start">
        <label class="btn btn-circle text-accent md:hidden swap swap-rotate">
          <input type="checkbox" on:click={() => (showDrawer = !showDrawer)} />
          <Menu class="swap-off fill-current" />
          <XIcon class="swap-on fill-current" />
        </label>

        <a href="{base}/" class="btn btn-ghost text-xl text-accent">FOOD App</a>
      </svelte:fragment>
      <Navigation class="hidden md:flex justify-center">
        <ul class="menu menu-horizontal px-4 space-x-2">
          {#each routes as { name, href }}
            <li>
              <a
                {href}
                class={`text-md font-medium ${
                  href === $page.url.pathname
                    ? "bg-accent text-accent-content"
                    : "text-base-content"
                }`}
                aria-current="page">{name}</a
              >
            </li>
          {/each}
        </ul></Navigation
      >
      <svelte:fragment slot="end">
        <div class="flex-row hidden space-x-2 md:flex">
          <a
            href={`${base}/profile`}
            class={`btn btn-circle ${
              `${base}/profile` === $page.url.pathname
                ? "bg-accent text-accent-content"
                : "text-accent"
            }`}
          >
            <User></User>
          </a>
          <a
            href={`${base}/settings`}
            class={`btn btn-circle ${
              `${base}/settings` === $page.url.pathname
                ? "bg-accent text-accent-content"
                : "text-accent"
            }`}
          >
            <Settings></Settings>
          </a>
        </div>
      </svelte:fragment>
    </Header>
  </svelte:fragment>
  <svelte:fragment slot="drawer">
    <Drawer class="bg-base-300">
      <Navigation class="flex flex-col space-y-2">
        {#each routes as { name, href }}
          <a
            {href}
            class={`min-w-full rounded-md px-3 py-2 text-sm font-medium ${
              href === $page.url.pathname ? "bg-accent text-accent-content" : ""
            }`}
            aria-current="page">{name}</a
          >
        {/each}
      </Navigation>
      <svelte:fragment slot="bottom">
        <nav class="flex w-full">
          <div class="flex flex-none">
            <a href={`${base}/about/`} class="btn btn-circle text-accent">
              <InfoIcon></InfoIcon>
            </a>
          </div>
          <div class="flex-1"></div>
          <div class="flex flex-row flex-none text-accent">
            <a href={`${base}/profile/`} class="btn btn-circle text-accent">
              <User></User>
            </a>
            <a href={`${base}/settings/`} class="btn btn-circle text-accent">
              <Settings></Settings>
            </a>
          </div>
        </nav>
      </svelte:fragment>
    </Drawer>
  </svelte:fragment>
  <slot />
  <svelte:fragment slot="footer">
    <footer class="footer p-10 bg-base-200 text-base-content">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="fill-current"
          ><path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
          ></path></svg
        >
        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
      </aside>
      <nav>
        <header class="footer-title">Services</header>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header class="footer-title">Company</header>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header class="footer-title">Legal</header>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  </svelte:fragment>
</AppShell>
