<template>
  <div>
     <v-row class="mb-10">
      <v-col
        cols="12"
        align-self="center"
        justify-self="center"
        class="d-flex flex-column align-center"
      >
        <v-img
          class="mb-5"
          max-width="50%"
          :src="require('@/assets/images/temp.jpg')"
        />
        <h1 class="text-h1">Cardinal Care Strategies</h1>
      </v-col>
    </v-row>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="5">
          <h2 class="text-h2">
            Therapy and Care in Muncie
          </h2>
          <p class="text-body-1">
            From our spacious halls to our outdoor landscape, Cardinal Care Strategies seeks to offer the Muncie community a place they can call home. We offer Therapy, hands-on patient care, medication administration, nutritious meals, and interactive activities.
          </p>
        </v-col>
        <v-col cols="6">
        <v-img
          class="rounded-xl"
          :src="require('@/assets/images/poplar-entrance.jpg')"
        />
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="6">
        <v-img
          class="rounded-xl"
          :src="require('@/assets/images/temp-photo.jpg')"
        />
        </v-col>
        <v-col cols="5">
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
        <v-col cols="5">
          <h2 class="text-h2 mb-3">
            Outdoor Options
          </h2>
          <p class="text-body-1">
            Whether it is enjoying the outdoors on our furnished patio, enjoying a cup of coffee during social hour, or unwinding in your room, we offer activities to fill the day. Our services include Medicare skilled services, short-term rehabilitation, respite care, hospice care, and long-term care.
          </p>
        </v-col>
        <v-col cols="6">
        <v-img
          class="rounded-xl"    
          :src="require('@/assets/images/temp-photo.jpg')"
        />
        </v-col>
      </v-row>
    </v-card>

     <Footer>    
      <template #left>
        <v-img
          max-width="200px"
          :src="require('@/assets/images/staff/derrek.png')"
          class="mb-4"
        />
      </template>
      <template #middle>
        <h3 class="text-h3 mb-3">Contact our Building Administrator</h3>
        <h4 class="text-h4 mb-2">Derrek Keith</h4>
        <EmailLink mock email="I NEED DERREK'S EMAIL"/>
      </template>
      <template #right>
          <h3 class="text-h3 mb-3">Visit Us</h3>
          <h4 class="text-h4">313 Poplar St,</h4>
          <h4 class="text-h4 mb-3">Loogootee, IN 47553</h4>
          <h4 class="text-h4">(812) 295-4433</h4>
      </template>
    </Footer>

  </div>
</template>

<script>
import Footer from '@/components/atoms/Footer.vue'
import EmailLink from '@/components/atoms/EmailLink.vue'

export default {
    components: {
        Footer,
        EmailLink
    }
}
</script>