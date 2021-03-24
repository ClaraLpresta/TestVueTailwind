<template>
  <div class="card_merchants_person">
    <p class="text-gray-500">"{{ description }}"</p>
    <div class="flex items-center space-x-4 s">
      <img :src="source" :alt="name">
      <div>
        <p class="font-semibold">{{ name }}</p>
        <p class="text-sm">{{ job }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    source: String,
    name: String,
    job: String 
  }
}
</script>

<style>
  .card_merchants_person {
    @apply bg-white p-6 rounded-md flex justify-between flex-col;
  }
  .card_merchants_person img {
    height: 60px;
  }
</style>