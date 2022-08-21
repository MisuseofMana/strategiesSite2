<template>
  <div>
    <v-row class="mb-10">
      <v-col
        cols="12"
        align-self="center"
        justify-self="center"
        class="d-flex flex-column align-center"
      >
        <v-img max-width="50%" :src="require('@/assets/images/rehab.jpg')" />
        <h1 class="text-h1">
          A Trustworthy, Reliable Provider of Therapy Services Since 2007
        </h1>
      </v-col>
    </v-row>

    <v-card class="pa-10 mb-10">
      <v-row>
        <v-col cols="8">
          <h2 class="text-h2 mb-3">
            What is Rehab Strategies and what can we do for you?
          </h2>
          <p class="text-body-1">
            After working for similar rehabilitation companies, Ron Cram and
            Jamey Kleva launched Rehab Strategies in 2006. Because Ron and Jamey
            are therapists themselves with over 50 years of combined clinical
            experience in the rehabilitation industry, they will work
            hand-in-hand with your company on how best to construct the therapy
            department. If management or consulting is what your facility needs,
            Rehab Strategies can also provide expertise in those areas.
          </p>
          <p class="text-body-1">
            Rehab Strategies will alleviate stress by internalizing decisions
            and solving problems for any provider housing a rehab department.
            Ron and Jamey will work in conjunction with the facility to build
            therapy teams that are highly motivated, efficient and produce
            cost-effective outcomes. Their model isn’t just for long term care
            facilities; it can be tailored to fit the needs of hospitals,
            outpatient centers, skilled nursing facilities, assisted and
            independent living centers.
          </p>
          <p class="text-body-1">
            Is your facility struggling with census and losing patients to home
            health? Do your patients need a spark to get them on the road to
            recovery?
          </p>
          <p class="text-body-1">
            Rehab Strategies can help with these troubling statistics. We will
            provide your facility with a full-time physical, occupational and
            speech staff who will work on site daily. The staff will engage the
            residents by creating a cohesive therapy department that provides
            exemplary patient care. Patients become familiar with the therapists
            and love to be a part of the therapy family while they work to
            recover strength and health. Many residents enjoy the personal
            attention and comradery so much that they continue with their
            therapy services through private pay.
          </p>
          <h2 class="text-h2 mb-3 mt-10">A Partnership Built Upon Trust</h2>
          <p class="text-body-1">
            One of the newest services Rehab Strategies provides is a Wellness
            Program for seniors focusing on health and wellbeing. Residents can
            participate in Thai chi, Pilates and yoga as well as a wide variety
            of aerobic classes, and our certified athletic trainers specialize
            in Parkinson’s classes like The Climb, Rock Steady Boxing, Lee
            Silverman Voice Training and the Loud Program.
          </p>
          <p class="text-body-1">
            But, the number one reason to choose to work with Rehab Strategies
            is that they will guarantee all facilities a profit on
            rehabilitation therapy services.
          </p>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-center">
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
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-img :src="require('@/assets/images/placeholder.jpg')" />
        </v-col>
        <v-spacer />
        <v-col cols="5">
          <h2 class="text-h2 mb-5">Work for Rehab Strategies</h2>
          <h3 class="text-h3 mb-4">We offer:</h3>

          <ul class="mb-10 text-body-1">
            <li>Clinical Freedom</li>
            <li>Professional Growth</li>
            <li>Annual CEU Allotment</li>
            <li>Generous PTO Accrual</li>
            <li>Medical, Dental, Vision, Life and Disability Insurance</li>
          </ul>

          <v-btn to="/rehab-form" class="white--text" color="primary">
            Apply To Rehab Strategies Online
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h2 class="text-h2 mb-5">Partner with Rehab Strategies</h2>
          <p class="text-body-1">
            Want to learn more? Email us now via info@rehabstrategies.net or
            call our toll free line: 1(877)60-REHAB. We have a unique pay
            structure that gives the therapist autonomy and makes them an active
            partner in their own productivity.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
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
        </v-col>
        <v-col cols="6">
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
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <h2 class="text-h2 mb-5">Consultation Services</h2>
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
        </v-col>
        <v-col cols="6">
          <h2 class="text-h2 mb-5">Clinical Programs</h2>
          <ul class="text-body-1">
            <li>Rock Steady</li>
            <li>The Climb</li>
            <li>Wellness Direction</li>
          </ul>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-10 mb-10">
      <v-row>
        <v-col cols="12">
          <h2>Rehab Strategies FAQ</h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <ul class="mb-10 text-body-1">
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
        <v-col cols="6">
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

    <v-card elevation="0" class="pa-10 mb-10" color="rgb(250,250,250)">
    <v-row>
      <v-col cols="4">
       <h2 class="text-h2 mb-5">Call Us</h2>
       <p class="text-body-1">Phone: (317) 887-1600</p>
       <p class="text-body-1">Toll Free: 1 (877) 60-REHAB</p>
      </v-col>
      <v-col cols="4">
       <h2 class="text-h2 mb-5">Email Us</h2>
        <p class="text-body-1">
        <a color="primary" href="mailto: info@rehabstrategies.net">info@rehabstrategies.net</a>
       </p>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      physicalOverlay: false,
      occupationalOverlay: false,
      speechOverlay: false,
    }
  },
}
</script>