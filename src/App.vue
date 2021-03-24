<template>
  <div id='app'>
    <HeaderBlock 
      title= 'Créez et développez votre business grâce à PrestaShop'
      description= 'Lancez dès maintenant votre boutique en ligne. À chaque besoin sa solution.'
      source='src/assets/images/header.png'
    />    
    <Heading2
      title='Découvrez PrestaShop'
      color='text-black'
      position='center'
    />
    <p class="text-gray-500 mb-20 text-center">PrestaShop est une solution complète, innovante et efficace vous permettant de créer votre boutique en ligne et de développer votre business.</p>
    <div class="grid md:grid-cols-4 gap-10 container">
      <IconBlock
        source= 'src/assets/images/icon1.svg'
        alt= 'Customisez votre boutique'
        title= 'Customisez votre boutique'
        description= 'Choisissez vos couleurs, votre logo ainsi qu’un design parmi une sélection de thèmes professionnels.'
      />
      <IconBlock
        source= 'src/assets/images/icon2.svg'
        alt= 'Pilotez votre business'
        title= 'Pilotez votre business'
        description= 'Gérez vos produits, vos commandes, la relation clients et suivez vos statistiques grâce à nos fonctionnalités..'
      />
      <IconBlock
        source= 'src/assets/images/icon3.svg'
        alt= 'Attirez des visiteurs'
        title= 'Attirez des visiteurs'
        description= 'Partagez votre contenu sur les réseaux sociaux et sur votre blog et attirez plus de visiteurs.'
      />
      <IconBlock
        source= 'src/assets/images/icon3.svg'
        alt= 'Vendez à l’international'
        title= 'Vendez à l’international'
        description= "Proposez facilement votre boutique en différentes langues et devises : votre activité n'a pas de frontières !"
      />
    </div>
    <div class="bg-secondary py-16 mt-12">
      <div class="container">
        <Heading2
          title="Rejoignez nos 300 000 marchands"
          color="text-white"
          position="center"
        />
        <div class="grid md:grid-cols-3 gap-4 mt-10">
          <CardMerchantsPerson
            description= "PrestaShop is a handy, modular tool that allows us to continue to develop our omnichannel strategy"
            source= "src/assets/images/wassila_moussaoui.png"
            name= "Wassila Moussaoui"
            job= "Digital Marketing and Communication Director, Pylones"
          />
          <CardMerchantsImage
            source= "src/assets/images/huygens.png"
            alt= 'Huygens'
          />
          <CardMerchantsPerson
            description= "Thanks to PrestaShop software, we were able to create a multilingual and multi-currency e-commerce site at a very reasonable total cost."
            source= "src/assets/images/jean-michel-awad.png"
            name= "Jean Michel Awad"
            job= "Chief Operating Officer, Bobbies"
          />
          <CardMerchantsImage
            source= "src/assets/images/pylones.png"
            alt= 'Huygens'
          />
          <CardMerchantsPerson
            description= "PrestaShop is a reliable software that has enabled us to constantly evolve our site over the last 6 years, all while allowing us to work independently, thanks to an intuitive back office."
            source= "src/assets/images/daan-sins.png"
            name= "Daan Sins"
            job= "Co-founder, Huygens"
          />
          <CardMerchantsImage
            source= "src/assets/images/bobbies.png"
            alt= 'Huygens'
          />
        </div>
        <p class="text-white text-center text-2xl mt-9">Our loyal customers</p>
        <div class="flex justify-around mt-10 overflow-scroll">
          <Customers
            href= "https://www.prestashop.com"
            source= "src/assets/images/kway.svg"
            name= "Kway"
          />
          <Customers
            href= "https://www.prestashop.com"
            source= "src/assets/images/carrefour.png"
            name= "Carrefour"
          />
          <Customers
            href= "https://www.prestashop.com"
            source= "src/assets/images/lcdf.svg"
            name= "Lcdf"
          />
          <Customers
            href= "https://www.prestashop.com"
            source= "src/assets/images/veja.svg"
            name= "Veja"
          />
        </div>
        <Button
          link= 'www.google.com'
          value= 'Voir plus'
          color= 'text-secondary'
          fontWeight= 'font-semibold'
          background= 'bg-white'
          position= 'mx-auto'
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconBlock from './components/IconBlock.vue'
import HeaderBlock from './components/HeaderBlock.vue'
import Heading2 from './components/Heading2.vue'
import CardMerchantsPerson from './components/CardMerchantsPerson.vue'
import CardMerchantsImage from './components/CardMerchantsImage.vue'
import Customers from './components/Customers.vue'
import Button from './components/Button.vue'

import './assets/css/style.css'

export default {
  el: '#app',
  components: {
    IconBlock,
    HeaderBlock,
    Heading2,
    CardMerchantsPerson,
    CardMerchantsImage,
    Customers,
    Button
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>

</style>