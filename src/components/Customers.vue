<template>
  <a :href="href" class="cutomer">
    <img :src="source" :alt="name" class="m-auto">
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    name: String,
    source: String
  }
}
</script>

<style>
  .cutomer {
    min-width: 300px;
  }
</style>