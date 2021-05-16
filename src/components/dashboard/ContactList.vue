<template>
  <b-container>
    <b-row id="contacts-head">
      <b-col md="5" id="name"><strong> Nome <b-icon icon="arrow-down"></b-icon></strong></b-col>
      <b-col md="4" ><strong> Email </strong></b-col>
      <b-col md="3" ><strong> Telefone </strong></b-col>
    </b-row>
    
    <!-- Relação de contatos -->
    <!-- contact in contacts -->
    <section id="cardBody">
      <b-row v-for="contact in filteredContacts" :key="contact.id" class="contacts-row" v-b-modal="contact.id">
        <b-col md="5" sm="6" align-self="stretch">
          <span id="avatarIcon"><Avatar :url="contact.photo"/></span>{{ contact.name }}
        </b-col>

        <b-col md="4" sm="3"> {{ contact.email }} </b-col>

        <b-col md="3" sm="2" class="menu">
          <span>{{ contact.phone }}</span>

          <span class="edit-delete">
            <b-icon icon="pencil-fill"></b-icon>
            <b-icon icon="trash-fill" id="btn-trash"></b-icon>
          </span>
        </b-col>

        <!-- Modal para exibir dados do contato -->
        <ModalShowContact :contact="contact" />
      </b-row>
      <!-- Fim relação de contatos -->
    </section>

    <!-- Exibe mensagem caso não existam contatos cadastrados -->
    <section v-if="contacts.length == 0">
      <div class="hide">
        <div><img src="../../assets/book.png" /></div>
        <p>Ainda não há contatos</p>
        <AddContact />
      </div>
    </section>

    <!-- Exibe mensagem caso não exista resultado na pesquisa -->
    <section v-if="filteredContacts.length == 0 && contacts.length != 0">
      <div class="hide">
        <p><b-icon icon="search" id="searchIcon"></b-icon></p>
        <p style="color: #757575">Nenhum resultado encontrado.<br/>Deseja adicionar um novo contato?</p>
        <AddContact />
      </div>
    </section>
    <!-- Fim de mensagem -->

    <ModalEditContact modalID="modalEdit"/>
    <ModalAddContact  modalID="modalAdd"/>
    <ModalDeleteContact />
  </b-container>
</template>

<script>
import AddContact from "./AddContact";
import Avatar from "./Avatar";
import ModalShowContact from "../modal/ModalShowContact";
import ModalEditContact from "../modal/ModalEditContact";
import ModalAddContact from "../modal/ModalAddContact";
import ModalDeleteContact from "../modal/ModalDeleteContact"

export default {
  name: "ContactList",
  components: {
    AddContact,
    Avatar,
    ModalShowContact,
    ModalEditContact,
    ModalAddContact,
    ModalDeleteContact,
  },
  computed: {
    contacts() {
       return this.$store.state.contacts; 
    },

    filteredContacts () {
      try {
        let contatosFiltrados = (this.$store.getters.getFilteredContacts || this.$store.getters.allContacts)
        return contatosFiltrados
      } catch (error) {
        console.log(error)
      }
      return {}
    }
  },
  mounted() {
    this.$store.dispatch("getContacts");
  }
};
</script>

<style scoped>
#contacts-head {
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 13px;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 16px;

  text-align: left;

  color: #505050;
}

.contacts-row {
  border-radius: 8px;
  margin: 0px 8px 8px 0px;
  padding: 12px 16px 12px 5px;
  height: 56px;

  font-size: 14px;
  color: #262626;

  cursor: pointer;
}

.contacts-row:hover,.contacts-row:target {
  background: #f8f8f8;
}

.edit-delete{
  color: #505050;
  float: right;
  display: none;
}

.contacts-row:hover .edit-delete{
  display: block;
}

#btn-trash{
  margin-left:23px
}

.hide {
  align-items: center;
  text-align: center;
  border: none;
}

#searchIcon{
  width: 120px; 
  height: 120px;
  color: #757575;
  margin-top: 100px;
}

#cardBody{
  position:relative;
  overflow-y:scroll;
}

@media (min-width: 768px) {
  #contacts-head #name {
    padding-left: 24px;
  }
  #hide {
    padding-top: 100px;
  }
  #avatarIcon { 
    margin-right: 10px;
  }
  #cardBody{
    height: 70vh;
  }
}

@media (max-width: 767px) {
  #hide {
    padding-top: 15px;
  }
  #searchIcon{
  width: 50px; 
  height: 50px;
  margin-top: 30px;  
  }
  .contacts-row {
    height: 150px;
  }
  #cardBody{
    margin-top: 50px;
    height: 40vh;
  }
}
</style>
