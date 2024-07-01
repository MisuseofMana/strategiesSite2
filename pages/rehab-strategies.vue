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
          :src="require('@/assets/images/rehab-logo.png')"
          eager
        />
        <h1 class="text-h1 d-sr-only">Rehab Strategies</h1>
      </v-col>
    </v-row>
    
    <CardWithSlot left-cols="7" right-cols="5">
      <template #left>
        <HeadingAndTextBlock heading="What Is Rehab Strategies?" unique-id="rehab" :paragraphs="rehab.intro"/>
      </template>
      <template #right>
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
      </template>
    </CardWithSlot>

    <CardWithSlot left-cols="6" right-cols="6">
      <template #left>
          <iframe width="100%" :height="iframeSize" src="https://docs.google.com/forms/d/e/1FAIpQLSdZkaiy4_YNZGOCkMfpX6gbKtI6MygBkozwLKvrJZ2bWSGskA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </template>
      <template #right>
        <BulletedList heading-one="Work for Rehab Strategies" heading-two="We offer:" :list-items="rehab.offerList"/>
        <h2 class="text-h2">Partner with Rehab Strategies</h2>
        <p class="text-body-1">Want to learn more? Email us now:
        </p>
        <h3 class="text-h3 mb-3">
          <a color="primary" href="mailto: ZCram@RehabStrategies.net">ZCram@RehabStrategies.net</a>
        </h3>
          <p>
 or call our line </p>
          <h3 class="text-h3 mt-n2 mb-3">(317) 412-6059</h3>
  <p>
  We have a unique pay structure that gives the therapist autonomy and makes them an active partner in their own productivity.
  </p>
      </template>
    </CardWithSlot>
    
    <CardWithSlot left-cols="12">
      <template #left>
        <HeadingAndTextBlock heading="What Can Rehab Strategies Do For You?" unique-id="what do" :paragraphs="rehab.spiel"/>
      </template>
    </CardWithSlot>

    <CardWithSlot left-cols="6" right-cols="6">
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
            <li>NetHealth - Therapy Software – Practice Management Software
</li>
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
                  If your facility is struggling with lower census and losing patients to home health or other facilities. If your facility does not feel like the therapy department is providing the highest quality of patient care. If your patients are not achieving maximal outcomes.
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
                  recruiting, hiring, training, scheduling and oversight of your
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
                  well as group classes. Our program includes Tai Chi, Pilates
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
                  Call Zach Cram at (317) 412-6059 or email at <a color="primary" href="mailto: ZCram@RehabStrategies.net">ZCram@RehabStrategies.net</a>
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-card>

    <Footer>    
      <template #left>
          <v-img
            :src="require('@/assets/images/staff/zach.png')"
            class="mb-4 mr-5 rounded"
            eager
          />
      </template>
      <template #middle>
        <h3 class="text-h3 mb-3">Contact</h3>
        <h4 class="text-h4">Zach Cram, DPT</h4>
        <h4 class="text-h4 mb-3">(317)412-6059</h4>
        <EmailLink email="zcram@rehabstrategies.net"/>
      </template>
    </Footer>
  </div>
</template>

<script>
import {rehab} from './rehab-strategies.data'

import CardWithSlot from '@/components/atoms/CardWithSlot.vue'
import HeadingAndTextBlock from '@/components/atoms/HeadingAndTextBlock.vue'
import BulletedList from '@/components/atoms/BulletedList.vue'
import Footer from '@/components/atoms/Footer.vue'
import EmailLink from '@/components/atoms/EmailLink.vue'

export default {
  name: "RehabStrategies",
  components: {
    CardWithSlot,
    HeadingAndTextBlock,
    BulletedList,
    Footer,
    EmailLink,
  },
  data() {
    return {
      rehab,
      physicalOverlay: false,
      occupationalOverlay: false,
      speechOverlay: false,
      frameHeight: '',
    }
  },
  computed: {
    iframeSize() {
      return this.$vuetify.breakpoint.mobile ? '800px' : '600px'
    }
  }
}
</script>