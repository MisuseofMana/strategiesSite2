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
        <h1 class="text-h1">Brookside Care Strategies</h1>
      </v-col>
    </v-row>
        <CardWithSlot center leftCols="6" rightCols="6">
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
        
        <CardWithSlot center leftCols="6" rightCols="6">
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
       
        <CardWithSlot leftCols="7" rightCols="5">
          <template #left>
             <h2 class="text-h2 mb-5">Employment Opportunities</h2>
          <p class="text-body-1 mb-7">
            Brookside Care Strategies hires well-qualified, energetic staff
            members with a passion for long-term care. As staff members, you
            will be expected to dedicate your talents to the health and
            well-being of the residents we serve and the long-term, overall
            success of the facility.
          </p>
          <h3 class="text-h3 mb-4">We Hire:</h3>
          <ul class="mb-7">
            <li>Nursing (RN's, CNA's, LPN's, QMA's)</li>
            <li>Dietary</li>
            <li>Housekeeping/Laundry</li>
            <li>Maintenance</li>
            <li>Social Services/Recreational Activities</li>
          </ul>
          </template>
          <template #right>
             <div class="d-flex flex-column align-center justify-center">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfl_q9D_AM_kgs7u-yl5RkeEL-yqrZQbEAQT9aqDz-6qw2y5A/viewform?embedded=true" width="100%" :height="iframeSize" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>
          </template>
        </CardWithSlot>
        
        <CardWithSlot leftCols="7" rightCols="5">
          <template #left>
            <h2 class="text-h2 mb-5">Services</h2>
          <ul class="mb-7">
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
          <ul class="mb-7">
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
      <h4 class="text-h4">Phone: (765) 289-1915</h4>
      <h4 class="text-h4 mb-3">Toll Free: 1 (877) 60-REHAB</h4>
      <h4 class="text-h5">Derrek Keith</h4>
      <EmailLink email="dkeith@brooksidecs.net"/>
    </template>
    <template #middle>
        <h3 class="text-h3">Find Us</h3>
        <h4 class="text-h4">505 N. Gavin St</h4>
        <h4 class="text-h4">Muncie, IN 47303</h4>
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
  computed: {
    iframeSize() {
      return this.$vuetify.breakpoint.mobile ? '800px' : '600px'
    }
  }
}
</script>