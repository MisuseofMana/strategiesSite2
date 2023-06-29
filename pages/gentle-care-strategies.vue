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
          :src="require('@/assets/images/gentle-logo.png')"
          eager
        />
        <h1 class="text-h1">GentleCare Strategies</h1>
      </v-col>
    </v-row>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col md="5">
          <p class="text-body-1 mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <h2 class="text-h2">
            Five Star Care, Friendly Smiles
          </h2>
          <p class="text-body-1">
             Our interactive care stems from our desire to offer unique 5-Star service to our community and their specific health needs. We believe that each one of our customers deserve commitment to an individualized program of care.
          </p>
        </v-col>
        <v-col md="6">
        <v-img
          class="rounded-xl"
          :src="require('@/assets/images/gentlecare-sign.jpg')"
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
          :src="require('@/assets/images/gentlecare-building.jpg')"
          eager
        />
        </v-col>
        <v-col md="5">
          <h2 class="text-h2 mb-3">
            Support From Specialists
          </h2>
          <p class="text-body-1">
            GentleCare brings together a multidisciplinary team of doctors, nurses, rehabilitation specialists and support professionals to provide the quality care that is needed. We invite you to discover the care and amenities that make GentleCare an ideal place to recuperate or call home.
          </p>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col md="5">
          <h2 class="text-h2 mb-3">
           Clean and Consistent Care
          </h2>
          <p class="text-body-1">
           When you walk into our building, our clean halls are accompanied by friendly smiles and caring staff. GentleCare of Vincennes offers a variety of care options, including Medicare skilled services, short-term rehabilitation, respite care, hospice care, and long-term care.
          </p>
        </v-col>
        <v-col md="6">
        <v-img
          class="rounded-xl"
          :src="require('@/assets/images/gentlecare-inside.jpg')"
          eager
        />
        </v-col>
      </v-row>
    </v-card>

     <Footer>    
      <template #left>
        <v-img
          :src="require('@/assets/images/staff/stacy.png')"
          class="mb-4 mr-5 rounded"
          eager
        />
      </template>
      <template #middle>
        <h3 class="text-h3 mb-3">Contact our Administrator</h3>
        <h4 class="text-h4">Stacy Blue</h4>
        <h4 class="text-h4 mb-3">(812) 882-8292</h4>
        <EmailLink email="sblue@gentlecarecs.net"/>
      </template>
      <template #right>
          <h3 class="text-h3 mb-3">Visit Us</h3>
          <h4 class="text-h4">1202 S 16th St</h4>
          <h4 class="text-h4 mb-3">Vincennes, IN 47591</h4>
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