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
        <h1 class="text-h1">Sycamore Care Strategies</h1>
      </v-col>
    </v-row>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="5">
          <h2 class="text-h2 mb-3">
            Sycamore Care Strategies
          </h2>
          <p class="text-body-1">
            From the moment you step onto the front porch and through our doors, you will notice something different. Our friendly, homelike atmosphere puts you at ease. The cleanliness and beauty of the surroundings and the warm friendly attitudes of our staff assures you that we take pride in our facility.
          </p>
        </v-col>
        <v-col cols="6">
        <v-img
          class="rounded-xl"
          :src="require('@/assets/images/sycamore-sign.jpg')"
        />
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="6">
        <v-img
          class="rounded-xl"
          :src="require('@/assets/images/sycamore-porch.jpg')"
        />
        </v-col>
        <v-col cols="5">
            <h2 class="text-h2 mb-3">We Offer Care and Commitment.</h2>
          <p class="text-body-1">
            You see immediately how much we care about our residents, families, and community. We offer a wide spectrum of services, from specialized skilled care to assistance with minor activities of daily living. Whether you come for short-term rehabilitative care, respite care, adult day care, or choose to make Sycamore Care Strategies your home, you will find the same commitment.
          </p>
          <p class="text-body-1">
            Regardless of your needs, you can be assured that Sycamore Care Strategies is here to provide nurturing care. Our residents enjoy an active life full of activities both independent and group. Many enjoy gathering on the porch to visit with each other.
          </p>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row class="d-flex align-center justify-center">
        <v-spacer/>
        <v-col cols="7">
            <h2 class="text-h2 mb-3">So What's It Like Nearby?</h2>
          <p class="text-body-1">
             Local churches volunteer and hold services at Sycamore Care Strategies for those who find strength in their faith. You will see our bus out and about, as our activity staff assures that our residents are about to attend many community events, from farm shows to museum visits. 
          </p>
        </v-col>
        <v-spacer/>
      </v-row>

      <v-row>
        <v-spacer/>
        <v-col cols="5">
         <v-img
          class="rounded-xl"
          :src="require('@/assets/images/sycamore-lake.jpg')"
        />  
        </v-col>
        <v-spacer/>

        <v-col cols="5">
        <v-img
          class="rounded-xl"
          :src="require('@/assets/images/sycamore-building.jpg')"
        />
        </v-col>
        <v-spacer/>
      </v-row>
    </v-card>

    <Footer>    
      <template #left>
        <v-img
          max-width="200px"
          :src="require('@/assets/images/staff/brandi.png')"
          class="mb-4"
        />
      </template>
    <template #middle>
        <h3 class="text-h3 mb-3">Contact our Building Administrator</h3>
        <h4 class="text-h4 mb-2">Brandi Gladish</h4>
        <EmailLink email="bgladish@thestrategies.net"/>
    </template>
    <template #right>
        <h3 class="text-h3 mb-3">Get in Touch</h3>
          <h4 class="text-h4">12802 East US HWY 50</h4>
          <h4 class="text-h4 mb-3">Loogootee, IN 47553</h4>
          <h4 class="text-h4">(812) 295-2101</h4>
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