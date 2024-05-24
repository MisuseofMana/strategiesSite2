<template>
  <div>
    <HomePageCard :contents="strategies"/>
    <HomePageCard :contents="careStrategies"/>
    <HomePageCard :contents="rehabStrategies"/>
    <HomePageCard :contents="staffingStrategies"/>
    <HomePageCard halfSizeLogo :contents="itStrategies"/>

    <Footer>
      <template #left>
        <h2 class="text-h2 mb-5">Contact Us</h2>
        <p class="text-body-1">(317) 887-1600</p>
        <p class="text-body-1">1-877-60-REHAB</p>
        <EmailLink email="info@thestrategies.net"/>
      </template>
    </Footer>
  </div>
</template>

<script>
import { strategies, rehabStrategies, staffingStrategies, careStrategies, itStrategies } from './index.data.js'
import HomePageCard from '@/components/atoms/HomePageCard.vue'
import EmailLink from '@/components/atoms/EmailLink.vue'
import Footer from '@/components/atoms/Footer.vue'

export default {
  name: 'Homepage',
  components: {
    HomePageCard,
    EmailLink,
    Footer
  },
  data() {
    return {
      strategies,
      rehabStrategies,
      staffingStrategies,
      careStrategies,
      itStrategies
    }
  },
}
</script>