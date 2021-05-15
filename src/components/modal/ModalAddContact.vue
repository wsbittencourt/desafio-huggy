<template>
  <!-- Modal perfil de usuário -->
  <b-modal centered hide-header-close :id="modalID" :style="modalSize" :hide-footer="hideFooter">

    <!-- Título da tela -->
    <template v-slot:modal-header>
      <b-container>
        <b-row>
          <b-col>
            <h2> Adicionar novo contato </h2>
          </b-col>
        </b-row>
      </b-container>
        
    </template>
    <!-- Fim do título -->

    <!-- Corpo da tela modal -->
    <b-form @submit.stop.prevent="add">
      <b-form-group id="grup-name" label="Name" label-for="name">
        <b-form-input name="name" :value="contact.name" v-model="contact.name"></b-form-input>
      </b-form-group>

      <b-form-group id="grup-email" label="Email" label-for="email">
        <b-form-input name="email" :value="contact.email" v-model="contact.email"></b-form-input>
      </b-form-group>

      <b-form-group id="grup-telefone" label="Telefone" label-for="telefone">
        <b-form-input name="telefone" :value="contact.phone" v-model="contact.phone"></b-form-input>
      </b-form-group>

      <b-form-group id="grup-celular" label="Celular" label-for="celular">
        <b-form-input name="celular" :value="contact.district" v-model="contact.mobile"></b-form-input>
      </b-form-group>

      <b-form-group id="grup-endereco" label="Endereço" label-for="endereco">
        <b-form-input name="endereco" :value="contact.address" v-model="contact.address"></b-form-input>
      </b-form-group>

      <b-row>
        <b-col>
          <b-form-group id="grup-district" label="Bairro" label-for="district">
            <b-form-input name="district" :value="contact.district" v-model="contact.district"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group id="grup-estado" label="Estado" label-for="estado">
            <b-form-input name="estado" :value="contact.state" v-model="contact.state"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Footer -->
      <template>
        <span>
          <b-button class="ml-2">Cancelar</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button> 
        </span> 
      </template>  
    </b-form>
    
  </b-modal> 
  <!-- Fim da tela modal -->
</template>

<script>

export default {
  name: "ModalAddContact",
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
   
    return { hideFooter,modalSize };
  },
  methods: {
    onResize() {
      if (window.innerWidth > 768) {
        this.modalSize = { "width": "610px" }
      } else {
        this.modalSize = { "width": "400px" }
      }
    },
    add(){
      console.log('Adicionando contato')
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

      this.$store.dispatch("addContact",newContact);


      //Escode a janela de exibição dos dados
      this.$root.$emit('bv::hide::modal','modalAdd');
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
