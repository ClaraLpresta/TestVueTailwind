<template>
  <div class="mt-8 mb-20 grid md:grid-cols-2 items-center container">
    <div>
      <h1 class="h1">{{ title }}</h1>
      <p class="text-2xl leading-10">{{ description }}</p>

      <Button
        link= 'www.google.com'
        value= 'Créer ma boutique'
        color= 'text-white'
        fontWeight= 'font-semibold'
        background= 'bg-primary'
        position= 'margin-auto'
      />
    </div>
    <div class="place-self-end">
      <img :src="source" :alt="alt" />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  props: {
    title: String,
    description: String,
    source: String,
    alt: String
  },
  components: {
    Button
  }
}
</script>

<style>

</style>