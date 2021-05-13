<template>
  <b-container class="vh-100">
    <b-col md="10" sm="8" offset-md="1">
      <h2>Contatos</h2>
      <b-card id="box">
        <div id="header">
          <div><SearchInput /></div>
          <div id="addContact"><AddContact /></div>
        </div>
        <ContactList />
      </b-card>
    </b-col>
  </b-container>
</template>

<script>
import ContactList from "./ContactList";
import SearchInput from "./SearchInput";
import AddContact from "./AddContact";

export default {
  name: "Dashboard",
  components: {
    ContactList,
    SearchInput,
    AddContact,
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
  padding: 0px;
  margin-bottom: 32px;

  top: 18px;

  background: #ffffff;

  border: 1px solid #e1e1e1;
  box-sizing: border-box;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
}
#header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 29px;
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
    height: 80vh;
  }
  #header {
    display: flex;
    flex-direction: column;
  }
  #addContact {
    margin-top: 10px;
    margin-left: 10px;
  }
}
</style>
