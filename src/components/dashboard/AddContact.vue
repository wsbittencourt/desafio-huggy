<template>
  <b-button id="btn" @click="showModal">
      <b-icon icon="plus" aria-hidden="true"></b-icon> Adicionar contato
  </b-button>
</template>

<script>
export default {
  name: "AddContact",
  methods: {
    showModal() {
      const emptyContact = {  
        "name": "",  
        "email": "",
        "mobile": "", 
        "phone": "",
        "address": "",
        "city": "",
        "district": "",
        "state": "",
        "obs": "Apenas mais um contato.",
      };
      this.$store.commit('SET_CONTACT', emptyContact);
      this.$root.$emit('bv::show::modal','modalAdd');
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#btn {
  font-family: "Roboto", sans-serif;
  background-color: #321bde;
  font-size: 14px;
  border-radius: 8px;
  font-weight: bold;
}
#btn:focus, #btn:active{
  /* Remove o sombreamento */
  box-shadow: none;
}
</style>
