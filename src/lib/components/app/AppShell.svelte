<script>
  /** @type {string} */
  let clazz = "";
  export { clazz as class };
  /** @type {boolean} */
  export let showDrawer = false;
</script>

<div class={`antialiased min-h-screen overflow-x-hidden ${clazz}`}>
  <div
    class="left-0 right-0 top-0 z-50 transition-transform {showDrawer
      ? 'translate-x-64'
      : ''}"
  >
    <slot name="header" />
  </div>

  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform {showDrawer
      ? ''
      : '-translate-x-full'}"
    aria-label="drawer"
    id="drawer"
  >
    <slot name="drawer" />
  </aside>

  <main
    class="flex flex-row justify-center h-full min-h-screen p-4 transition-transform {showDrawer
      ? 'translate-x-64'
      : ''}"
  >
    <slot />
  </main>

  <footer>
    <slot name="footer" />
  </footer>
</div>
