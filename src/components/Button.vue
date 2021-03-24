<template>
  <a :href="link" :class="[color, fontWeight, background, position]" class="btn">{{ value }}</a>
</template>

<script>
export default {
  props: {
    link: String,
    value: String,
    color: String,
    fontWeight: String,
    background: String,
    position: String
  }
}
</script>

<style>
  .btn {
    @apply block py-2 text-center rounded-sm mt-10;
    min-width: 260px;
    max-width: min-content;
  }
</style>