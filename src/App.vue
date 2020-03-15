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
                About me
              </h1>
            </v-col>
            <v-col cols="8" class="pt-0">
              <p class="white--text font-weight-regular title">
                I'm Santtu, a full-stack developer with 3 years of experience, living in Hämeenlinna, Finland. Currently
                I work in a development team of Triplan Oy. Triplan Oy specialises in case, information and document
                management solutions. 'Stack' used depends on the project I am working on but generally it is in the
                lines of Java backend (Spring Boot or plain Java) with MSSQL and frontend of Vue + Vuetify / Javascript
                / Vaadin.
              </p>
              <p class="white--text font-weight-regular title">
                I thrive to learn new tech, so often off-hours, I find educating myself about the web development and
                everything around it. When I am not sitting in front of a computer I like to workout and play floorball.
                And when it is not freezing out here, disc golfing is pretty damn fun and amazing.
              </p>
            </v-col>
            <v-col>
              <v-list dark dense>
                <v-list-item class="py-3 my-0" v-for="(info, i) in listInfo" :key="i">
                  <v-list-item-icon>
                    <v-icon color="primary" large v-text="info.icon" />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-regular title" v-text="info.text" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </section>
        <section class="container container--fluid" id="Experience">
          <v-row>
            <v-col cols="12" class="pb-0">
              <h1 :class="h1Style">
                Where I've been
              </h1>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-timeline dark>
                <v-timeline-item v-for="(jobs, j) in jobsArray" :key="j" color="primary" large>
                  <template v-slot:opposite>
                    <span class="white--text" v-text="jobs.date" />
                  </template>
                  <v-card class="elevation-2">
                    <v-card-title class="headline" v-text="jobs.title" />
                    <v-card-text v-text="jobs.description" />
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </section>
        <section class="container container--fluid" id="SkillsAndEdu">
          <v-row>
            <v-col cols="12" class="pb-0">
              <h1 :class="h1Style">
                What I know
              </h1>
            </v-col>
            <v-col cols="12" class="pt-0">
              <p class="white--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </v-col>
          </v-row>
        </section>
        <section class="container container--fluid" id="Portfolio">
          <v-row>
            <v-col cols="12" class="pb-0">
              <h1 :class="h1Style">
                Portfolio
              </h1>
            </v-col>
            <v-col cols="12" class="pt-0">
              <p class="white--text body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </v-col>
          </v-row>
        </section>
        <section class="container container--fluid" id="Contact">
          <v-row>
            <v-col cols="12" class="pb-0">
              <h1 :class="h1Style">
                Contact me
              </h1>
            </v-col>
            <v-col cols="12" class="pt-0">
              <p class="white--text body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',

  components: {
    'nav-bar': NavBar,
  },

  data() {
    return {
      listInfo: [
        { icon: 'mdi-account', text: 'Santtu Heleä' },
        { icon: 'mdi-city', text: 'Hämeenlinna, Finland' },
        { icon: 'mdi-email', text: 'santtu.helea@gmail.com' },
        { icon: 'mdi-phone', text: '+358407601099' },
      ],
      jobsArray: [{ date: '2017 - Present', title: 'Triplan Oy', description: 'asdasdasdas' }],
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
        ? 'font-weight-bold primary--text mb-2 pb-0 display-3'
        : 'font-weight-bold primary--text mb-2 pb-0 display-1'
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
</style>
