<template>
  <div class="bg-white rounded-md">
    <img class="rounded-md" :src="source" :alt="alt">
  </div>
</template>

<script>
export default {
  props: {
    source: String,
    alt: String
  }
}
</script>

<style>

</style>