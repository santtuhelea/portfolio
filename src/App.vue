<template>
  <v-app dark>
    <nav-bar />
    <v-content class="bg-svg" :style="isMobile == true ? 'padding: 0 0 0 256px' : ''">
      <v-container fluid>
        <section class="container container--fluid" id="Landing">
          <v-row
            justify="end"
            align="end"
            style="height: 100vh;"
            :class="isMobile == true ? 'py-12 px-2' : 'py-6 px-2'"
          >
            <div>
              <div
                :class="
                  isMobile == true
                    ? 'display-3 white--text text-uppercase text-right'
                    : 'display-1 white--text text-uppercase text-right'
                "
              >
                Santtu Heleä
              </div>
              <h1
                :class="
                  isMobile == true
                    ? 'display-4 primary--text text-uppercase'
                    : 'display-2 primary--text text-uppercase text-right'
                "
              >
                Full-stack developer
              </h1>
            </div>
          </v-row>
        </section>
        <section class="container container--fluid" id="About">
          <v-row>
            <v-col cols="12" class="pb-0">
              <h1 :class="h1Style">
                About Me
              </h1>
            </v-col>
            <v-col cols="12" md="8" class="pt-0">
              <p class="white--text font-weight-regular title">
                My name is Santtu and I am a full-stack developer with 3 years of experience, living in Hämeenlinna,
                Finland. Currently I work in a development team of Triplan Oy. Triplan Oy is a company that specialises
                in case, information and document management solutions.
              </p>
              <!-- <p class="white--text font-weight-regular title">
                The stack I use depends on the project I am working on but generally it is in the lines of Java backend
                (Spring Boot or plain Java) with MSSQL and frontend of Vue + Vuetify / Javascript / Vaadin.
              </p> -->
              <p class="white--text font-weight-regular title">
                I thrive to learn new tech, so often off-hours, I find educating myself about the web development and
                everything around it. When I am not sitting in front of a computer I like to workout and play floorball.
                And when it is not freezing out here, disc golfing is pretty damn fun and amazing.
              </p>
            </v-col>
            <v-col :class="isMobile ? 'px-0 ml-12' : 'px-0'" cols="12" md="3">
              <v-list dark>
                <v-list-item class="py-0 my-0" v-for="(info, i) in listInfo" :key="i">
                  <v-list-item-icon class="mr-2">
                    <v-icon color="primary" large v-text="info.icon" />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-regular title wordWrap" v-text="info.text" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </section>
        <section class="container container--fluid" id="Experience">
          <v-row>
            <v-col cols="12" class="pb-3">
              <h1 :class="h1Style">
                Where I've Been
              </h1>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-timeline dark :dense="!isMobile">
                <v-timeline-item v-for="(jobs, j) in jobsArray" :key="j" color="primary" large>
                  <template v-slot:opposite>
                    <span class="white--text" v-text="jobs.date" />
                  </template>
                  <v-card class="elevation-2" color="grey darken-4">
                    <v-card-title class="headline" v-text="jobs.role" />
                    <v-card-subtitle v-text="jobs.employer" class="primary--text title font-weight-medium pt-1" />
                    <v-card-text v-text="jobs.description" class="white--text title font-weight-regular pt-1 pb-1" />
                    <v-card-text
                      v-text="jobs.description2"
                      v-if="jobs.description2 != null"
                      class="white--text title font-weight-regular pt-1 pb-1"
                    />
                    <v-card-text v-text="jobs.date" class="white--text title pt-2" />
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </section>
        <section class="container container--fluid pb-12" id="SkillsAndEdu">
          <v-row>
            <v-col cols="12" class="pb-3">
              <h1 :class="h1Style">
                What I Know
              </h1>
            </v-col>
          </v-row>
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="pb-0">
                <div class="display-1 primary--text pb-2">Skills</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="px-0" md="6">
                <skills :skillSetName="`Frontend`" :skills="skills.frontend" />
              </v-col>
              <v-col cols="12" class="px-0" md="6">
                <skills :skillSetName="`Backend`" :skills="skills.backend" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="px-0" md="6">
                <skills :skillSetName="`Other`" :skills="skills.other" />
              </v-col>
              <v-col cols="12" class="px-0" md="6">
                <skills :skillSetName="`Soft skills`" :skills="skills.softskills" />
              </v-col>
            </v-row>
          </v-container>
          <v-row>
            <v-col cols="12">
              <div class="display-1 primary--text pl-3">Education</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="(edu, e) in education" :key="e" cols="12" md="6">
              <v-card class="my-4 pl-0" max-width="500" flat dark>
                <v-card-title v-text="edu.title" class="headline wordWrap" />
                <v-card-subtitle v-if="edu.subtitle != null" v-text="edu.subtitle" class="py-1 title primary--text" />
                <v-card-subtitle v-text="edu.institute" class="py-1 title white--text" />
                <v-card-subtitle v-text="edu.period" class="py-1 headline pb-2" />
              </v-card>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import Skills from './components/Skills'
export default {
  name: 'App',

  components: {
    'nav-bar': NavBar,
    skills: Skills,
  },

  data() {
    return {
      listInfo: [
        { icon: 'mdi-account', text: 'Santtu Heleä' },
        { icon: 'mdi-city', text: 'Hämeenlinna, Finland' },
        { icon: 'mdi-email', text: 'santtu.helea@gmail.com' },
        { icon: 'mdi-phone', text: '+358 40 760 1099' },
      ],
      jobsArray: [
        {
          date: '2017 - Present',
          employer: 'Triplan Oy',
          role: 'Developer',
          description:
            'Developing and maintaining software that makes our customers daily tasks easier and more efficient. ',
          description2:
            'Providing solutions to different integrations whether it is data to be converted to our system or vice versa ',
        },
        {
          date: '2015 - 2017',
          employer: 'S-Group, ABC-Tiiriö',
          role: 'Shop assistant',
          description: 'Responsible for serving customers, processing sales transaction and restocking shelves.',
        },
        {
          date: '2014 - 2014',
          employer: 'K-Supermarket Härkätie',
          role: 'Shop assistant',
          description: 'Responsible for serving customers, processing sales transaction and restocking shelves.',
        },
        {
          date: '2013 - 2013',
          employer: 'The Finnish Defence Forces',
          role: '2nd Lieutenant',
          description: 'Completed my military service in Säkylä as an artillery observer.',
        },
        {
          date: '2012 - 2012',
          employer: 'Lidl Oy, Finland',
          role: 'Shop assistant',
          description: 'Responsible for serving customers, processing sales transaction and restocking shelves.',
        },
      ],
      skills: {
        frontend: [
          { name: 'Vue', level: 4 },
          { name: 'Vuetify', level: 4 },
          { name: 'Javascript', level: 3 },
          { name: 'HTML/CSS', level: 3 },
        ],
        backend: [
          { name: 'Java', level: 4 },
          { name: 'Spring Boot', level: 3 },
          { name: 'MSSQL', level: 3 },
        ],
        other: [
          { name: 'Git', level: 3 },
          { name: 'Docker', level: 3 },
          { name: 'Kubernetes', level: 2 },
          { name: 'Liferay', level: 3 },
          { name: 'Altova MapForce', level: 4 },
        ],
        softskills: [
          { name: 'Communication', level: 5 },
          { name: 'Critical thinking', level: 4 },
          { name: 'Problem solving', level: 4 },
        ],
      },
      //   { name: 'Java', level: 4 },
      //   { name: 'Vue', level: 4 },
      //   { name: 'Vuetify', level: 4 },
      //   { name: 'Javascript', level: 3 },
      //   { name: 'HTML/CSS', level: 3 },
      //   { name: 'Git', level: 3 },
      //   { name: 'Docker', level: 3 },
      //   { name: 'Kubernetes', level: 2 },
      //   { name: 'Communication', level: 5 },
      //   { name: 'Critical thinking', level: 4 },
      //   { name: 'Problem solving', level: 4 },
      //   { name: 'Liferay', level: 3 },
      //   { name: 'MSSQL', level: 3 },
      // ],
      education: [
        {
          title: 'Bachelors degree',
          subtitle: 'Computer Systems Networking and Telecommunications',
          institute: 'HAMK Häme University of Applied Sciences',
          period: '2014 - 2018',
        },
        { title: 'Matriculation Examination', period: '2009 - 2012', institute: 'Someron Lukio' },
      ],
    }
  },
  computed: {
    drawer() {
      let calculateWidth = this.$vuetify.breakpoint.width > 600 ? true : false
      return calculateWidth
    },
    isMobile() {
      return this.$vuetify.breakpoint.width > 600 ? true : false
    },
    h1Style() {
      return this.isMobile
        ? 'font-weight-bold primary--text mb-2 pb-0 display-3 pl-3'
        : 'font-weight-bold primary--text mb-2 pb-0 display-1 pl-3'
    },
  },
  methods: {},
}
</script>

<style>
.bg-svg {
  background-color: #141414;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
  /* background by SVGBackgrounds.com */
}
.wordWrap {
  overflow-wrap: anywhere;
  word-wrap: break-word;
  word-break: normal;
  hyphens: auto;
}
</style>
