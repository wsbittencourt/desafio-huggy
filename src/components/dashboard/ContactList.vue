<template>
  <div>
    <b-row id="contacts-head" align-h="between">
      <b-col id="name"><strong> Nome <b-icon icon="arrow-down"></b-icon></strong></b-col>
      <b-col><strong> Email </strong></b-col>
      <b-col><strong> Telefone </strong></b-col>
    </b-row>

    <!-- Relação de contatos -->
    <section>
      <b-row v-for="contact in contacts" :key="contact.id" class="contacts-row" v-b-modal="contact.id">
        <b-col id="name"> 
            <Avatar :url="contact.photo"/> {{ contact.name }}
        </b-col>

        <b-col> {{ contact.email }} </b-col>

        <b-col align-h="between" class="menu">
          <span>{{ contact.phone }}</span>

          <span class="edit-delete">
            <b-icon icon="pencil-fill"></b-icon>
            <b-icon icon="trash-fill" id="btn-trash"></b-icon>
          </span>
        </b-col>

        <!-- Modal perfil de usuário -->
        <b-modal :id="contact.id" size="lg" hide-foote>
          <template #modal-title>
            <b-row align-h="start">
              <b-col><Avatar :url="contact.photo"/><h2>{{ contact.name }}</h2></b-col>
            </b-row>                            
          </template>
          <b-row>
            <b-col class="text-right">Email</b-col>
            <b-col>{{contact.email}}</b-col>
          </b-row>
          <b-row>
            <b-col class="text-right">Endereço</b-col>
            <b-col>{{contact.address}}</b-col>
          </b-row>
          <b-row>
            <b-col class="text-right">Bairro</b-col>
            <b-col>{{contact.district}}</b-col>
          </b-row>
          <b-row>
            <b-col class="text-right">Cidade</b-col>
            <b-col>{{contact.city}}</b-col>
          </b-row>
          <b-row>
            <b-col class="text-right">Estado</b-col>
            <b-col>{{contact.state}}</b-col>
          </b-row>
        </b-modal>
        <!-- Fim modal perfil de usuário -->
      </b-row>
      <!-- Fim relação de contatos -->
    </section>

    <!-- Exibe mensagem caso não existam contatos cadastrados -->
    <section v-if="contacts.length == 0">
      <div id="hide">
        <div><img src="../../assets/book.png" /></div>
        <p>Ainda não há contatos</p>
        <AddContact />
      </div>
    </section>
    <!-- Fim de mensagem -->

  </div>
</template>

<script>
import AddContact from "./AddContact";
import Avatar from "./Avatar"

export default {
  name: "ContactList",
  components: {
    AddContact,
    Avatar
  },
  computed: {
    contacts() {
      return this.$store.state.contacts; 
    },
  },
  mounted() {
    this.$store.dispatch("getContacts");
  },
};
</script>

<style scoped>
#contacts-head {
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 13px;
  margin-bottom: 3px;
  left: 0%;
  right: 0%;
  top: 100%;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  text-align: left;
  letter-spacing: 0.4px;

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

#hide {
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
  border: none;
}

@media (min-width: 768px) {
  #contacts-head #name {
    padding-left: 24px;
  }
  #hide {
    padding-top: 100px;
  }
}

@media (max-width: 767px) {
  #hide {
    padding-top: 15px;
  }
}
</style>
