<template>
  <span>
    <b-icon icon="pencil-fill" @click="editContact"></b-icon>
  </span>
</template>

<script>

export default {
  name: "BtnEdit",
  props: ['contact'],
  methods: {
    editContact() {
      this.$store.commit('SET_CONTACT', this.contact);
      this.$root.$emit('bv::show::modal','modalEdit');
      this.$root.$emit('bv::hide::modal',this.id);
    }
  }
}
</script>

<style scoped>
</style>