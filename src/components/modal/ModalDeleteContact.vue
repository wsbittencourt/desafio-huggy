<template>
  <!-- Modal confirmação para exclusão -->
  <b-modal centered hide-header-close id="modalDelete" size="sm" 
    :hide-header='true' :hide-footer='true'>
    <!-- Título da tela -->
    <h2>
        Excluir este contato?
      </h2>
    <!-- Fim do título -->

    <!-- Botões de ações -->      
      <div>
        <b-button id="btnCancelar" @click.stop.prevent="hideModal">Cancelar</b-button>
        <b-button id="btnExcluir" @click.stop.prevent="deleteContact">Excluir</b-button> 
      </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalDeleteContact',
  methods: {
    hideModal() {
      this.$root.$emit('bv::hide::modal','modalDelete');
    },
    deleteContact(){
      this.$store.dispatch("deleteContact",{'id': this.id});
      this.hideModal();
    }
  },
  computed: {
    id: {
      get() {
        return this.$store.getters.getIdToDelete
      }
    }
  }
};
</script>

<style scoped>

h2{
  font-size: 20px;
  color: #000000;
  text-align: left;
  margin-bottom: 49px;
}
div{
  text-align: right;
  font-weight: bold;
}

#btnCancelar{
  background:none;
  border:none;
  margin:0;
  padding:0;
  cursor: pointer;

  color: #505050;
  font-size: 14px;
  font-weight: bold;
}

#btnExcluir{
  background:none;
  border:none;
  margin:0;
  padding:0;
  cursor: pointer;
  margin-left: 32px;

  color: #DE321B;
  font-size: 14px;
  font-weight: bold;
}

#btnExcluir:focus, #btnExcluir:active, #btnCancelar:focus,
 #btnCancelar:active{
  /* Remove o sombreamento */
  box-shadow: none;
}

</style>
