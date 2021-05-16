<template>
  <!-- Modal perfil de usuário -->
  <b-modal centered hide-header-close :id="modalID" :style="modalSize" :hide-footer="hideFooter">

    <!-- Título da tela -->
    <template v-slot:modal-header>
      <b-container>
        <b-row>
          <b-col>
            <h2>Editar contato</h2>
          </b-col>
        </b-row>
      </b-container>
        
    </template>
    <!-- Fim do título -->

    <!-- Corpo da tela modal -->
    <b-form @submit.stop.prevent="edit">

      <b-row>
        <b-col cols="9">
          <b-form-group id="grup-name">
            <label for="name">Nome</label>
            <b-form-input class="formInput" name="name" :value="contact.name" 
              placeholder="Nome" v-model="contact.name" 
              v-validate="{ required: true }" :state="validateState('name')"></b-form-input>
              <b-form-invalid-feedback id="name-live-feedback">
                <span class="textError">Campo obrigatório</span>  
              </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="9">
          <b-form-group id="grup-email">
            <label for="email">Email</label>
            <b-form-input class="formInput" name="email" :value="contact.email" 
              placeholder="Email" v-model="contact.email"
              v-validate="{ email: true }" :state="validateState('email')"></b-form-input>
              <b-form-invalid-feedback id="email-live-feedback">
                <span class="textError">Email inválido</span>  
              </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="5">
          <b-form-group id="grup-telefone">
            <label for="telefone">Telefone</label>
            <b-form-input class="formInput" name="telefone" :value="contact.phone" 
              placeholder="Telefone" v-model="contact.phone"
              v-validate="{ phone : true }" :state="validateState('telefone')"></b-form-input>
              <b-form-invalid-feedback id="telefone-live-feedback">
                <span class="textError">{{ veeErrors.first('telefone') }}</span>
              </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="5">
          <b-form-group id="grup-celular">
            <label for="celular">Celular</label>
            <b-form-input class="formInput" name="celular" :value="contact.district" 
              placeholder="Celular" v-model="contact.mobile"
              v-validate="{ mobile : true }" :state="validateState('celular')"></b-form-input>
              <b-form-invalid-feedback id="celular-live-feedback">
                <span class="textError">{{ veeErrors.first('celular') }}</span>
              </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="9">
          <b-form-group id="grup-endereco">
            <label for="endereco">Endereço</label>
            <b-form-input class="formInput" name="endereco" :value="contact.address" 
              placeholder="Endereço" v-model="contact.address"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row align-h="start">
        <b-col cols="5">
          <b-form-group id="grup-district">
            <label for="district">Bairro</label>
            <b-form-input class="formInput" name="district" :value="contact.district" 
              placeholder="Bairro" v-model="contact.district"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="4">
          <b-form-group id="grup-estado">
            <label for="estado">Estado</label>
            <b-form-input class="formInput" name="estado" :value="contact.state" 
              placeholder="Estado" v-model="contact.state"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <hr>
      <div id="btnFoot">
        <b-button id="btnCancelar" @click.stop.prevent="hideModal"><strong>Cancelar</strong></b-button>
        <b-button class="formInput" type="submit" id="btnSalvar"><strong>Salvar</strong></b-button> 
      </div> 
    </b-form>
    
  </b-modal> 
  <!-- Fim da tela modal -->
</template>

<script>

import rules from '../../rules/rules'

export default {
  name: "ModalEditContact",
  props: ['modalID'],
  computed: {
    contact: {
      get() {
        return this.$store.getters.getContact
      },
      set() {
        this.$store.commit('SET_CONTACT', this.contact);
      }
    }
  },
  data() {
    const hideFooter = true;
    const modalSize = {};
    const phone = rules.phone;
    const mobile = rules.mobile;
    return { hideFooter,modalSize, phone, mobile };
  },
  methods: {
    onResize() {
      if (window.innerWidth > 768) {
        this.modalSize = { "width": "610px" }
      } else {
        this.modalSize = { "width": "400px" }
      }
    },
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    edit(){
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        const newContact = {  
          "name": this.contact.name,  
          "email": this.contact.email,
          "mobile": this.contact.mobile, 
          "phone": this.contact.phone,
          "address": this.contact.address,
          "city": this.contact.city,
          "district": this.contact.district,
          "state": this.contact.state,
          "obs": this.contact.obs,
          "photo": this.contact.photo,
        };
        this.$store.dispatch("editContact",{"obj": newContact, "contactId": this.contact.id});

        //Escode a janela de exibição dos dados
        this.$root.$emit('bv::hide::modal',this.modalID);
      });      
    },
    hideModal() {
        this.$root.$emit('bv::hide::modal',this.modalID);
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
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
  font-weight: bold;
}

#btnSalvar {
  background-color: #321BDE;
  border-radius: 8px;
  width: 70px;
  height: 36px;

  font-size: 14px;
  color: #FFFFFF;
  margin-left: 20px;
}

#btnCancelar {
  background:none;
  border:none;
  margin:0;
  padding:0;
  cursor: pointer;

  color: #505050;
  font-size: 14px;
}

#btnSalvar:focus, #btnSalvar:active, #btnCancelar:focus,
 #btnCancelar:active, .formInput:focus, .formInput:active{
  /* Remove o sombreamento */
  box-shadow: none;
}
.textError{
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #AD2213;
}

#btnFoot{
  text-align: right;
  margin: 10px 10px 10px;
}

label{
  color: #262626;
  font-size: 12px;
  font-weight: bold;
}

.formInput{
  background: #F8F8F8;
  height: 36px;
  border: 1px solid #E1E1E1;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #262626;
}
</style>
