<template>
  <b-icon icon="trash-fill" @click="deleteContact"></b-icon>
</template>

<script>

export default {
  name: "BtnDelete",
  props: ['id'],
  methods: {
    deleteContact() {
      this.$store.dispatch('SET_ID_TO_DELETE', this.id);
      this.$root.$emit('bv::hide::modal',this.id);
      this.$root.$emit('bv::show::modal','modalDelete');           
    }
  }
}
</script>

<style scoped>
</style>