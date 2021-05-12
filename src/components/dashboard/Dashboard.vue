<template>
  <b-container class="vh-100" id="container">
    <b-col md="10" sm="8" offset-md="1">
      <h2>Contatos</h2>
      <b-card id="box"> teste </b-card>
    </b-col>
  </b-container>
</template>

<script>
// import ContactList from "./ContactList";

export default {
  name: "Dashboard",
  components: {
    // ContactList,
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f8f8f8");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "");
  },
};
</script>

<style scoped>
h2 {
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding-top: 18px;
}
#box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-bottom: 32px;

  top: 18px;

  background: #ffffff;

  border: 1px solid #e1e1e1;
  box-sizing: border-box;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
}

@media (min-width: 992px) {
  #box {
    height: 928px;
  }
}

@media (min-width: 768px) {
  #box {
    height: 600px;
  }
}

@media (max-width: 767px) {
  #box {
    height: 400px;
  }
}
</style>
