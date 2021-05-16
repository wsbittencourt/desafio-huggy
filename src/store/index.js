import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g
  }

  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra]
    string = string.replace(expressaoRegular, letra)
  }

  return string
}

const state = {
  contacts: [],
  tmpContact: {},
  api: "https://api.huggy.app/v3/contacts/",
  apiHeaders: require('./config.json'),
  searchWord: null,
  filteredContacts: null,
}

const getters = {
  //Retorna o contato o qual está sendo manipulado
  getContact: state => {
    return state.tmpContact
  },
  allContacts: (state) => state.contacts,

  getSearchWord: (state) => state.searchWord,

  getFilteredContacts: (state) => state.filteredContacts
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
  SET_CONTACT ({ commit }, contact) {
    commit('SET_CONTACT', contact)
  },
  FILTERED_CONTACTS ({ commit }, word) {
    commit('FILTERED_CONTACTS', word)
  }
}

const mutations = {
  //Atualiza a lista de contatos
  SET_CONTACTS(state, contacts) {
    state.contacts = contacts
  },

  //Atualiza o contato a ser manipulado
  SET_CONTACT(state,newContact){
    state.tmpContact = newContact
  },

  FILTERED_CONTACTS (state, word) {
    if (!(word) || word === '{}') {
        state.searchWord = null
        state.filteredContacts = null
    } else {
      state.searchWord = word
      word = removerAcentos(word.trim().toLowerCase())
      state.filteredContacts = state.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(word) || contact.email.toLowerCase().includes(word) || contact.phone.toLowerCase().includes(word)
      })
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})