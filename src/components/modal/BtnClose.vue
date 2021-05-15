<template>
  <b-icon icon="x" @click="hideModal"></b-icon>
</template>

<script>

export default {
  name: "BtnClose",
  props: ['id'],
  methods: {
    hideModal() {
      this.$root.$emit('bv::hide::modal',this.id);
    }
  }
}
</script>

<style scoped>
</style>