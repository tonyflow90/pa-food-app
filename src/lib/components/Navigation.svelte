<script>
  /** @type {string} */
  let clazz = "";
  export { clazz as class };
</script>

<nav class={`flex items-baseline ${clazz}`}>
  <slot />
</nav>
