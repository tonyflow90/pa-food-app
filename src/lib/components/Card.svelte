<script>
  /** @type {string} */
  let clazz = "";
  export { clazz as class };
</script>

<div class={`border-2 rounded-md ${clazz}`}>
  <slot />
</div>
