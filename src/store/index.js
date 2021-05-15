import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  contacts: [],
  api: "https://api.huggy.app/v3/contacts/",
  apiHeaders: require('./config.json')
}

const getters = {}

const actions = {
  getContacts({ commit }) {
    const key = this.state.apiHeaders.Authorization
    axios(this.state.api, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": key
      },
      credentials: 'same-origin',
    }).then((response) => {
      commit('SET_CONTACTS', response.data)
    })
      .catch((error) => {
        console.log("error " + error);
      });
  },
  deleteContact({dispatch },obj) {
    const key = this.state.apiHeaders.Authorization
    axios(this.state.api + obj.id, {
      method: 'DELETE',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": key
      },
      credentials: 'same-origin',
    }).catch((error) => {
        console.log("Error " + error);
    })
      .finally(() =>{
        dispatch("getContacts");
      });
  }
}

const mutations = {
  SET_CONTACTS(state, contacts) {
    state.contacts = contacts
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})