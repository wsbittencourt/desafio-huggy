<template>
  <b-icon icon="trash-fill" @click="deleteContact"></b-icon>
</template>

<script>

export default {
  name: "BtnDelete",
  props: ['contact-id'],
  methods: {
    deleteContact() {
      console.log('Deletado!');
    }
  }
}
</script>

<style scoped>
</style>