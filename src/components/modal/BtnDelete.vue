<template>
  <a @click="deleteContact" >
    <b-icon icon="trash-fill" id="btn-trash"></b-icon>
  </a>
</template>

<script>

export default {
  name: "BtnDelete",
  props: ['contact-id','contact-name'],
  methods: {
    deleteContact() {
      console.log('Delete from'+"{{contact-id}}");
    }
  }
}
</script>

<style scoped>
#btn-trash{
  color: #505050;
  float: right;
  display: none;
}
</style>