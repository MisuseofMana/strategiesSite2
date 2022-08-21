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
          :src="require('@/assets/images/care.png')"
        />
        <h1 class="text-h1">Welcome Home to Brookside Care Strategies</h1>
      </v-col>
    </v-row>

    <v-card class="pa-10 mb-10">
      <v-row>
        <v-col cols="7">
          <h2 class="text-h2 mb-3">
            Brookside Care Strategies - A Familiar Place to Call Home
          </h2>
          <p class="text-body-1">
            Do you need a facility for a loved one in Muncie, Indiana? Care
            Strategies can help
          </p>
          <p class="text-body-1">
            In 2018, the entrepreneurial pair of Ron Cram and Jamey Kleva
            achieved their longstanding dream of owning and operating a facility
            that provides long-term residential care to individuals with
            intellectual disabilities, traumatic brain injuries and physical
            disabilities. They had the opportunity to enter the marketplace with
            the advent of Care Strategies by purchasing a small facility in
            Muncie, Indiana: Brookside Care Strategies. With that purchase, Ron
            and Jamey were able to incorporate all their services, completing
            their vision by providing therapy, staffing and the latest
            technology in one location.
          </p>
          <p class="text-body-1">
            Patient satisfaction and quality health care is at the forefront of
            any Strategies undertaking and this has never been more evident than
            at Brookside Care. After owning this 42 bed building in Muncie for
            just under two years, the owners of Care Strategies have worked
            diligently to remodel the physical facility and convert all patient
            charting to electronic records. Brookside Care Strategies lives by
            their mission “to enrich the lives of loved ones by providing a
            caring, compassionate and safe home environment” for our residents.
          </p>
          <p class="text-body-1">
            Our therapy team has worked tirelessly to provide rehabilitation at
            Brookside, and this added service enhances the quality of life for
            our residents.
          </p>
          <p class="text-body-1">
            Brookside Care Strategies in Muncie prides itself in providing their
            residents with a place they can call home.
          </p>
        </v-col>
        <v-col cols="5">
          <h2 class="text-h2 mb-3">Our Mission</h2>
          <p class="text-body-1">
            The Brookside Care Strategies Mission is to enrich the lives of
            loved ones by providing a caring, compassionate, and safe home
            environment.
          </p>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row>
        <v-col cols="5">
          <v-img :src="require('@/assets/images/placeholder.jpg')" />
        </v-col>
        <v-spacer />
        <v-col cols="6">
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
          <v-btn to="/care-form" class="white--text" color="primary">
            Apply To Work For Care Strategies
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row>
        <v-col cols="6">
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
        </v-col>
        <v-col cols="6">
          <h2 class="text-h2 mb-5">Technology</h2>
          <ul class="mb-7">
            <li>PointClickCare – Documentation Software</li>
            <li>PayCor -Payroll Monitoring Software</li>
            <li>
              Payroll Based Journal Reporting – Quarterly Reports generated and
              provided to the facility.
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-card>

    <v-card elevation="0" class="pa-10 mb-10" color="rgb(250,250,250)">
      <v-row>
        <v-col cols="4">
          <h2 class="text-h2 mb-5">Find Us</h2>
          <p>505 N. Gavin St</p>
          <p>Muncie, IN 47303</p>
        </v-col>
        <v-col cols="4">
          <h2 class="text-h2 mb-5">Contact Us</h2>
          <p class="text-body-1">Phone: (765) 289-1915</p>
          <p class="text-body-1">Toll Free: 1 (877) 60-REHAB</p>
          <a
            class="text-body-1"
            color="primary"
            href="mailto: info@brooksidecs.net"
            >info@brooksidecs.net</a
          >
        </v-col>
       
        <v-spacer />
      </v-row>
    </v-card>
  </div>
</template>