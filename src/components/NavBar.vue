<template>
  <div>
    <v-btn
      v-show="this.$vuetify.breakpoint.width > 600 ? false : true"
      fab
      absolute
      top
      right
      class="mt-12"
      @click.stop="drawerOpen = !drawerOpen"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-fab-transition>
      <v-btn
        v-show="menuFab && this.$vuetify.breakpoint.width < 600"
        v-scroll="onScroll"
        fab
        fixed
        bottom
        right
        @click.stop="drawerOpen = !drawerOpen"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-navigation-drawer
      fixed
      color="grey darken-4"
      :right="this.$vuetify.breakpoint.width > 600 ? false : true"
      dark
      v-model="drawerOpen"
      :disable-resize-watcher="true"
      width="256px"
      class="py-0"
    >
      <v-list-item class="pt-8">
        <v-list-item-content>
          <v-list-item-title class="display-1 text-center">
            Santtu Heleä
          </v-list-item-title>
          <v-list-item-subtitle class="title text-center font-weight-light yellow--text text--lighten-1">
            Full-stack Developer
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list nav class="pb-0 pt-12">
        <v-list-item v-for="(nav, n) in navLinks" :key="n" link @click="goToSection(nav.sectionId)">
          <v-list-item-content>
            <v-list-item-title class="text-center font-weight-medium title">
              {{ nav.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-row justify="center">
          <v-btn icon class="my-8 mx-2" href="https://www.linkedin.com/in/santtu-hele%C3%A4-02668712b/" target="_blank">
            <v-icon color="primary" large>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon class="my-8 mx-2" href="https://github.com/santtuhelea" target="_blank">
            <v-icon color="primary" large>mdi-github</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navLinks: [
        { title: 'About Me', sectionId: 'About' },
        { title: 'Experience', sectionId: 'Experience' },
        { title: 'Skills & Education', sectionId: 'SkillsAndEdu' },
        // { title: 'Portfolio', sectionId: 'Portfolio' },
        // { title: 'Contact', sectionId: 'Contact' },
      ],
      drawerOpen: this.$vuetify.breakpoint.width > 600 ? true : false,
      menuFab: false,
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.menuFab = top > 100
    },
    goToSection(element) {
      this.$vuetify.goTo(document.getElementById(element))
      if (!this.$vuetify.breakpoint.width > 600) {
        this.drawerOpen = false
      }
    },
  },
}
</script>

<style></style>
