<template>
  <v-container class="mx-auto">
    <div class="headline primary--text text-uppercase pb-1 font-weight-light pt-3">{{ skillSetName }}</div>
    <v-row v-for="(skill, s) in skills" :key="s">
      <v-col class="px-0">
        <div class="title white--text wordWrap" v-text="skill.name" />
      </v-col>
      <v-col class="px-0">
        <v-rating
          empty-icon="mdi-rhombus-outline"
          full-icon="mdi-rhombus"
          background-color="primary"
          color="primary"
          :value="skill.level"
          small
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skillSetName: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style>
.wordWrap {
  overflow-wrap: anywhere;
  word-wrap: break-word;
  word-break: normal;
  hyphens: auto;
}
</style>
