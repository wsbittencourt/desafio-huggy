<template>
  <b-form-input
    id="search"
    type="search"
    placeholder="Buscar contato"
    icon="search"
    v-model="searchWord"  
  ></b-form-input>
</template>

<script>
export default {
  name: 'SearchInput',
  computed: {
    searchWord: {
      get () {
        return this.$store.state.searchWord
      },
      set (value) {
        this.$store.dispatch('FILTERED_CONTACTS', value)
      }
    }
  },
};
</script>

<style scoped>
#search {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;

  position: static;
  width: 250px;
  height: 36px;
  left: 16px;
  top: 16px;

  background: #f8f8f8;

  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}

#search:focus, #search:active{
  /* Remove o sombreamento */
  box-shadow: none;
}
</style>
