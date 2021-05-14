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
            <img v-bind:src="contact.photo" width="32" height="32" class="avatar"/> {{ contact.name }}
        </b-col>

        <b-col> {{ contact.email }} </b-col>

        <b-col align-h="between" class="menu">
          <span>{{ contact.phone }}</span>

          <span class="edit-delete">
            <b-icon icon="pencil-fill"></b-icon>
            <b-icon icon="trash-fill" id="btn-trash"></b-icon>
          </span>
        </b-col>

        <b-modal :id="contact.id" :title="contact.name">
            <p class="my-4">Contato {{contact.name}}</p>
        </b-modal>
      </b-row>
    </section>

    <!-- Exibe mensagem caso não existam contatos cadastrados -->
    <section v-if="contacts.length == 0">
      <div id="hide">
        <div><img src="../../assets/book.png" /></div>
        <p>Ainda não há contatos</p>
        <AddContact />
      </div>
    </section>
  </div>
</template>

<script>
import AddContact from "./AddContact";

export default {
  name: "ContactList",
  components: {
    AddContact,
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

.avatar{
  border-radius: 50%;
  margin-right: 20px;
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
