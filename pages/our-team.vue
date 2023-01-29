<template>
  <div>
    <v-row class="mb-10">
      <v-col
        cols="12"
        align-self="center"
        justify-self="center"
        class="d-flex flex-column align-center"
      >
        <h1 class="text-h1">Meet Our Team</h1>
      </v-col>
    </v-row>

    <StaffCard
      v-for="(item, index) in team"
      :key="`info-card-${index}`"
      :image="item.image"
      :who="item.name"
      :rank="item.rank"
      :paragraphs="item.paragraphs"
      :mock="item.mock"
    />
  </div>
</template>

<script>
import { team } from './our-team.data.js'
import StaffCard from '@/components/atoms/StaffCard.vue'
export default {
  components: {
    StaffCard,
  },
  data() {
    return {
      team
    }
  },
}
</script>