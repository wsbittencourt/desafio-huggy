<template>
  <!-- Modal perfil de usuário -->
  <b-modal centered hide-header-close :id="contact.id" size="md" :hide-footer="hideFooter">

    <!-- Título da tela -->
    <template v-slot:modal-header>
      <div class="d-flex justify-content-between">
        <div class="p-2">
          <h2 class="modal-title">
          <Avatar :url="contact.photo" />{{ contact.name }}
          </h2>
        </div>
        <div class="p-2" :style="btnGroup">
          <b-icon icon="trash-fill" ></b-icon>
          <b-icon icon="pencil-fill" style="{margin-left: 15px}"></b-icon>
          <b-icon icon="x" style="{margin-left: 15px}"></b-icon>
        </div>
      </div>
    </template>
    <!-- Fim do título -->

    <!-- Corpo da tela modal -->
    <b-container fluid>
      <b-row>
        <b-col class="col-4" :style="labelStyle">Email</b-col>
        <b-col>{{ contact.email }}</b-col>
      </b-row>
      <b-row>
        <b-col class="col-4" :style="labelStyle">Endereço</b-col>
        <b-col>{{ contact.address }}</b-col>
      </b-row>
      <b-row>
        <b-col class="col-4" :style="labelStyle">Bairro</b-col>
        <b-col>{{ contact.district }}</b-col>
      </b-row>
      <b-row>
        <b-col class="col-4" :style="labelStyle">Cidade</b-col>
        <b-col>{{ contact.city }}</b-col>
      </b-row>
      <b-row>
        <b-col class="col-4" :style="labelStyle">Estado</b-col>
        <b-col>{{ contact.state }}</b-col>
      </b-row>
    </b-container>
  </b-modal>
  <!-- Fim da tela modal -->
</template>

<script>
import Avatar from "../dashboard/Avatar"

export default {
  name: "ModalShowContact",
  components: {
    Avatar,
  },
  props: ['contact'],
  data() {
    const hideFooter = true;
    const labelStyle = {
      "text-align": "right"
    };
    const btnGroup = {
      "color": "#505050",
      "size": "15px",
      "cursor": "pointer",
    };
    return { hideFooter,labelStyle,btnGroup };
  }
};
</script>

<style scoped>
@import '~bootstrap/dist/css/bootstrap.css';

h2{
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  display: flex;
  align-items: right;
  letter-spacing: 0.15px;
  color: #262626;
}
</style>
