<template>
  <div>
    <PageHeading logo="rehab.jpg" tagline="A Trustworthy, Reliable Provider of Therapy Services Since 2007" altText="Rehab Strategies Logo"/>
    
    <CardWithSlot leftCols="7" rightCols="5">
      <template #left>
        <HeadingAndTextBlock heading="What is Rehab Strategies and what can we do for you?" uniqueId="rehab" :paragraphs="rehab.intro"/>
      </template>
      <template #right>
        <div class="d-flex flex-column justify-center align-center">
          <h2 class="text-h2 mb-3">The Three Therapies</h2>
          <p class="text-body-1s">Click a therapy below for more info.</p>
          <v-btn
            color="primary"
            class="white--text mb-5"
            @click="physicalOverlay = !physicalOverlay"
          >
            Physical Therapy
          </v-btn>

          <v-overlay
            class="d-flex align-center justify-center"
            :value="physicalOverlay"
            absolute
            @click="physicalOverlay = !physicalOverlay"
          >
            <v-card
              color="white black--text"
              width="500"
              height="300"
              class="pa-10"
            >
              <h3 class="text-h3">Physical Therapy</h3>
              <p class="text-body-1">
                : therapy for the preservation, enhancement, or restoration of
                movement and physical function impaired or threatened by
                disease, injury, or disability that utilizes therapeutic
                exercise, physical modalities (such as massage and
                electrotherapy), assistive devices, and patient education and
                training — called also physiotherapy
              </p>
            </v-card>
          </v-overlay>

          <v-btn
            color="primary"
            class="white--text mb-5"
            @click="occupationalOverlay = !occupationalOverlay"
          >
            Occupational Therapy
          </v-btn>

          <v-overlay
            class="d-flex align-center justify-center"
            :value="occupationalOverlay"
            absolute
            @click="occupationalOverlay = !occupationalOverlay"
          >
            <v-card
              color="white black--text"
              width="500"
              height="300"
              class="pa-10"
            >
              <h3 class="text-h3">Occupational Therapy</h3>
              <p class="text-body-1">
                : therapy based on engagement in meaningful activities of daily
                life (such as self-care skills, education, work, or social
                interaction) especially to enable or encourage participation in
                such activities despite impairments or limitations in physical
                or mental functioning
              </p>
            </v-card>
          </v-overlay>

          <v-btn
            color="primary"
            class="white--text mb-10"
            @click="speechOverlay = !speechOverlay"
          >
            Speech Therapy
          </v-btn>

          <v-overlay
            class="d-flex align-center justify-center"
            :value="speechOverlay"
            absolute
            @click="speechOverlay = !speechOverlay"
          >
            <v-card
              color="white black--text"
              width="500"
              height="300"
              class="pa-10"
            >
              <h3 class="text-h3">Speech Therapy</h3>
              <p class="text-body-1">
                : therapeutic treatment of impairments and disorders of speech,
                voice, language, communication, and swallowing
              </p>
            </v-card>
          </v-overlay>

          <div
            class="d-flex flex-column align-center justify-center text-center"
          >
            <h2 class="text-h2 mb-5">Download our Wellness Strategy PDF</h2>
            <a href="/wellnessProgram.pdf" download>
              <v-btn color="primary" class="white--text mb-5">
                Download Our Wellness PDF
              </v-btn>
            </a>
          </div>
        </div>
      </template>
    </CardWithSlot>

    <CardWithSlot leftCols="6" rightCols="6">
      <template #left>
      <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZkaiy4_YNZGOCkMfpX6gbKtI6MygBkozwLKvrJZ2bWSGskA/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      </template>
      <template #right>
        <BulletedList headingOne="Work for Rehab Strategies" headingTwo="We offer:" :listItems="rehab.offerList"/>
      </template>
    </CardWithSlot>

    <CardWithSlot leftCols="6" rightCols="6">
      <template #headingh>
        <h2 class="text-2 mb-5">Partner with Rehab Strategies</h2>
        <p class="text-body-1">
          Want to learn more? Email us now via info@rehabstrategies.net or
          call our toll free line: 1(877)60-REHAB. We have a unique pay
          structure that gives the therapist autonomy and makes them an active
          partner in their own productivity.
        </p>
      </template>
      <template #left>
        <h2 class="text-h2 mb-5">Accountability and Performance</h2>
          <ul class="text-body-1">
            <li>
              Higher Standards – Highly ethical clinical practice so you can
              rest easy.
            </li>
            <li>
              Oversite – Onsite Management provided by experienced Directors of
              Rehab.
            </li>
            <li>
              Results – Improved Clinical Outcomes, Guaranteed Profit, Revenue
              Enhancement in addition to new lines of service.
            </li>
            <li>Medicare Part B Provider</li>
          </ul>

          <h2 class="text-h2 mb-5 mt-8">Consultation Services</h2>
          <p class="text-body-1">
            Rehab Strategies offers up a comprehensive consultation service
            package for facilities that wish to setup and run their own Rehab
            department. We provide guidance thru the following phases:
          </p>
          <ul class="text-body-1">
            <li>Management Systems and Tools</li>
            <li>Efficient Staffing Models</li>
            <li>Philosophy/Culture Training</li>
            <li>Delivery of Care Training</li>
          </ul>
      </template>
      <template #right>
        <h2 class="text-h2 mb-5">Technology</h2>
          <ul class="text-body-1">
            <li>CASAMBA - Therapy Software – Practice Management Software</li>
            <li>
              OnusOne – Web Based, Shared-Risk Employee Compensation Program
            </li>
            <li>
              Equipment – Access to Therapy Equipment provided by
              <nuxt-link to="/innovative-treatment-strategies">
                Innovative Treatment Strategies (ITS)
              </nuxt-link>
            </li>
            <li>
              Payroll Based Journal Reporting – Quarterly Reports generated and
              provided to the facility.
            </li>
          </ul>

           <h2 class="text-h2 mb-5 mt-8">Clinical Programs</h2>
          <ul class="text-body-1">
            <li>Rock Steady</li>
            <li>The Climb</li>
            <li>Wellness Direction</li>
          </ul>
      </template>
    </CardWithSlot>

    <v-card class="pa-10 mb-10">
      <v-row>
        <v-col>
          <h2>Rehab Strategies FAQ</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="6">
          <ul class="text-body-1">
            <li>
              <strong> What is Rehab Strategies? </strong>
              <ul>
                <li>
                  Rehab Strategies is a rehabilitation contract management and
                  consulting company.
                </li>
              </ul>
            </li>
            <li>
              <strong> What can we do for you? </strong>
              <ul>
                <li>
                  We will work hand-in-hand with your organization on how best
                  to construct your therapy department. If management or
                  consulting is what your facility needs, Rehab Strategies can
                  also provide expertise in those areas.
                </li>
              </ul>
            </li>
            <li>
              <strong> When should I call Rehab Strategies? </strong>
              <ul>
                <li>
                  If your facility is struggling with lower census and losing
                  patients to home health or other facilities.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Why should we use Rehab Strategies contract therapy versus an
                in-house program?
              </strong>
              <ul>
                <li>
                  Rehab Strategies will guarantee your facility a profit. We
                  will free up your internal resources by assuming the
                  recruiting, hiring, training, scheduling and oversite of your
                  therapy team.
                </li>
              </ul>
            </li>

            <li>
              <strong>
                What specific services will Rehab Strategies provide?
              </strong>
              <ul>
                <li>
                  Physical, Occupational and Speech therapists with specialties
                  in lymphedema, dementia, and balance disorders. We also
                  provide reporting of clinical outcomes, financial performance
                  and discharge statistics.
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
        <v-col md="6">
          <ul>
            <li>
              <strong>
                Will Rehab Strategies address our facility’s unique needs?
              </strong>
              <ul>
                <li>
                  Rehab Strategies is a boutique provider that will tailor your
                  program for your unique environment. Our model isn’t just for
                  long term care facilities; it can be tailored to fit the needs
                  of hospitals, outpatient centers, skilled nursing facilities,
                  assisted and independent living centers.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                How can Rehab Strategies engage our long-term residents?
              </strong>
              <ul>
                <li>
                  Our therapists will utilize a combination of high tech
                  equipment, wellness programming, and restorative programming
                  to achieve the highest level of functioning for your
                  residents. Patients become familiar with the consistency of
                  our therapists and love to be a part of the therapy family
                  while they work to recover strength and health.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                How will our residents benefit from your Wellness Program?
              </strong>
              <ul>
                <li>
                  Residents can participate in one-on-one personal training as
                  well as group classes. Our program includes Thai Chi, Pilates
                  and yoga as well as a wide variety of aerobic classes, and our
                  certified athletic trainers specialize in Parkinson’s classes
                  like The Climb, Rock Steady Boxing, Lee Silverman Voice
                  Training and the Loud Program.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                How can we contact Rehab Strategies for more information?
              </strong>
              <ul>
                <li>
                  Call 877-60-Rehab or email
                  <a href="mailto: info@rehabstrategies.net"
                    >info@rehabstrategies.net</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-card>

    <Footer>    
      <template #left>
        <h2 class="text-h2 mb-5">Call Us</h2>
        <p class="text-body-1">Phone: (317) 887-1600</p>
        <p class="text-body-1">Toll Free: 1 (877) 60-REHAB</p>
      </template>
      <template #middle>
        <h2 class="text-h2 mb-5">Email Us</h2>
        <p class="text-body-1">
        <a color="primary" href="mailto: info@rehabstrategies.net">info@rehabstrategies.net</a>
       </p>
      </template>
    </Footer>
  </div>
</template>

<script>
import {rehab} from './rehab-strategies.data'

import PageHeading from '@/components/atoms/PageHeading.vue'
import CardWithSlot from '@/components/atoms/CardWithSlot.vue'
import HeadingAndTextBlock from '@/components/atoms/HeadingAndTextBlock.vue'
import BulletedList from '@/components/atoms/BulletedList.vue'
import Footer from '@/components/atoms/Footer.vue'


export default {
  name: "RehabStrategies",
  components: {
    PageHeading,
    CardWithSlot,
    HeadingAndTextBlock,
    BulletedList,
    Footer
  },
  data() {
    return {
      rehab,
      physicalOverlay: false,
      occupationalOverlay: false,
      speechOverlay: false,
    }
  },
}
</script>