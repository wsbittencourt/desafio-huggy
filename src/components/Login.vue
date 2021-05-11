<template>
  <b-container id="login-container">
    <b-row class="vh-100 text-center" align-v="center">
      <b-col align-h="center">
        <h1>Login</h1>
        <ButtonLogin/>
      </b-col>      
    </b-row>
  </b-container>    
</template>

<script>

import ButtonLogin from './ButtonLogin.vue'

export default {
  name: 'Login',
  components: {
    ButtonLogin,
  },
}
</script>

<style scoped>
  /* @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    body{
        font-family: 'Roboto', sans-serif;
    }  */
    #login-container{
      background-color: #F8F8F8;
    }
    h1{
      font-size: 24px;
      color: #262626;
    }

</style>
