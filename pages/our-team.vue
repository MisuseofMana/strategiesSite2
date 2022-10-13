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
    <StaffCard image="ron.png" who="Ron Cram, PT" rank="CEO @ The Strategies" :paragraphs="ron"/>
    <StaffCard image="jamey.png" who="Jamey Kleva, Administrator" rank="@ Brookside Care Strategies" :paragraphs="jamey"/>
    <StaffCard image="jeff.png" who="Jeff Huffman, Chief Development Officer" rank="@ Care Strategies, Staffing Strategies, and Rehab Strategies" :paragraphs="jeff"/>
    <StaffCard image="lisa.png" who="Lisa Weartz, SHRM-CP" rank="Human Resources Director @ Care Strategies, Staffing Strategies, and Rehab Strategies" :paragraphs="lisa" badge/>
    <StaffCard image="cathy.png" who="Cathy Young, H.F.A." rank="Healthcare Facility Administrator @ Care Strategies" :paragraphs="cathy"/>
    <StaffCard image="lauren.png" who="Lauren Cram, Staffing Coordinator" rank="@ Care Strategies, Staffing Strategies" :paragraphs="lauren"/>
    
    <StaffCard mock image="stacy.png" who="Stacy Blue, Building Admin" rank="@ GentleCare Strategies" :paragraphs="lauren"/>
    <StaffCard mock image="brandi.png" who="Brandi Gladish, Building Admin" rank="@ Sycamore Care Strategies" :paragraphs="lauren"/>
    <StaffCard mock image="derrek.png" who="Derrek Keith, Administrator" rank="@ Cardinal Care Strategies" :paragraphs="lauren"/>
    <StaffCard mock image="tori.png" who="Tori Reed, CPA/HR" rank="@ The Strategies" :paragraphs="lauren"/>
    <StaffCard mock image="angie.png" who="Angie Bridges, Corporate Billing Specialist" rank="@ The Strategies" :paragraphs="lauren"/>
  </div>
</template>

<script>
import {ron, jamey, jeff, lisa, cathy, lauren, } from './our-team.data.js'
import StaffCard from '@/components/atoms/StaffCard.vue'
  export default {
    components: {
      StaffCard
    },
    data() {
      return {
        ron,
        jamey,
        jeff,
        lisa,
        cathy,
        lauren,
      }
    }
  }
</script>