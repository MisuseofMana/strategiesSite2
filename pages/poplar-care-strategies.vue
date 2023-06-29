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
          :src="require('@/assets/images/poplar-logo.png')"
          eager
        />
        <h1 class="text-h1">Poplar Care Strategies</h1>
      </v-col>
    </v-row>


    <CardWithSlot center leftCols="6" rightCols="6">
      <template #left>
        <h2 class="text-h2">Long and Short Term Care</h2>
          <p class="text-body-1">
            Poplar Care Strategies lives by the motto of “nourishing hearts and
            flourishing lives.” We offer a large range of amenities such as
            private and semi-private rooms, Long-Term Care, Respite Care,
            Short-Term Care, Hospice Care, Rehabilitation, and Outpatient
            therapy services.
          </p>
      </template>
      <template #right>
        <v-img
            class="rounded-xl"
            :src="require('@/assets/images/poplar-entrance.jpg')"
            eager
          />
      </template>
    </CardWithSlot>

    <CardWithSlot center leftCols="6" rightCols="6">
      <template #left>
        <v-img
            class="rounded-xl"
            :src="require('@/assets/images/poplar-building.jpg')"
            eager
          />
      </template>
      <template #right>
        <h2 class="text-h2 mb-3">Support For Specific Needs</h2>
          <p class="text-body-1">
            Individuals will receive a personalized plan for treatment designed
            to meet their specific needs. Our team focuses on patient
            appropriate goals for success and offering a pleasant environment to
            live.
          </p>
      </template>
    </CardWithSlot>

    <Footer>
    <template #left>
          <v-img
            :src="require('@/assets/images/staff/susan.png')"
            class="mb-4 mr-5 rounded"
            eager
          />
      </template>
      <template #middle>
          <h3 class="text-h3 mb-3">Contact our Administrator</h3>
            <h4 class="text-h4">Susan Sluder</h4>
            <h4 class="text-h4 mb-3">(812) 295-4433</h4>
            <EmailLink email="ssluder@thestrategies.net"/>
      </template>
      <template #right>
        <h3 class="text-h3 mb-3">Visit Us</h3>
        <h4 class="text-h4">313 Poplar St,</h4>
        <h4 class="text-h4 mb-3">Loogootee, IN 47553</h4>
      </template>
    </Footer>
  </div>
</template>

<script>
import Footer from '@/components/atoms/Footer.vue'
import EmailLink from '@/components/atoms/EmailLink.vue'
import CardWithSlot from '@/components/atoms/CardWithSlot.vue'

export default {
  components: {
    Footer,
    EmailLink,
    CardWithSlot
  },
}
</script>

<style scoped>
.rounded {
  border-radius: 9999px !important;
  height: 10rem;
  width: 10rem;
}
</style>