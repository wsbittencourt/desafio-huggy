<template>
  <b-table hover :items="items" :fields="fields"></b-table>
</template>

<script>
// import AddContact from "./AddContact";

export default {
  name: "ContactList",
  created: function () {
    //Carregar a lista de contatos aqui!
  },
  data() {
    return {
      // Cabeçalho da tabela
      fields: ["nome", "email", "telefone"],
      items: [],
      // items: [
      //   //   Exemplo coleção a ser exibida na lista
      //   //
      //   { nome: "teste", email: "teste@teste.io", telefone: "0000-0000" },
      // ],
    };
  },
  // components: {
  //   AddContact,
  // },
};
</script>

<style scoped>
</style>
