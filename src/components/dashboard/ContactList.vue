<template>
  <b-table
    small
    hover
    borderless
    show-empty
    :items="items"
    :fields="fields"
    id="table"
  >
    <b-table-column field="nome" label="Nome" v-slot="props">
      {{ props.row.name }}
    </b-table-column>

    <b-table-column field="email" label="Email" v-slot="props">
      {{ props.row.email }}
    </b-table-column>

    <b-table-column field="telefone" label="Telefone" v-slot="props">
      {{ props.row.phone }}
    </b-table-column>

    <template #empty>
      <div id="hide">
        <div><img src="../../assets/book.png" /></div>
        <p>Ainda não há contatos</p>
        <AddContact />
      </div>
    </template>
  </b-table>
</template>

<script>
import AddContact from "./AddContact";

export default {
  name: "ContactList",
  created: function () {
    //Carregar a lista de contatos aqui!
  },
  data() {
    const fields = [
      { key: "nome", thStyle: "border-bottom: 1px solid #E1E1E1;padding-left: 24px !important" },
      { key: "email", thStyle: "border-bottom: 1px solid #E1E1E1;padding-left: 24px !important" },
      { key: "telefone", thStyle: "border-bottom: 1px solid #E1E1E1;padding-left: 24px !important" },
    ];
    const items = []; /*[{'name': 'Wagner','telefone':'3214-3421','email':'teste@teste.com'},
                     {'name': 'David','telefone':'3200-3421','email':'teste2@teste.com'}] */
    return {
      fields,
      items,
    };
  },
  components: {
    AddContact,
  },
};
</script>

<style scoped>
p {
  font-size: 16px;
  line-height: 24px;

  margin-top: 16px;
  margin-bottom: 24px;

  color: #757575;
}
#hide {
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
  border: none;
}

#table {
  position: absolute;
  left: 0%;
  right: 0%;
}

@media (min-width: 768px) {
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
