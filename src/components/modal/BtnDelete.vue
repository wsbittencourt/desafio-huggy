<template>
  <b-icon icon="trash-fill" @click="deleteContact"></b-icon>
</template>

<script>

export default {
  name: "BtnDelete",
  props: ['id'],
  methods: {
    deleteContact() {
      this.$store.dispatch("deleteContact",{'id': this.id});
      this.$root.$emit('close',this.id);
    }
  }
}
</script>

<style scoped>
</style>