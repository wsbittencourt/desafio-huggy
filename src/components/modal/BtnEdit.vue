<template>
  <b-icon icon="pencil-fill" @click="editContact"></b-icon>
</template>

<script>

export default {
  name: "BtnEdit",
  props: ['contact-id'],
  methods: {
    editContact() {
      console.log('Editado!');
    }
  }
}
</script>

<style scoped>
</style>