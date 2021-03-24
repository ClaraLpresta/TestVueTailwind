<template>
  <div class="text-center">
    <img :src="source" :alt="alt" class="icon-svg">
    <h3 class="h3">{{ title }}</h3>
    <p class="text-gray-500">{{ description }}</p>
  </div>
</template>

<script>
  export default {
    props : {
      source: String,
      alt: String,
      title: String,
      description: String
    }
  }
</script>

<style>
  .icon-svg {
    @apply w-6/12 m-auto;
  }
</style>