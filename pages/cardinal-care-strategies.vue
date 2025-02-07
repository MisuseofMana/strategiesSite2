<template>
  <div>
     <v-row class="mb-10">
      <v-col
        cols="12"
        align-self="center"
        justify-self="center"
        class="d-flex flex-column align-center text-center"
      >
        <v-img
          class="mb-5"
          max-width="20rem"
          :src="require('@/assets/images/cardinal-logo.png')"
          eager
        />
        <h1 class="text-h1 d-sr-only">Cardinal Care Strategies</h1>
      </v-col>
    </v-row>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col md="5">
          <h2 class="text-h2 mb-3">
            Therapy & Care in Muncie
          </h2>
          <p class="text-body-1">
            From our spacious halls to our outdoor landscape, Cardinal Care Strategies seeks to offer the Muncie community a place they can call home. We offer Therapy, hands-on patient care, medication administration, nutritious meals, and interactive activities.
          </p>
        </v-col>
        <v-col md="6">
        <v-img
          class="rounded-xl"
          :src="require('@/assets/images/cardinal-sign.jpg')"
          eager
        />
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col md="6">
        <v-img
          class="rounded-xl"
          :src="require('@/assets/images/cardinal-courtyard.jpg')"
          eager
        />
        </v-col>
        <v-col md="5">
          <h2 class="text-h2 mb-3">
            In House Therapy
          </h2>
          <p class="text-body-1">
            Our in-house therapy works diligently to enhance and improve quality of life for our residents. Our motto of Hoosiers Helping Hoosiers seeps into our everyday goal of providing our patients with high quality, personalized care.
          </p>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col md="5">
          <h2 class="text-h2 mb-3">
            Outdoor Options
          </h2>
          <p class="text-body-1">
            Whether it is enjoying the outdoors on our furnished patio, enjoying a cup of coffee during social hour, or unwinding in your room, we offer activities to fill the day. Our services include Medicare skilled services, short-term rehabilitation, respite care, hospice care, and long-term care.
          </p>
        </v-col>
        <v-col md="6">
        <v-img
          class="rounded-xl"    
          :src="require('@/assets/images/cardinal-pond.jpg')"
          eager
        />
        </v-col>
      </v-row>
    </v-card>

     <Footer>    
      <template #left>
        <h3 class="text-h3 mb-3">Contact Us</h3>
        <h4 class="text-h4 mb-3">(765) 282-1416</h4>
        <!-- <EmailLink email="jkleva@thestrategies.net"/> -->
      </template>
      <template #right>
          <h3 class="text-h3 mb-3">Visit Us</h3>
          <h4 class="text-h4">4600 East Jackson St,</h4>
          <h4 class="text-h4 mb-3">Indianapolis, IN 46241</h4>
      </template>
    </Footer>

  </div>
</template>

<script>
import Footer from '@/components/atoms/Footer.vue'

export default {
    components: {
        Footer,
    }
}
</script>