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
        <h1 class="text-h1">Poplar Care Strategies</h1>
      </v-col>
    </v-row>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="5">
          <h2 class="text-h2">
            Long and Short Term Care
          </h2>
          <p class="text-body-1">
            Poplar Care Strategies lives by the motto of “nourishing hearts and flourishing lives.” We offer a large range of amenities such as private and semi-private rooms, Long-Term Care, Respite Care, Short-Term Care, Hospice Care, Rehabilitation, and Outpatient therapy services. 
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
          :src="require('@/assets/images/poplar-building.jpg')"
        />
        </v-col>
        <v-col cols="5">
          <h2 class="text-h2 mb-3">
            Support For Specific Needs
          </h2>
          <p class="text-body-1">
            Individuals will receive a personalized plan for treatment designed to meet their specific needs. Our team focuses on patient appropriate goals for success and offering a pleasant environment to live.          
          </p>
        </v-col>
      </v-row>
    </v-card>

     <Footer>    
      <template #left>
        <v-img
          max-width="200px"
          :src="require('@/assets/images/staff/susan.png')"
          class="mb-4"
        />
      </template>
      <template #middle>
        <h3 class="text-h3 mb-3">Contact our Building Administrator</h3>
        <h4 class="text-h4 mb-2">Susan Sluder</h4>
        <EmailLink email="ssluder@thestrategies.net"/>
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