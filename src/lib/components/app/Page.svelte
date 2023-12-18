<script>
  /** @type {string} */
  let clazz = "";
  export { clazz as class };
</script>

<div class={`flex flex-col w-full md:max-w-xl lg:max-w-4xl ${clazz}`}>
  <slot />
</div>
