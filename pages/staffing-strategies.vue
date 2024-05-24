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
          :src="require('@/assets/images/staffing-logo.png')"
          eager
        />
        <h1 class="text-h1 d-none">Staffing Strategies</h1>
      </v-col>
    </v-row>

    <CardWithSlot leftCols="5" rightCols="7">
      <template #left>
        <HeadingAndTextBlock
          heading="What is Staffing Strategies and what can we do for you?"
          :paragraphs="staffing.info"
        />
      </template>
      <template #right>
        <v-row class="d-flex align-center">

          <v-col>
            <v-img
              max-width="200px"
              :src="require('@/assets/images/staff/darian.png')"
              class="mb-4"
              eager
            />
          </v-col>
          <v-spacer/>
          <v-col cols="12" md="8">
            <h2 class="text-h2 mb-3">We hire, we work, we share our staff.</h2>
            <p class="text-body-1">
              Email our Staffing Coordinator, Darian Cram.
            </p>
            <a href="mailto: dcram@staffingstrategies.net">
              <v-btn class="mb-7" color="primary"> Click Here To Email Darian </v-btn>
            </a>
          </v-col>
        </v-row>

        <v-img
          :src="require('@/assets/images/staff.jpg')"
          class="mb-6 rounded-xl"
          eager
        />

        <BulletedList
          paragraph="Our partners contact us when they need to supplement staff. We develop close relationships with our client partners and tailor our services to their immediate needs. Consider us your staffing RESCUE SQUAD – we are here when you need us - for as little as two hours up to 13-week assignments. In addition to providing additional staff we provide RELIEF and peace of mind. As a Staffing Strategies client partner, you will have access to dependable, professional, and fully vetted staff. All nursing and therapy staff are subjected to the following:"
          :listItems="staffing.heroList"
        />
      </template>
    </CardWithSlot>

    <FaqCard heading="Staffing Strategies FAQ" :listItems="staffing.faq" />

    <Footer>
      <template #left>
        <v-img
          max-width="200px"
          :src="require('@/assets/images/staff/darian.png')"
          class="mb-4"
          eager
        />
      </template>
      <template #right>
        <h3 class="text-h3 mb-3">Contact our Staffing Coordinator</h3>
        <h4 class="text-h4 mb-2">Darian Cram</h4>
        <a href="mailto: dcram@staffingstrategies.net"
          >dcram@staffingstrategies.net</a
        >
        <p class="text-body-1 mb-4">(317) 383-7979</p>
      </template>
    </Footer>
  </div>
</template>

<script>
import { staffing } from './staffing-strategies.data.js'
import CardWithSlot from '@/components/atoms/CardWithSlot.vue'
import HeadingAndTextBlock from '@/components/atoms/HeadingAndTextBlock.vue'
import BulletedList from '@/components/atoms/BulletedList.vue'
import FaqCard from '@/components/atoms/FaqCard.vue'
import Footer from '@/components/atoms/Footer.vue'

export default {
  components: {
    CardWithSlot,
    HeadingAndTextBlock,
    BulletedList,
    FaqCard,
    Footer,
  },
  data() {
    return {
      staffing,
    }
  },
}
</script>
