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
          :src="require('@/assets/images/brookside-logo.png')"
          eager
        />
        <h1 class="text-h1 d-sr-only">Brookside Care Strategies</h1>
      </v-col>
    </v-row>
        <CardWithSlot center left-cols="6" right-cols="6">
          <template #left>
             <h2 class="text-h2 mb-3">
            A Familiar Place To Call Home
          </h2>
          <p class="text-body-1">
            Brookside Care Strategies provides long-term residential care to individuals with intellectual disabilities, traumatic brain injuries and physical disabilities. Located in Muncie, Indiana, our 42-bed building, with recent remodeling and conversion to online electrical charting, lives by the mission “to enrich the lives of loved ones by providing a caring, compassionate, and safe home environment” for our residents. 
            </p>
          </template>
          <template #right>
            <v-img
          class="rounded-xl"
          :src="require('@/assets/images/brookside-sign.jpg')"
          eager
        />
          </template>
        </CardWithSlot>
        
        <CardWithSlot center left-cols="6" right-cols="6">
          <template #left>
               <v-img
          class="rounded-xl"
          :src="require('@/assets/images/brookside-stone.jpg')"
          eager
        />
         
          </template>
          <template #right>
            <h2 class="text-h2 mb-3">
            Tailored Care For All Patients
          </h2>
          <p class="text-body-1">
            We offer individualized care and seek to address the intricacies of our patients’ specific needs.  Our in-house therapy team works tirelessly to provide rehabilitation to enhance the quality of life for our residents. Brookside Care Strategies prides itself in providing their residents with a place they can call home. 
            </p>
          </template>
        </CardWithSlot>
        
        <CardWithSlot left-cols="7" right-cols="5">
          <template #left>
            <h2 class="text-h2 mb-5">Services</h2>
          <ul class="mb-7 text-body-1">
            <li>Comprehensive Care for Clinically Complex Residents</li>
            <li>Well-Round Clinical Assessments</li>
            <li>Psychiatric Management</li>
            <li>Individualized Care Plans</li>
            <li>Nutritional Management</li>
            <li>Social and Recreational Activities</li>
            <li>
              Onsite Physical and Occupational Therapy provided by Rehab
              Strategies
            </li>
            <li>Onsite Physician Services</li>
            <li>Vision, Dental, Audiology, & Podiatry Services</li>
            <li>Hospice Care</li>
            <li>Hair Dressing Services</li>
          </ul>
          </template>
          <template #right>
            <h2 class="text-h2 mb-5">Technology</h2>
          <ul class="mb-7 text-body-1">
            <li>PointClickCare – Documentation Software</li>
            <li>PayCor -Payroll Monitoring Software</li>
            <li>
              Payroll Based Journal Reporting – Quarterly Reports generated and
              provided to the facility.
            </li>
          </ul>
          </template>
        </CardWithSlot>

    <Footer>    
      <template #left>
        <h3 class="text-h3">Contact Us</h3>
        <h4 class="text-h4">(765) 289-1915</h4>
      </template>
      <template #right>
          <h3 class="text-h3">Visit Us</h3>
          <h4 class="text-h4">505 N. Gavin St</h4>
          <h4 class="text-h4">Muncie, IN 47303</h4>
      </template>
    </Footer>
  </div>
</template>

<script>
import Footer from '@/components/atoms/Footer.vue'
import CardWithSlot from '@/components/atoms/CardWithSlot.vue'


export default {
  components: {
    Footer,
    CardWithSlot
  },
}
</script>