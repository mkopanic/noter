import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  notes: [] // Message string
}
const mutations = {
  addNote (state, note) {
    state.notes.push(note)
  }
}

export default new Vuex.Store({
  state,
  mutations,
});
