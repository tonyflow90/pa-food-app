<script>
  /** @type {string} */
  let clazz = "";
  export { clazz as class };
</script>

<div class={`flex flex-col h-full px-4 py-2.5 ${clazz}`}>
  <div class="flex flex-none">
    <slot name="top" />
  </div>
  <div class="flex-1">
    <slot />
  </div>
  <div class="flex-none">
    <slot name="bottom" />
  </div>
</div>
