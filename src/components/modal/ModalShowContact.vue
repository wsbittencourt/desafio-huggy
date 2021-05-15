<template>
  <!-- Modal perfil de usuário -->
  <b-modal centered hide-header-close :id="contact.id" :style="modalSize" :hide-footer="hideFooter">

    <!-- Título da tela -->
    <template v-slot:modal-header>
      <b-container>
        <b-row>
          <b-col>
            <h2 class="modal-title">
            <Avatar :url="contact.photo" />{{ contact.name }}
            </h2>
          </b-col>
          <b-col :style="btnGroup">
            <BtnDelete :contact-id="contact.id" />
            <span :style="btnSpace">
              <BtnEdit :contact-id="contact.id" />
            </span>
            <BtnClose :id="contact.id" />
          </b-col>
        </b-row>
      </b-container>
        
    </template>
    <!-- Fim do título -->

    <!-- Corpo da tela modal -->
    <b-container fluid>
      <b-row :style="lineHeight">
        <b-col class="col-3" :style="labelStyle">Email</b-col>
        <b-col :style="contactData">{{ contact.email }}</b-col>
      </b-row>
      <b-row :style="lineHeight"> 
        <b-col class="col-3" :style="labelStyle">Endereço</b-col>
        <b-col :style="contactData">{{ contact.address }}</b-col>
      </b-row>
      <b-row :style="lineHeight">
        <b-col class="col-3" :style="labelStyle">Bairro</b-col>
        <b-col :style="contactData">{{ contact.district }}</b-col>
      </b-row>
      <b-row :style="lineHeight">
        <b-col class="col-3" :style="labelStyle">Cidade</b-col>
        <b-col :style="contactData">{{ contact.city }}</b-col>
      </b-row>
      <b-row :style="lineHeight">
        <b-col class="col-3" :style="labelStyle">Estado</b-col>
        <b-col :style="contactData">{{ contact.state }}</b-col>
      </b-row>
    </b-container>
  </b-modal>
  <!-- Fim da tela modal -->
</template>

<script>
import Avatar from "../dashboard/Avatar"
import BtnDelete from "./BtnDelete"
import BtnEdit from "./BtnEdit"
import BtnClose from "./BtnClose"

export default {
  name: "ModalShowContact",
  components: {
    Avatar,
    BtnDelete,
    BtnEdit,
    BtnClose,
  },
  props: ['contact'],
  data() {
    const hideFooter = true;
    const modalSize = {};
    const labelStyle = {
      "text-align": "right",
      "font-size": "12px",
      "color": "#757575",
    };
    const btnGroup = {
      "color": "#505050",
      "size": "15px",
      "cursor": "pointer",
      "text-align": "right",
    };
    const contactData = {
      "font-size": "14px",
      "color": "#262626",
    };
    const lineHeight = {
      "height" : "42px",
    };
    const btnSpace = {
      "margin": "0px 39px 0px 39px"
    };
    return { hideFooter,modalSize,labelStyle,btnGroup,contactData,lineHeight,btnSpace };
  },
  methods: {
    onResize() {
      if (window.innerWidth > 768) {
        this.modalSize = { "width": "610px" }
      } else {
        this.modalSize = { "width": "400px" }
      }
    },
    hideModal(id) {
      console.log('Janela Fechada!');
      this.$root.$emit('bv::hide::modal',id)
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
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
