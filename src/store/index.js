import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDarkMode: false,
  },
  mutations: {
    setIsDarkMode(state, value) {
      state.isDarkMode = value
    },
  },
  actions: {
    setIsDarkMode({ commit }, value) {
      commit('setIsDarkMode', { isDarkMode: value })
    },
  },
  getters: {
    getIsDarkMode(state) {
      return state.isDarkMode
    },
  },
  modules: {},
})
