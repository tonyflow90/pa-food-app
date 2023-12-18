<script>
  /** @type {string} */
  let clazz = '';
  export { clazz as class };
</script>

<header class={`flex px-4 py-2.5 ${clazz}`}>
  <div class="flex flex-none">
    <slot name="start" />
  </div>
  <div class="flex-1">
    <slot />
  </div>
  <div class="flex-none">
    <slot name="end" />
  </div>
</header>
