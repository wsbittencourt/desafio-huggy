import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  contacts: [],
  tmpContact: {},
  api: "https://api.huggy.app/v3/contacts/",
  apiHeaders: require('./config.json')
}

const getters = {
  //Retorna o contato o qual está sendo manipulado
  getContact: state => {
    return state.tmpContact
  }
}

const actions = {
  //Busca todos os contatos existentes no servidor
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

  //Deleta um contato no servidor
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
  },
  editContact({ commit, dispatch },{obj,contactId}){
    const key = this.state.apiHeaders.Authorization
    axios(this.state.api + contactId, {
      method: 'PUT',
      mode: 'no-cors',
      data: obj,  
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": key
      },
      credentials: 'same-origin',
    }).then(() => {
      commit('SET_CONTACT', obj);
    })
      .catch((error) => {
        console.log(error);
    })
      .finally(() =>{
        dispatch("getContacts");
      });
  },
  addContact( {dispatch }, obj ){
    const key = this.state.apiHeaders.Authorization

    axios(this.state.api  , {
      method: 'POST',
      mode: 'no-cors',
      data: obj,  
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": key
      },
      credentials: 'same-origin',
    }).then((res) => {
      //Msg sucesso
      if(res.status == 201){
        console.log("Contato cadastrado com sucesso!");
      }      
    })
      .catch((error) => {
        console.log(error);
    })
      .finally(() =>{
        dispatch("getContacts");
      });
  },
}

const mutations = {
  //Atualiza a lista de contatos
  SET_CONTACTS(state, contacts) {
    state.contacts = contacts
  },

  //Atualiza o contato a ser manipulado
  SET_CONTACT(state,newContact){
    state.tmpContact = newContact
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})